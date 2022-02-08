import React from "react";
import LogoHead from "../logoHead/LogoHead";
import "./formular.scss";

const Formular = (props) => {
  const children = props.children;
  return (
    <div className="bloc-page">
      <div className="head-form">
        <LogoHead />
        <div className="bg-form">{children}</div>
      </div>
    </div>
  );
};

export default Formular;
