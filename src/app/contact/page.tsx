import React from 'react'


// scss import
import styles from './Contact.module.scss'
import SubPageHero from '@/components/templates/SubPageHero'
import MainLayout from '@/components/templates/MainLayout'
import SubPagePureLayout from '@/components/templates/SubPagePureLayout'


// components import



const Contact = () => {
    return(
        <div className={styles.about}>
            {/* TODO: pureLayoutとかのコンポーネントを作る　contactの中にcontactは変 */}
            <SubPagePureLayout
                id={6}
            >
                <SubPageHero
                    id={1}
                    backgroundImg='/'
                    title='お問い合わせ'
                    subTitle='このサービスについてお問い合わせいただけます。'
                    pageName='CONTACT'
                >
                    <h1>this space is contact children space</h1>
                </SubPageHero>
            </SubPagePureLayout>
        </div>
    )
}

export default Contact