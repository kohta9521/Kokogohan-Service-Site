import React from "react";

// scss import
import styles from "./styles/BoxButton.module.scss";
import Link from "next/link";

// type
export type BoxButtonProps = {
  id: number;
  text: string;
  size?: "small" | "medium" | "large";
  color?: "red" | "white" | "black";
  link: string;
};

const BoxButton = ({
  id,
  text,
  size = "medium",
  color = "red",
  link,
}: BoxButtonProps) => {
  return (
    <Link
      className={`${styles.boxButton} ${styles[size]} ${styles[color]}`}
      href={link}
      key={id}
    >
      {text}
    </Link>
  );
};

export default BoxButton;
