import React from 'react'


// scss import
import styles from './Map.module.scss'
import SubPageHero from '@/components/templates/SubPageHero'
import MainLayout from '@/components/templates/MainLayout'


// components import



const Map = () => {
    return(
        <div className={styles.map}>
            <MainLayout
                id={3}
            >
                <SubPageHero
                    id={2}
                    backgroundImg='/'
                    title='マップ'
                    subTitle='このサービスのメインとも言えるマップ機能。このページでは皆さんが作り上げていくマップについてより詳しくご覧いただけます。'
                    pageName='MAP'
                >
                    <h1>this space is map children space</h1>
                </SubPageHero>
            </MainLayout>

        </div>
    )
}

export default Map