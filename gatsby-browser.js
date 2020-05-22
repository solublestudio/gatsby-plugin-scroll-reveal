"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

require('sal.js/dist/sal.css');

require('intersection-observer');

var React = require("react");

var Wrapper = require('./Wrapper').default;

exports.wrapPageElement = function (_ref, _ref2) {
  var element = _ref.element,
      props = _ref.props;
  var plugins = _ref2.plugins,
      options = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["plugins"]);
  return (
    /*#__PURE__*/
    React.createElement(Wrapper, {
      options: options,
      path: props.path
    }, element)
  );
};