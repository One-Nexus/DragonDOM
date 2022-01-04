function getEventHandlers(props) {
  return Object.keys(props).filter(key => isEventHandler(key)).reduce((accumulator, key) => {
    accumulator[key] = props[key]
    
    return accumulator;
  }, {})
}

export default getEventHandlers;

function isEventHandler(key) {
  return key.startsWith('on') && key[2] === key[2].toUpperCase();
}