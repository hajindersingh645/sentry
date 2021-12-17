import SplitDiff from 'sentry/components/splitDiff';

const base = `RangeError: Invalid array length
  at Constructor.render(./app/components/scoreBar.jsx:73:0)
  at ? (~/react/lib/ReactCompositeComponent.js:793:0)
  at measureLifeCyclePerf(~/react/lib/ReactCompositeComponent.js:74:0)
  at ReactCompositeComponentWrapper._renderValidatedComponentWithoutOwnerOrContext(~/react/lib/ReactCompositeComponent.js:792:0)
  at ReactCompositeComponentWrapper._renderValidatedComponent(~/react/lib/ReactCompositeComponent.js:819:0)
  at ReactCompositeComponentWrapper.performInitialMount(~/react/lib/ReactCompositeComponent.js:361:0)
  at ReactCompositeComponentWrapper.mountComponent(~/react/lib/ReactCompositeComponent.js:257:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactDOMComponent.mountChildren(~/react/lib/ReactMultiChild.js:240:0)
  at ReactDOMComponent._createInitialChildren(~/react/lib/ReactDOMComponent.js:699:0)
  at ReactDOMComponent.mountComponent(~/react/lib/ReactDOMComponent.js:524:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactCompositeComponentWrapper.performInitialMount(~/react/lib/ReactCompositeComponent.js:370:0)
  at ReactCompositeComponentWrapper.mountComponent(~/react/lib/ReactCompositeComponent.js:257:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactDOMComponent.mountChildren(~/react/lib/ReactMultiChild.js:240:0)
  at ReactDOMComponent._createInitialChildren(~/react/lib/ReactDOMComponent.js:699:0)
  at ReactDOMComponent.mountComponent(~/react/lib/ReactDOMComponent.js:524:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactDOMComponent.mountChildren(~/react/lib/ReactMultiChild.js:240:0)
  at ReactDOMComponent._createInitialChildren(~/react/lib/ReactDOMComponent.js:699:0)
  at ReactDOMComponent.mountComponent(~/react/lib/ReactDOMComponent.js:524:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactDOMComponent.mountChildren(~/react/lib/ReactMultiChild.js:240:0)
  at ReactDOMComponent._createInitialChildren(~/react/lib/ReactDOMComponent.js:699:0)
  at ReactDOMComponent.mountComponent(~/react/lib/ReactDOMComponent.js:524:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactCompositeComponentWrapper.performInitialMount(~/react/lib/ReactCompositeComponent.js:370:0)
  at ReactCompositeComponentWrapper.mountComponent(~/react/lib/ReactCompositeComponent.js:257:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactCompositeComponentWrapper.performInitialMount(~/react/lib/ReactCompositeComponent.js:370:0)
  at ReactCompositeComponentWrapper.mountComponent(~/react/lib/ReactCompositeComponent.js:257:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at Object.updateChildren(~/react/lib/ReactChildReconciler.js:122:0)
  at ReactDOMComponent._reconcilerUpdateChildren(~/react/lib/ReactMultiChild.js:210:0)
  at ReactDOMComponent._updateChildren(~/react/lib/ReactMultiChild.js:314:0)
  at ReactDOMComponent.updateChildren(~/react/lib/ReactMultiChild.js:301:0)
  at ReactDOMComponent._updateDOMChildren(~/react/lib/ReactDOMComponent.js:942:0)
  at ReactDOMComponent.updateComponent(~/react/lib/ReactDOMComponent.js:760:0)
  at ReactDOMComponent.receiveComponent(~/react/lib/ReactDOMComponent.js:718:0)
  at Object.receiveComponent(~/react/lib/ReactReconciler.js:126:0)
  at Object.updateChildren(~/react/lib/ReactChildReconciler.js:110:0)
  at ReactDOMComponent._reconcilerUpdateChildren(~/react/lib/ReactMultiChild.js:210:0)
  at ReactDOMComponent._updateChildren(~/react/lib/ReactMultiChild.js:314:0)
  at ReactDOMComponent.updateChildren(~/react/lib/ReactMultiChild.js:301:0)
  at ReactDOMComponent._updateDOMChildren(~/react/lib/ReactDOMComponent.js:942:0)
  at ReactDOMComponent.updateComponent(~/react/lib/ReactDOMComponent.js:760:0)
  at ReactDOMComponent.receiveComponent(~/react/lib/ReactDOMComponent.js:718:0)
  at Object.receiveComponent(~/react/lib/ReactReconciler.js:126:0)
  at ReactCompositeComponentWrapper._updateRenderedComponent(~/react/lib/ReactCompositeComponent.js:751:0)`;

