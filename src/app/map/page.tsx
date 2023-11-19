import React from 'react'


// scss import
import styles from './Map.module.scss'

// components import
import SubPageHero from '@/components/templates/SubPageHero'
import MainLayout from '@/components/templates/MainLayout'

// sample
import Maps from '../../components/Map.jsx'


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
                </SubPageHero>
                <Maps />
            </MainLayout>

        </div>
    )
}

export default Map