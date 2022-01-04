import { htmlElementAttributes } from 'html-element-attributes';

import generateElementClasses from '../utilities/generateElementClasses';
import getEventHandlers from '../utilities/getEventHandlers';
import getHtmlAttributes from '../utilities/getHtmlAttributes';
import getTag from '../utilities/getTag';

import ModuleContext from '../contexts/module';
import useModuleContext from '../hooks/useModuleContext';

const modifierGlue = '--';
const componentGlue = '__';

const Module = (props) => {
  const { children, name, attributes, ...meta } = props;
  const { isSubComponent, isComponent = isSubComponent, host, style, tag, styles, ...rest } = meta;

  const prevContext = React.useContext(ModuleContext);
  const ref = host || React.useRef();
  const [{ Tag }, setTag] = React.useState({ Tag: getTag(props) });

  const localScopePrefix = Object.keys(styles || {})[0];
  const namespace = name || (!isComponent && localScopePrefix) || tag;
  const rootNamespace = isSubComponent ? prevContext.fullNamespace : prevContext.rootNamespace;
  const fullNamespace = `${rootNamespace}${componentGlue}${namespace}`;

  /** */

  React.useEffect(() => {
    if (isComponent && prevContext.namespace === namespace && prevContext.owner) {
      prevContext[namespace].setTag({ Tag: React.Fragment });
    }
  }, []);

  /** */

  const nextContext = {
    group: null,
    wrapper: null,

    ...prevContext,

    ...(!props.permeable && { 
      namespace: typeof props.as === 'string' ? prevContext.namespace : namespace,
    }),

    rootNamespace: prevContext.rootNamespace || namespace,

    ...(isComponent) && { fullNamespace },

    ...(!isComponent && props.as && { owner: namespace }),

    [namespace]: { setTag },

  }

  /** */
  const ATTRIBUTES = Tag !== React.Fragment && {
    ...getEventHandlers(rest),

    ...(attributes ? attributes : getHtmlAttributes(rest, Tag)),

    ...(!isFunctionComponent(Tag) && { ref }),

    ...(Tag.name === 'Component' && props.as && { 
      name: props.as.name || props.as,

      ...rest,
    }),

    className: generateElementClasses(rest, { 
      namespace: isComponent ? fullNamespace : namespace,  
      modifierGlue
    }),

    style
  }

  /** */

  return (
    <ModuleContext.Provider value={nextContext}>
      <Tag {...ATTRIBUTES}>{children}</Tag>
    </ModuleContext.Provider>
  );
}

Module.context = useModuleContext;

const Component = props => <Module isComponent {...props} />;
const SubComponent = props => <Module isSubComponent {...props} />;

Object.keys(htmlElementAttributes).forEach(key => {
  [Module, Component, SubComponent].forEach(Block => {
    Block[key] = props => <Block tag={key} {...props} />;
  });
});

export { Module, Component, SubComponent }; 

/** */
function isFunctionComponent(component) {
  return typeof component === 'function' && component.name[0] === component.name[0].toUpperCase();
}