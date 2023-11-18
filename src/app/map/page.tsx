import React from 'react'


// scss import
import styles from './Map.module.scss'
import SubPageHero from '@/components/templates/SubPageHero'


// components import



const Map = () => {
    return(
        <div className={styles.about}>
            <SubPageHero
                id={2}
                backgroundImg='/'
                title='マップ'
                subTitle='このサービスのメインとも言えるマップ機能。このページでは皆さんが作り上げていくマップについてより詳しくご覧いただけます。'
                pageName='MAP'
            >
                <h1>this space is map children space</h1>
            </SubPageHero>
        </div>
    )
}

export default Map