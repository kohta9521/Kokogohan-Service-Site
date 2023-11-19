import React from 'react'


// scss import
import styles from './styles/SubPageContent.module.scss'

// components import

// type
export type SubPageContentProps = {
    id: number,
    children: React.ReactNode
}


const SubPageContent = ({
    id,
    children
}: SubPageContentProps) => {
    return (
        <div className={styles.content} key={id}>
            {children}
        </div>
    )
}

export default SubPageContent