"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsxFileName = "/Users/jorge/Projects/soluble-web/plugins/scroll-reveal-plugin/src/gatsby-browser.js";

require('sal.js/dist/sal.css');

var React = require("react");

var Wrapper = require('./Wrapper').default;

exports.onClientEntry =
/*#__PURE__*/
(0, _asyncToGenerator2.default)(
/*#__PURE__*/
_regenerator.default.mark(function _callee() {
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof IntersectionObserver === "undefined")) {
            _context.next = 3;
            break;
          }

          _context.next = 3;
          return require("intersection-observer");

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

exports.wrapPageElement = function (_ref2, _ref3) {
  var element = _ref2.element,
      props = _ref2.props;
  var plugins = _ref3.plugins,
      options = (0, _objectWithoutPropertiesLoose2.default)(_ref3, ["plugins"]);
  return React.createElement(Wrapper, {
    options: options,
    path: props.path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, element);
};