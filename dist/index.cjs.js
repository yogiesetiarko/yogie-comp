'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var styles = require('@material-ui/core/styles');
var Container = require('@material-ui/core/Container');
var CssBaseline = require('@material-ui/core/CssBaseline');
var Button = require('@material-ui/core/Button');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Container__default = /*#__PURE__*/_interopDefaultLegacy(Container);
var CssBaseline__default = /*#__PURE__*/_interopDefaultLegacy(CssBaseline);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

function HelloWorld() {
  return /*#__PURE__*/React__default["default"].createElement("h1", null, "Hello World 123");
}

var useStyles = styles.makeStyles(function (theme) {
  return {
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});
function MyBtn(props) {
  var classes = useStyles();
  return /*#__PURE__*/React__default["default"].createElement(Container__default["default"], {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/React__default["default"].createElement(CssBaseline__default["default"], null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    size: "large",
    className: classes.submit
  }, props.title)));
}
MyBtn.propTypes = {
  title: PropTypes__default["default"].string
};

exports.HelloWorld = HelloWorld;
exports.MyBtn = MyBtn;
