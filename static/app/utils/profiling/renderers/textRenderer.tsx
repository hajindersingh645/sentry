import {mat3} from 'gl-matrix';

import {Flamegraph} from '../flamegraph';
import {FlamegraphTheme} from '../flamegraph/flamegraphTheme';
import {FlamegraphFrame} from '../flamegraphFrame';
import {
  ELLIPSIS,
  findRangeBinarySearch,
  getContext,
  Rect,
  resizeCanvasToDisplaySize,
  trimTextCenter,
} from '../gl/utils';

class TextRenderer {
  textCache: Record<string, number> = {};

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  theme: FlamegraphTheme;
  flamegraph: Flamegraph;

  constructor(canvas: HTMLCanvasElement, flamegraph: Flamegraph, theme: FlamegraphTheme) {
    this.canvas = canvas;
    this.theme = theme;
    this.flamegraph = flamegraph;

    this.context = getContext(canvas, '2d');
    resizeCanvasToDisplaySize(canvas);
  }

  measureAndCacheText(text: string): number {
    if (this.textCache[text]) {
      return this.textCache[text];
    }
    this.textCache[text] = this.context.measureText(text).width;
    return this.textCache[text];
  }

  maybeInvalidateCache(): void {
    const TEST_STRING = 'Who knows if this changed, font-display: swap wont tell me';

    if (this.textCache[TEST_STRING] === undefined) {
      this.measureAndCacheText(TEST_STRING);
      return;
    }

    const newMeasuredSize = this.context.measureText(TEST_STRING).width;
    if (newMeasuredSize !== this.textCache[TEST_STRING]) {
      this.textCache = {[TEST_STRING]: newMeasuredSize};
    }
  }

  draw(configViewSpace: Rect, configSpace: Rect, configViewToPhysicalSpace: mat3): void {
    this.maybeInvalidateCache();

    this.context.font = `${this.theme.SIZES.BAR_FONT_SIZE * window.devicePixelRatio}px ${
      this.theme.FONTS.FRAME_FONT
    }`;

    this.context.textBaseline = 'alphabetic';
    this.context.fillStyle = this.theme.COLORS.LABEL_FONT_COLOR;

    const minWidth = this.measureAndCacheText(ELLIPSIS);

    const SIDE_PADDING = 2 * this.theme.SIZES.BAR_PADDING * window.devicePixelRatio;
    const HALF_SIDE_PADDING = SIDE_PADDING / 2;
    const BASELINE_OFFSET =
      (this.theme.SIZES.BAR_HEIGHT - this.theme.SIZES.BAR_FONT_SIZE / 2) *
      window.devicePixelRatio;
    const BASELINE = this.flamegraph.inverted ? configSpace.height - 1 : 0;

    const drawFrame = (frame: FlamegraphFrame): void => {
      // Check if our rect overlaps with the current viewport and skip it
      if (frame.end < configViewSpace.left || frame.start > configViewSpace.right) {
        return;
      }

      // We pin the start and end of the frame, so scrolling around keeps text pinned to the left or right side of the viewport
      const pinnedStart = Math.max(frame.start, configViewSpace.left);
      const pinnedEnd = Math.min(frame.end, configViewSpace.right);

      // This rect gets discarded after each render which is wasteful
      const width = pinnedEnd - pinnedStart;
      const depth = Math.abs(BASELINE - frame.depth);

      // Transform frame to physical space coordinates. This does the same operation as
      // Rect.transformRect, but without allocating a new Rect object.
      const frameInPhysicalSpace = [
        pinnedStart * configViewToPhysicalSpace[0] +
          depth * configViewToPhysicalSpace[1] +
          configViewToPhysicalSpace[6],
        pinnedStart * configViewToPhysicalSpace[1] +
          depth * configViewToPhysicalSpace[4] +
          configViewToPhysicalSpace[7],
        width * configViewToPhysicalSpace[0] + 1 * configViewToPhysicalSpace[1],
        width * configViewToPhysicalSpace[3] + 1 * configViewToPhysicalSpace[4],
      ];

      // Since the text is not exactly aligned to the left/right bounds of the frame, we need to subtract the padding
      // from the total width, so that we can truncate the center of the text accurately.
      const paddedRectangleWidth = frameInPhysicalSpace[2] - SIDE_PADDING;

      // Since children of a frame cannot be wider than the frame itself, we can exit early and discard the entire subtree
      if (paddedRectangleWidth <= minWidth) {
        return;
      }

      // We want to draw the text in the vertical center of the frame, so we substract half the height of the text
      const y = frameInPhysicalSpace[1] + BASELINE_OFFSET;

      // Offset x by 1x the padding
      const x = frameInPhysicalSpace[0] + HALF_SIDE_PADDING;

      this.context.fillText(
        trimTextCenter(
          frame.frame.name,
          findRangeBinarySearch(
            {low: 0, high: paddedRectangleWidth},
            n => this.measureAndCacheText(frame.frame.name.substring(0, n)),
            paddedRectangleWidth
          )[0]
        ),
        x,
        y
      );

      for (let i = 0; i < frame.children.length; i++) {
        drawFrame(frame.children[i]);
      }
    };

    // We start by iterating over root frames, so we draw the call stacks top-down.
    // This allows us to do a couple optimizations that improve our best case performance.
    // 1. We can skip drawing the entire tree if the root frame is not visible
    // 2. We can skip drawing and
    for (let i = 0; i < this.flamegraph.roots.length; i++) {
      drawFrame(this.flamegraph.roots[i]);
    }
  }
}

export {TextRenderer};
