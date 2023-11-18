import React from 'react'


// scss import
import styles from './styles/SectionTitle.module.scss'

// type
export type SectionTitleProps = {
    id: number
    jaTitle: string
    enTitle: string
    size?: 'small' | 'medium' | 'large'
    weight?: 'light' | 'normal' | 'bold'
    color?: 'white' | 'black' | 'red'
    align?: 'left' | 'center' | 'right'
}

// className fn japanese
const getjaClassName = (size: string, weight: string, color: string, align: string) => {
    return [
        styles[`ja-${size}`],
        styles[`ja-${weight}`],
        styles[`ja-${color}`],
        styles[`ja-${align}`],
    ].join(' ')
}
// className fn English
const getEnClassName = (size: string, weight: string, color: string, align: string) => {
    return [
        styles[`en-${size}`],
        styles[`en-${weight}`],
        styles[`en-${color}`],
        styles[`en-${align}`],
    ].join(' ')
}


const SectionTitle = ({
    id,
    jaTitle,
    enTitle,
    size = 'medium',
    weight = 'normal',
    color = 'black',
    align = 'center'
}: SectionTitleProps) => {
    return (
        <div key={id} className={styles.titleBox}>
            <p className={`${getjaClassName(size, weight, color, align)}`}>
                {jaTitle}
            </p>
            <h1 className={`${getEnClassName(size, weight, color, align)}`}>
                {enTitle}
            </h1>
        </div>
    )
}

export default SectionTitle