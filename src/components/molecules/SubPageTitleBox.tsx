import React from 'react'


// scss import
import styles from './styles/SubPageTitleBox.module.scss'

// type
export type SubPageTitleBoxProps = {
    id: number
    enTitle: string
    jaTitle: string
}


const SubPageTitleBox = ({
    id,
    enTitle,
    jaTitle
}: SubPageTitleBoxProps) => {
    return (
        <div className={styles.titleBox}>
            <span className={styles.enTitle}>{enTitle}</span>
            <h1 className={styles.jaTitle}>{jaTitle}</h1>
        </div>
    )
}

export default SubPageTitleBox