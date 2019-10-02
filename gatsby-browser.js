
require('sal.js/dist/sal.css');
const React = require("react");
const Wrapper = require('./src/Wrapper').default;

exports.onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await require(`intersection-observer`);
  }
}

exports.wrapPageElement = ({ element, props}, {plugins, ...options}) => {
  return <Wrapper options={options} path={props.path}>{element}</Wrapper>; 
}