const target = `TypeError: Cannot read property 'id' of undefined
  at StreamGroupHeader.render(./app/components/stream/StreamGroupHeader.jsx:54:0)
  at ? (~/react/lib/ReactCompositeComponent.js:793:0)
  at measureLifeCyclePerf(~/react/lib/ReactCompositeComponent.js:74:0)
  at ReactCompositeComponentWrapper._renderValidatedComponentWithoutOwnerOrContext(~/react/lib/ReactCompositeComponent.js:792:0)
  at ReactCompositeComponentWrapper._renderValidatedComponent(~/react/lib/ReactCompositeComponent.js:819:0)
  at ReactCompositeComponentWrapper.performInitialMount(~/react/lib/ReactCompositeComponent.js:361:0)
  at ReactCompositeComponentWrapper.mountComponent(~/react/lib/ReactCompositeComponent.js:257:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactDOMComponent.mountChildren(~/react/lib/ReactMultiChild.js:240:0)
  at ReactDOMComponent._createInitialChildren(~/react/lib/ReactDOMComponent.js:699:0)
  at ReactDOMComponent.mountComponent(~/react/lib/ReactDOMComponent.js:524:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactDOMComponent.mountChildren(~/react/lib/ReactMultiChild.js:240:0)
  at ReactDOMComponent._createInitialChildren(~/react/lib/ReactDOMComponent.js:699:0)
  at ReactDOMComponent.mountComponent(~/react/lib/ReactDOMComponent.js:524:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactCompositeComponentWrapper.performInitialMount(~/react/lib/ReactCompositeComponent.js:370:0)
  at ReactCompositeComponentWrapper.mountComponent(~/react/lib/ReactCompositeComponent.js:257:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at ReactDOMComponent.mountChildren(~/react/lib/ReactMultiChild.js:240:0)
  at ReactDOMComponent._createInitialChildren(~/react/lib/ReactDOMComponent.js:699:0)
  at ReactDOMComponent.mountComponent(~/react/lib/ReactDOMComponent.js:524:0)
  at Object.mountComponent(~/react/lib/ReactReconciler.js:47:0)
  at Object.updateChildren(~/react/lib/ReactChildReconciler.js:122:0)
  at ReactDOMComponent._reconcilerUpdateChildren(~/react/lib/ReactMultiChild.js:210:0)
  at ReactDOMComponent._updateChildren(~/react/lib/ReactMultiChild.js:314:0)
  at ReactDOMComponent.updateChildren(~/react/lib/ReactMultiChild.js:301:0)
  at ReactDOMComponent._updateDOMChildren(~/react/lib/ReactDOMComponent.js:942:0)
  at ReactDOMComponent.updateComponent(~/react/lib/ReactDOMComponent.js:760:0)
  at ReactDOMComponent.receiveComponent(~/react/lib/ReactDOMComponent.js:718:0)
  at Object.receiveComponent(~/react/lib/ReactReconciler.js:126:0)
  at Object.updateChildren(~/react/lib/ReactChildReconciler.js:110:0)
  at ReactDOMComponent._reconcilerUpdateChildren(~/react/lib/ReactMultiChild.js:210:0)
  at ReactDOMComponent._updateChildren(~/react/lib/ReactMultiChild.js:314:0)
  at ReactDOMComponent.updateChildren(~/react/lib/ReactMultiChild.js:301:0)
  at ReactDOMComponent._updateDOMChildren(~/react/lib/ReactDOMComponent.js:942:0)
  at ReactDOMComponent.updateComponent(~/react/lib/ReactDOMComponent.js:760:0)
  at ReactDOMComponent.receiveComponent(~/react/lib/ReactDOMComponent.js:718:0)
  at Object.receiveComponent(~/react/lib/ReactReconciler.js:126:0)
  at Object.updateChildren(~/react/lib/ReactChildReconciler.js:110:0)
  at ReactDOMComponent._reconcilerUpdateChildren(~/react/lib/ReactMultiChild.js:210:0)
  at ReactDOMComponent._updateChildren(~/react/lib/ReactMultiChild.js:314:0)
  at ReactDOMComponent.updateChildren(~/react/lib/ReactMultiChild.js:301:0)
  at ReactDOMComponent._updateDOMChildren(~/react/lib/ReactDOMComponent.js:942:0)
  at ReactDOMComponent.updateComponent(~/react/lib/ReactDOMComponent.js:760:0)
  at ReactDOMComponent.receiveComponent(~/react/lib/ReactDOMComponent.js:718:0)
  at Object.receiveComponent(~/react/lib/ReactReconciler.js:126:0)
  at ReactCompositeComponentWrapper._updateRenderedComponent(~/react/lib/ReactCompositeComponent.js:751:0)
  at ReactCompositeComponentWrapper._performComponentUpdate(~/react/lib/ReactCompositeComponent.js:721:0)
  at ReactCompositeComponentWrapper.updateComponent(~/react/lib/ReactCompositeComponent.js:642:0)`;

export default {
  title: 'Components/Data Visualization/Misc/Split Diff',
  component: SplitDiff,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['chars', 'words', 'lines'],
      },
    },
  },
};

export const _SplitDiff = ({...args}) => (
  <SplitDiff base={base} target={target} {...args} />
);

_SplitDiff.storyName = 'Split Diff';
_SplitDiff.parameters = {
  docs: {
    description: {
      story: 'Diffs two strings, split by newlines if present',
    },
  },
};
