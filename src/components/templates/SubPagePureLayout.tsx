import React from 'react'


// scss import
import styles from './styles/SubPagePureLayout.module.scss'


// components import
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

// type
export type MainLayoutProps = {
    id: number
    children: React.ReactNode
}


const SubPagePureLayout = ({
    id,
    children
}: MainLayoutProps) => {
    return (
        <div className={styles.main} key={id}>
            <Header />
            <div className={styles.sub}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default SubPagePureLayout