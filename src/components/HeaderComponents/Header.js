import React from "react";
import LogoComponent from "../HeaderComponents/LogoComponent";
import SearchComponent from "../HeaderComponents/SearchComponent";
import UserInfoComponent from "../HeaderComponents/UserInfoComponent";
import styles from "../HeaderComponents/Header.module.css";

const Header = () => {
  return (
    <header className={styles.top_header}>
      <LogoComponent />
      <div className={styles.left_header}>
        <SearchComponent />
        <UserInfoComponent />
      </div>
    </header>
  );
};

export default Header;
