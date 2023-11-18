import React from 'react'
import Image from 'next/image'

// scss import
import styles from './styles/SubPageHero.module.scss'

// components import
import Header from '../organisms/Header'
import Link from 'next/link'


// type
export type SubPageHeroProps = {
    id: number
    backgroundImg: string,
    title: string,
    subTitle: string,
    pageName: string,
    children?: React.ReactNode
}


const SubPageHero = ({
    id,
    backgroundImg,
    title,
    subTitle,
    pageName,
    children
}: SubPageHeroProps ) => {
    return (
        <>
        <Header />
            <div className={styles.hero} key={id}>
                <div className={styles.titleBox}>
                    {/* TODO: HERO内に画像を背景画像として差し込みたかった */}
                    {/* <Image
                        className={styles.bgImg}
                        width={1000}
                        height={350}
                        src={backgroundImg}
                        alt='background image'
                    /> */}
                    <h1 className={styles.title}>
                        {title}
                    </h1>
                    <p className={styles.desc}>
                        {subTitle}
                    </p>
                </div>
                <div className={styles.pageLinkBox}>
                    <Link className={styles.pageLinkHome} href={"/"}>
                        HOME
                    </Link>
                    <span className={styles.pageLinkRod}></span>
                    <p className={styles.pageLinkNow}>
                        {pageName}
                    </p>
                </div>
                {children}
            </div>
        </>

    )
}

export default SubPageHero