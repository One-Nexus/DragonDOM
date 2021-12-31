import getModifiersFromProps from './getModifiersFromProps';

export default function generateElementClasses(props, { namespace, modifierGlue, singleClass = true }) {
  let CLASSES = props.className ? props.className + ' ' : '', MODIFIERS = [];

  props.modifiers && MODIFIERS.push(...props.modifiers);

  MODIFIERS = MODIFIERS.concat(getModifiersFromProps(props));
  MODIFIERS = MODIFIERS.filter((item, pos) => MODIFIERS.indexOf(item) === pos);
  MODIFIERS = MODIFIERS.filter(Boolean);

  if (singleClass) {
    namespace += MODIFIERS.length ? modifierGlue + MODIFIERS.join(modifierGlue) : '';
  } else {
    MODIFIERS.forEach(MODIFIER => CLASSES += namespace + modifierGlue + MODIFIER + ' ');
  }

  CLASSES += namespace

  return CLASSES;
}