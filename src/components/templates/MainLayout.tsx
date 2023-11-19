import React from 'react'


// scss import
import styles from './styles/MainLayout.module.scss'


// components import
import Header from '../organisms/Header'
import Contact from '../organisms/Contact'
import Footer from '../organisms/Footer'

// type
export type MainLayoutProps = {
    id: number
    children: React.ReactNode
}


const MainLayout = ({
    id,
    children
}: MainLayoutProps) => {
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.sub}>
                {children}
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default MainLayout