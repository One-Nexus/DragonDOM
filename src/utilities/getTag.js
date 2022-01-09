import { Component } from "../components/module";

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

export default getTag;