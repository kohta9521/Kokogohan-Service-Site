import React from 'react'
import Link from 'next/link'

// scss import
import styles from './styles/News.module.scss'

// components import

// react icons import
import { FaArrowRightLong } from "react-icons/fa6";


const News = () => {
    return (
        <div className={styles.news}>
            <div className={styles.container}>
                <p className={styles.subTitle}>ニュース</p>
                <h1 className={styles.title}>NEWS</h1>
                <div className={styles.newsBox}>
                    <ul>
                        <li>
                            <p className={styles.data}>2022.11.2</p>
                            <p className={styles.tag}>お知らせ</p>
                            <h3 className={styles.newsTitle}>サービスの初回リリースが行われました!</h3>
                            <Link href={"/"} className={styles.arrow}>
                                <FaArrowRightLong />
                            </Link>
                        </li>
                        <li>
                            <p className={styles.data}>2022.11.2</p>
                            <p className={styles.tag}>お知らせ</p>
                            <h3 className={styles.newsTitle}>サービスの初回リリースが行われました!</h3>
                            <Link href={"/"} className={styles.arrow}>
                                <FaArrowRightLong />
                            </Link>
                        </li>
                        <li>
                            <p className={styles.data}>2022.11.2</p>
                            <p className={styles.tag}>お知らせ</p>
                            <h3 className={styles.newsTitle}>サービスの初回リリースが行われました!</h3>
                            <Link href={"/"} className={styles.arrow}>
                                <FaArrowRightLong />
                            </Link>
                        </li>
                        <li>
                            <p className={styles.data}>2022.11.2</p>
                            <p className={styles.tag}>お知らせ</p>
                            <h3 className={styles.newsTitle}>サービスの初回リリースが行われました!</h3>
                            <Link href={"/"} className={styles.arrow}>
                                <FaArrowRightLong />
                            </Link>
                        </li>
                        <Link className={styles.moreButton} href={"/pressrelease"}>もっと詳しく見る</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default News