import clsx from "clsx";
import React from "react";
import logo from "../assets/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className={clsx("pb-3", "pt-3")}>
      <img alt="Tech Newsroom" src={logo} />
    </header>
  );
}

export default Header;
