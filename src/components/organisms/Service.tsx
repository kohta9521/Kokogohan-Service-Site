import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


// scss import
import styles from './styles/Service.module.scss'

// components import
import SectionTitle from '../atoms/SectionTitle'

const Service = () => {
    return (
        <div className={styles.service}>
            <div className={styles.container}>
                {/* TODO: sectionTitleCOmponentのid名を確認する */}
                {/* <SectionTitle
                    id={2}
                    jaTitle='個性溢れる地図？'
                    enTitle='MAP'
                    size='large'
                    weight='bold'
                    color='black'
                    align='right'
                /> */}
                <div className={styles.flexBox}>
                    <div className={styles.leftBox}>
                        <Image
                            className={styles.image}
                            src={"/assets/images/map.png"}
                            width={600}
                            height={400}
                            alt='serviceImg'
                        />
                    </div>
                    <div className={styles.rightBox}>
                        <p className={styles.subTitle}>個性溢れる地図？</p>
                        <h1 className={styles.title}>MAP</h1>
                        <p className={styles.maintext}>
                            会社やコミュニティだけのクローズドな地図をお作りいただけます。<br />
                            <br />
                            地図には各店舗の特徴や地図を作る仲間が投稿したレビューを掲載。<br />
                            ランチがお得なお店・出前可能なお店・特におすすめのメニューがあるお店<br />
                            <br />
                            同じ地図は2つとしてありません。<br />
                            それぞれの個性あふれる地図をご覧いただけます。<br />
                        </p>
                        <Link
                            className={styles.link}
                            href='/map'
                        >
                            VIEW MORE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service