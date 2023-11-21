import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// scss import
import styles from './styles/Footer.module.scss'

// components import

// react icons import
import { LuExternalLink } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";


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
                        <Image
                            className={styles.logo}
                            src={"/assets/images/logo.png"}
                            width={180}
                            height={40}
                            alt='ロゴ画像'
                        />
                        <ul>
                            <li>
                                <Link className={styles.link} href={"/"}>
                                    HOME
                                    <LuExternalLink className={styles.logo} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href={"/about"}>
                                    ここごはんとは
                                    <LuExternalLink className={styles.logo} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href={"/map"}>
                                    マップについて
                                    <LuExternalLink className={styles.logo} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href={"/ranking"}>
                                    ランキングについて
                                    <LuExternalLink className={styles.logo} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href={"/login"}>
                                    ログイン
                                    <LuExternalLink className={styles.logo} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href={"/contact"}>
                                    コンタクト
                                    <LuExternalLink className={styles.logo} />
                                </Link>
                            </li>
                        </ul>
                        <div className={styles.someImageBox}>
                            <Image
                                className={styles.someBoxImage}
                                src={"/assets/images/tech.png"}
                                width={250}
                                height={120}
                                alt='フッター用画像'
                            />
                        </div>
                        <div className={styles.someBox}>
                            <Link className={styles.someLink} href={'/'}>ウェブサイト利用規約</Link>
                            <Link className={styles.someLink} href={'/'}>個人情報保護と取り扱いに関して</Link>
                        </div>
                    </div>
                    <div className={styles.rightBox}>
                        <Link
                            className={styles.nextPageLink}
                            href={"/about"}
                        >
                            <div className={styles.nextTitleBox}>
                                <p className={styles.nextText}>NEXT</p>
                                <h1 className={styles.aboutText}>About</h1>
                            </div>
                            <div className={styles.nextArrowBox}>
                                <IoIosArrowRoundForward  className={styles.nextArrowIcon} />
                            </div>
                        </Link>
                    </div>
                </div>
                {/* copyrightやpge top buttonなどを格納 */}
                <div className={styles.bottomBox}>
                    <div className={styles.snsBox}>

                    </div>
                    <div className={styles.copyrightBox}>
                        <p className={styles.copyright}>© kohta Corporation. All Rights Reserved.</p>
                    </div>
                    <div className={styles.pageTopBox}>
                        <Link className={styles.top} href={'/'}>
                            Page Top ↑
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer