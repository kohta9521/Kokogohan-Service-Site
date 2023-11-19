import React from 'react'


// scss import
import styles from './Login.module.scss'
import SubPageHero from '@/components/templates/SubPageHero'
import MainLayout from '@/components/templates/MainLayout'


// components import



const Login = () => {
    return(
        <div className={styles.about}>
            <MainLayout
                id={5}
            >
                <SubPageHero
                    id={4}
                    backgroundImg='/'
                    title='ログイン'
                    subTitle='ログインをすることでこのサービスを最大限活用していただけます。ログインをしたらできることなど含めご覧いただけます。'
                    pageName='LOGIN'
                >
                    <h1>this space is children space</h1>
                </SubPageHero>
            </MainLayout>
        </div>
    )
}

export default Login