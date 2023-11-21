import React from 'react'


// scss import
import styles from './styles/Ranking.module.scss'
import Image from 'next/image'
import Link from 'next/link'

// components import

const Ranking = () => {
    return (
        <div className={styles.ranking}>
            <div className={styles.container}>
                <div className={styles.titleBox}>
                    <p className={styles.subTitle}>あなたのオスススメが１位に？</p>
                    <h1 className={styles.title}>RANKING</h1>
                </div>
                <p className={styles.mainText}>
                    おなたのおすすめの店がランキングに乗るかもしれません。<br/>
                    <br/>
                    ここのお店いいなと思ったらとりあえず「ここごはん」に登録しましょう。<br/>
                    朝ごはん・昼ごはん・晩御飯、それともちょっとおしゃれなバー？<br/>
                    <br/>
                    あなたの投稿が誰かの新しい選択肢を生み出します。<br/>
                </p>
                <div className={styles.flexBox}>
                    <div className={styles.box}>
                        <div className={styles.image}>
                        </div>
                        <p className={styles.boxTitle}>会社内でグルメ大使に？</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}>
                        </div>
                        <p className={styles.boxTitle}>新しい繋がりが？</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}>
                        </div>
                        <p className={styles.boxTitle}>気になるあの人の好みが？</p>
                    </div>
                </div>
                <div className={styles.bottomBox}>
                    <Link
                        className={styles.link}
                        href='/ranking'
                    >
                        <span className={styles.arrow}>
                            {/* <MdKeyboardArrowRight className={styles.icon} /> */}
                            →
                        </span>
                        詳しく見る
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Ranking