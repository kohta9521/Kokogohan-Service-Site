import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// scss import
import styles from './styles/About.module.scss'

// components import
import MoreButton from '../atoms/MoreButton'


const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.container} id='about'>
                <div className={styles.box}>
                    <div className={styles.leftBox}>
                        <p className={styles.subTitle}>ここごはんについて</p>
                        <h1 className={styles.title}>ABOUT</h1>
                        <p className={styles.text}>
                            これまでの地図は情報がすでにあるのが当たり前。<br />
                            このサービスでは自分たちの会社・団体で地図を１から作り上げます。<br />
                            <br />
                            行きつけのおすすめのご飯やさん。ランチで穴場のお店。<br />
                            自分の属している会社・団体ごとにその地図はどんどん進化します。<br />
                            <br />
                            あなたも地図を作るメンバーになりませんか？<br />
                        </p>
                        <Link
                            className={styles.link}
                            href='/about'
                        >
                            VIEW MORE
                        </Link>
                    </div>
                    <div className={styles.rightBox}>
                        <Image
                            className={styles.image}
                            src={"/assets/images/phone.png"}
                            width={600}
                            height={600}
                            alt='serviceImg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About