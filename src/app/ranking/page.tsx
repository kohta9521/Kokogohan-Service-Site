import React from "react";

// scss import
import styles from "./Ranking.module.scss";
import SubPageHero from "@/components/templates/SubPageHero";
import MainLayout from "@/components/templates/MainLayout";

// components import

const Ranking = () => {
  return (
    <div className={styles.ranking}>
      <MainLayout
        id={4}
      >
        <SubPageHero
          id={3}
          backgroundImg="/"
          title="ランキング"
          subTitle="ただ地図を作るだけではつまらない。ランキング機能で各団体、会社内で一押しのお店を決めませんか？"
          pageName="RANKING"
        >
          <h1>this page is ranking page</h1>
        </SubPageHero>
      </MainLayout>
    </div>
  );
};

export default Ranking;
