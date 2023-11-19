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
                    <div className={styles.flexBox}>
                        <div className={styles.leftBox}>
                        <div className={styles.titleBox}>
                            <span className={styles.jaTitle}>ここごはんについて</span>
                            <h1 className={styles.enTitle}>ABOUT</h1>
                        </div>
                            <p className={styles.text}>
                                これまでの地図は情報がすでにあるのが当たり前。<br />
                                このサービスでは自分たちの会社・団体で地図を１から作り上げます。<br />
                                <br />
                                行きつけのおすすめのご飯やさん。ランチで穴場のお店。<br />
                                自分の属している会社・団体ごとにその地図はどんどん進化します。<br />
                                <br />
                                あなたも地図を作るメンバーになりませんか？<br />
                            </p>
                            {/* TODO: 詳しくみるボタンの追加 */}
                        </div>
                        <div className={styles.rightBox}>
                            <Image
                                className={styles.image}
                                src={"/assets/images/tech.png"}
                                width={700}
                                height={500}
                                alt='aboutImage'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About