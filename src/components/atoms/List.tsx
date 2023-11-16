import React from "react";
import Link from "next/link";

// scss import
import styles from "./styles/List.module.scss";

// type
type ListProps = {
  id: number;
  text: string;
  link: string;
  size?: "small" | "medium" | "large";
  color?: "red" | "white" | "black";
};

const List = ({
  id,
  text,
  link,
  size = "medium",
  color = "black",
}: ListProps) => {
  return (
    <Link
      href={link}
      key={id}
      className={`${styles.list} ${styles[size]} ${styles[color]}`}
    >
      {text}
    </Link>
  );
};

export default List;
