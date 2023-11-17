import React from 'react'
import Link from 'next/link'

// scss import
import styles from './styles/MoreButton.module.scss'

// type
export type MoreButtonProps = {
    id: number
    text?: string
    link: string
    size?: 'small' | 'medium' | 'large'
    color?: 'red' | 'white' | 'black'
}


const MoreButton = ({
    id,
    text = 'View More',
    link,
    size = 'medium',
    color = 'red'
}: MoreButtonProps) => {
    return (
        <Link
            className={`${styles.moreButton} ${styles[size]} ${styles[color]}`}
            href={link}
        >
            {text}
        </Link>
    )
}

export default MoreButton