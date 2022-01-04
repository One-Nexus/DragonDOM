import { htmlElementAttributes } from 'html-element-attributes';

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

export default getHtmlAttributes;