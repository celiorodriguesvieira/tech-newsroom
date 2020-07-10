import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Icon.scss";

const iconNames = ["facebook", "twitter", "whatsapp"];

function Icon({ name, color }) {
  return <i className={clsx(styles.icon, styles[name], color)} />;
}

Icon.defaultProps = {
  color: null,
};

Icon.propTypes = {
  name: PropTypes.oneOf(iconNames).isRequired,
  color: PropTypes.oneOf([
    "gray-dark",
    "gray",
    "primary",
    "primary-light",
    "white",
    null,
  ]),
};

export default Icon;
