import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Typography.scss";

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  caption: "span",
};

function Typography({
  block,
  children,
  className,
  color,
  component,
  fontWeight,
  variant,
  ...rest
}) {
  const MyCustomComponent = component || variantMapping[variant] || "span";

  return (
    <MyCustomComponent
      className={clsx(
        styles[variant],
        color,
        fontWeight && styles[fontWeight],
        block && "d-block",
        className
      )}
      {...rest}
    >
      {children}
    </MyCustomComponent>
  );
}

Typography.defaultProps = {
  children: "",
  className: "",
  color: null,
  component: null,
  fontWeight: null,
  variant: "body1",
  block: false,
};

Typography.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  block: PropTypes.bool,
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body1",
    "caption",
  ]),
  color: PropTypes.oneOf([
    "gray-dark",
    "gray",
    "primary",
    "primary-light",
    "white",
    null,
  ]),
  fontWeight: PropTypes.oneOf(["regular", "medium", "bold", null]),
};

export default Typography;
