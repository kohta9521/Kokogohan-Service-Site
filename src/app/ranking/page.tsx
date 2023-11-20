import React from "react";

// scss import
import styles from "./Ranking.module.scss";
import SubPageHero from "@/components/templates/SubPageHero";
import MainLayout from "@/components/templates/MainLayout";
import SubPageContent from "@/components/templates/SubPageContent";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageTitleBox from "@/components/molecules/SubPageTitleBox";
import SubPageMainText from "@/components/atoms/SubPageMainText";

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
        />
        <SubPageContent id={3}>
          <SubPageSecTitle
            id={1}
            text='Ranking function?'
            color='red'
          />
          <SubPageTitleBox
            id={1}
            enTitle='kokogohan'
            jaTitle='ここごはんについて'
          />
          <SubPageMainText
            id={1}
            text='「新たな価値を生みだす世界的なマーケットプレイスを創る」。これは誰もが簡単にモノの売り買いを楽しむことによって、資源を循環させる豊かな社会、そして個人がやりたいことを実現できる社会をつくっていきたいという想いから掲げたミッションです。たとえば、クローゼットの中で眠っていた洋服や、いらなくなったからと捨てていたモノが、メルカリを通じてほかの誰かの役に立つように、誰かにとって価値がなくなってしまったモノを、別の誰かの「新たな価値」に変えることができる。そんなマーケットプレイスを国境や文化、言語を超え、世界中で展開することで、人々がモノを大切に使う循環型社会の実現を目指していきたいと考えています。'
          />
          <SubPageSecTitle
            id={1}
            text='What this feature accomplishes'
            color='red'
          />
          <SubPageSecTitle
            id={1}
            text='Actual screen, etc.'
            color='red'
          />
        </SubPageContent>
      </MainLayout>
    </div>
  );
};

export default Ranking;
