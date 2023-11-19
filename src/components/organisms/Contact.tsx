import React from 'react'
import Link from 'next/link'


// scss import
import styles from './styles/Contact.module.scss'

// components import

// react icons
import { MdMail } from "react-icons/md";


const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.titleBox}>
                    <span className={styles.jaTitle}>お問い合わせ</span>
                    <h1 className={styles.enTitle}>CONTACT</h1>
                </div>
                <p className={styles.mainText}>
                    以下のボタンよりお問い合わせフォームの入力をお願いします。
                </p>
                <Link
                    className={styles.contactButton}
                    href={'/contact'}
                >
                        <MdMail
                            className={styles.icon}
                        />
                    お問い合わせフォーム
                </Link>
            </div>
        </div>
    )
}

export default Contact