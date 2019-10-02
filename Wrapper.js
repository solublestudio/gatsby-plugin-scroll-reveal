"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = Wrapper;

var _react = _interopRequireWildcard(require("react"));

var _sal = _interopRequireDefault(require("sal.js"));

function Wrapper(_ref) {
  var children = _ref.children,
      path = _ref.path,
      options = _ref.options;
  (0, _react.useEffect)(function () {
    (0, _sal.default)(options);
  }, [path]);
  return children;
}