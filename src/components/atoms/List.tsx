import React from 'react'
import Link from 'next/link'

// scss import
import styles from './styles/List.module.scss'

// type
type ListProps = {
    id: number
    text: string
    link: string
}


const List = ({
    id,
    text,
    link
}: ListProps ) => {
    return (
        <Link href={link} key={id} className={styles.list}>
            {text}
        </Link>
    )
}

export default List