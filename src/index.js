import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "@material/react-button";
import "./index.css";
import "@material/react-button/dist/button.css";

function YogieComp(props) {
  return (
    <div className="nonsense">
      <Button
        className="button"
        raised={true}
      >
        Yogie Button
      </Button>
    </div>
  );
}

YogieComp.propTypes = {
  name: PropTypes.string
};

export default YogieComp;
