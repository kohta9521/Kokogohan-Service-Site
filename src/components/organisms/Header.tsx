import React from "react";

// scss import
import styles from "./styles/Header.module.scss";

// components import
import Logo from "../atoms/Logo";
import ListBox from "../molecules/ListBox";

const Header = () => {
  return (
    <>
    <div className={styles.dummy}></div>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo id={1} link="/" size="large" />
          </div>
          <div className={styles.menu}>
            <ListBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
