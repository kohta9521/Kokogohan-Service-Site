import React from 'react'


// scss import
import styles from './styles/Footer.module.scss'
import Link from 'next/link'

// components import


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                {/* 採用情報ボタンとか　ダイレクトbuttonの設置 */}
                <div className={styles.topBox}>
                    <Link className={styles.directLinkBox} href={"/"}>
                        <h3 className={styles.title}>採用情報</h3>
                        <p className={styles.text}>
                            一緒に「ここごはん」を作るメンバーを募集中です。<br />
                            エンジニア・デザイナー・マーケターなどなど常時募集中です。
                        </p>
                    </Link>
                    <Link className={styles.directLinkBox} href={"/"}>
                        <h3 className={styles.title}>採用情報</h3>
                        <p className={styles.text}>
                            一緒に「ここごはん」を作るメンバーを募集中です。<br />
                            エンジニア・デザイナー・マーケターなどなど常時募集中です。
                        </p>
                    </Link>
                </div>
                {/* サイトの基本情報などを格納　次のpege about pageへ誘導 */}
                <div className={styles.centerBox}>
                    <div className={styles.leftBox}>

                    </div>
                    <div className={styles.rightBox}>

                    </div>
                </div>
                {/* copyrightやpge top buttonなどを格納 */}
                <div className={styles.bottomBox}>
                    <div className={styles.snsBox}>

                    </div>
                    <div className={styles.copyrightBox}>

                    </div>
                    <div className={styles.pageTopBox}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer