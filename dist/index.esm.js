import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World 123");
}

var useStyles = makeStyles(function (theme) {
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
  return /*#__PURE__*/React.createElement(Container, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    size: "large",
    className: classes.submit
  }, props.title)));
}
MyBtn.propTypes = {
  title: PropTypes.string
};

export { HelloWorld, MyBtn };
