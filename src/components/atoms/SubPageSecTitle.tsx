import React from 'react'


// scss import
import styles from './styles/SubPageSecTitle.module.scss'

// type
export type SubPageSecTitleProps = {
    id: number
    text: string
    color?: 'white' | 'black' | 'red'
}


const SubPageSecTitle = ({
    id,
    text,
    color = 'red'
}: SubPageSecTitleProps ) => {
    return (
        <div className={styles.titleBox}>
            <span className={`${styles.circle} ${styles[color]}`}></span>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default SubPageSecTitle