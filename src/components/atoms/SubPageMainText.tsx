import React from 'react'


// scss import
import styles from './styles/SubPageMainText.module.scss'

// type
export type SubPageMainTextProps = {
    id: number
    text: string
}


const SubPageMainText = ({
    id,
    text
}: SubPageMainTextProps) => {
    return (
        <div className={styles.textBox}>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    )
}

export default SubPageMainText