import React from 'react'

// scss import
import styles from './styles/About.module.scss'

// components import
import MoreButton from '../atoms/MoreButton'
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.leftBox}>
                        <p className={styles.subTitle}>ここごはんについて</p>
                        <h1 className={styles.title}>ABOUT</h1>
                        <p className={styles.mainText}>
                            これまでの地図は情報がすでにあるのが当たり前。<br />
                            このサービスでは自分たちの会社・団体で地図を１から作り上げます。<br />
                            <br />
                            行きつけのおすすめのご飯やさん。ランチで穴場のお店。<br />
                            自分の属している会社・団体ごとにその地図はどんどん進化します。<br />
                            <br />
                            あなたも地図を作るメンバーになりませんか？<br />
                        </p>
                        <MoreButton
                            id={1}
                            text='View More'
                            link='/about'
                            size='medium'
                            color='white'
                        />
                    </div>
                    <div className={styles.rightBox}>
                        <Image
                            className={styles.image}
                            width={1100}
                            height={900}
                            quality={100}
                            src={'/assets/images/tech.png'}
                            alt='phoneImage'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About