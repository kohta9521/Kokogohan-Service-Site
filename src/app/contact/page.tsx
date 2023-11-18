import React from 'react'


// scss import
import styles from './Contact.module.scss'
import SubPageHero from '@/components/templates/SubPageHero'


// components import



const Contact = () => {
    return(
        <div className={styles.about}>
            <SubPageHero
                id={1}
                backgroundImg='/'
                title='お問い合わせ'
                subTitle='このサービスについてお問い合わせいただけます。'
                pageName='CONTACT'
            >
                <h1>this space is contact children space</h1>
            </SubPageHero>
        </div>
    )
}

export default Contact