import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// scss import
import styles from './styles/Logo.module.scss'


// type
export type LogoProps = {
    id: number
    link: string
    size?: 'small' | 'medium' | 'large'
}


const Logo = ({
    id,
    link = '/',
    size = 'medium',
}: LogoProps ) => {
    return (
        <Link href={link} key={id} className={styles.link}>
            <Image
                className={`${styles.logo} ${styles[size]}`}
                src={"/assets/images/logo.png"}
                width={200}
                height={60}
                alt="logo"
            />
        </Link>
    )
}

export default Logo