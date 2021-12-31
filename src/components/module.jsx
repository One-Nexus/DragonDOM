import { htmlElementAttributes } from 'html-element-attributes'

import generateElementClasses from '../utilities/generateElementClasses';

import ModuleContext from './context';

const modifierGlue = '--';
const componentGlue = '__';

const Module = (props) => {
  const { children, name, render, attributes, ...meta } = props;
  const { isComponent, host, style, as, tag, styles, ...rest } = meta;

  const prevContext = React.useContext(ModuleContext);
  const ref = host || React.useRef();
  const [{ Tag }, setTag] = React.useState({ Tag: getTag(props) });

  const localScopePrefix = Object.keys(styles || {})[0];
  const namespace = name || (!isComponent && localScopePrefix) || tag;
  const fullNamespace = `${prevContext.fullNamespace || prevContext.namespace}${componentGlue}${namespace}`;

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
      namespace: typeof props.as === 'string' ? prevContext.namespace : namespace
    }),

    ...(isComponent && { fullNamespace }),

    ...(!isComponent && props.as && { owner: namespace }),

    [namespace]: { setTag },

    isFusion: isFunctionComponent(props.as) && !isComponent,
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
      namespace: isComponent? fullNamespace : namespace,  
      modifierGlue
    }),

    style
  }

  /** */

  return (
    <ModuleContext.Provider value={nextContext}>
      <Tag {...ATTRIBUTES}>{render || children}</Tag>
    </ModuleContext.Provider>
  );
}

Module.modifiers = props => ([...Object.keys(props), ...(props.modifiers || [])]);

export default Module; 

/** */
export const Component = props => <Module isComponent {...props} />;
export const SubComponent = props => <Module isComponent {...props} />;

/** */
function getEventHandlers(props) {
  return Object.keys(props).filter(key => isEventHandler(key)).reduce((accumulator, key) => {
    accumulator[key] = props[key]
    
    return accumulator;
  }, {})
}

/** */
function getHtmlAttributes(props, tag) {
  let inputAttributes = {}

  for (let prop in props) {
    if (htmlElementAttributes['*'].includes(prop)) {
      inputAttributes[prop] = props[prop];
    }
    if (typeof tag === 'string' && htmlElementAttributes[tag].includes(prop)) {
      inputAttributes[prop] = props[prop];
    }
    if (prop === 'group') {
      inputAttributes.name = props[prop];
    }
  }

  return inputAttributes;
}

/** */
function isEventHandler(key) {
  return key.startsWith('on') && key[2] === key[2].toUpperCase();
}

/** */
function getTag(props) {
  if (typeof props.as === 'function' && props.as.name[0] === props.as.name[0].toUpperCase()) {
    return props.as;
  }

  if (typeof props.as === 'function' && props.as?.prototype?.isReactComponent) {
    return props.as;
  }

  if (props.component) {
    return props.component;
  }

  if (typeof props.as === 'string') {
    return Component;
  }

  if (props.tag) {
    return props.tag;
  }

  return 'div';
}

/** */
function isFunctionComponent(component) {
  return typeof component === 'function' && component.name[0] === component.name[0].toUpperCase();
}