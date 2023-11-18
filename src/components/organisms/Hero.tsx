import React from "react";
import Link from "next/link";

// scss import
import styles from "./styles/Hero.module.scss";

// components import

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Discover Local Eats
          <br />
          Your <span className={styles.redText}>Team</span>
          <br />
          Your <span className={styles.redText}>Map</span>
          <br />
        </h1>
        <p className={styles.subTitle}>
          自分達で作り上げていくご飯やさんマップ
        </p>
        <Link href={'#about'} className={styles.circle}>
          <p className={styles.arrow}>↓</p>
        </Link>
        <div className={styles.underBox}></div>
      </div>
    </div>
  );
};

export default Hero;
