import React from "react";

// scss import
import styles from "./styles/ListBox.module.scss";

// components import
import List from "../atoms/List";
import BoxButton from "../atoms/BoxButton";

const ListBox = () => {
  return (
    <div className={styles.listBox}>
      <List id={1} text="ホーム" link="/" size="medium" color="black" />
      <List
        id={2}
        text="ここごはんとは"
        link="/about"
        size="medium"
        color="black"
      />
      <List id={3} text="マップ" link="/map" size="medium" color="black" />
      <List
        id={4}
        text="ランキング"
        link="/ranking"
        size="medium"
        color="black"
      />
      {/* <List
        id={5}
        text="メンバー"
        link="/member"
        size="medium"
        color="black"
      /> */}
      <BoxButton
        id={6}
        text="ログイン"
        size="medium"
        color="red"
        link="/login"
      />
    </div>
  );
};

export default ListBox;
