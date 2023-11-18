import React from 'react'


// scss import
import styles from './About.module.scss'
import SubPageHero from '@/components/templates/SubPageHero'


// components import



const About = () => {
    return(
        <div className={styles.about}>
            <SubPageHero
                id={1}
                backgroundImg='/'
                title='ここごはんについて'
                subTitle='このサービスを作るに至った経緯について、また、このサービスをどのように使用して欲しいのか。サービスを詳しく説明させていただきます。'
                pageName='ABOUT'
            >
                <h1>this space is children space</h1>
            </SubPageHero>
        </div>
    )
}

export default About