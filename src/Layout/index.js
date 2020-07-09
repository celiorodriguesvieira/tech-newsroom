import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../redux/modules/selects";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
  const posts = useSelector(getPosts);

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Sidebar posts={posts} />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
