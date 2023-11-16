import React from 'react'

// scss import
import styles from './styles/BoxButton.module.scss'
import Link from 'next/link'

// type
export type BoxButtonProps = {
    id: number
    text: string
    size?: 'small' | 'medium' | 'large'
    color?: 'primary' | 'secondary' | 'tertiary'
    link: string
}


const BoxButton = ({
    id,
    text,
    size = 'medium',
    color = 'primary',
    link
}: BoxButtonProps ) => {
    return (
        <Link>
        </Link>
    )
}