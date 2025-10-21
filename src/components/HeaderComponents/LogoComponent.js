import React from "react";
import logo from "../../asserts/sc_logo.png";
import styles from "../HeaderComponents/LogoComponent.module.css";

const LogoComponent = () => {
  return (
    <figure className={styles.sc_image}>
      <img src={logo} className={styles.sclogo} alt="School Logo" />
    </figure>
  );
};

export default LogoComponent;
