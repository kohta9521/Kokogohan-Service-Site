import React from 'react'


// scss import
import styles from './About.module.scss'
import SubPageHero from '@/components/templates/SubPageHero'
import SubPageSecTitle from '@/components/atoms/SubPageSecTitle'
import Contact from '../contact/page'
import MainLayout from '@/components/templates/MainLayout'
import SubPageContent from '@/components/templates/SubPageContent'


// components import



const About = () => {
    return(
        <div className={styles.about}>
            <MainLayout
                id={2}
            >
                <SubPageHero
                    id={1}
                    backgroundImg='/'
                    title='ここごはんについて'
                    subTitle='このサービスを作るに至った経緯について、また、このサービスをどのように使用して欲しいのか。サービスを詳しく説明させていただきます。'
                    pageName='ABOUT'
                />
                <SubPageContent id={1}>
                    <SubPageSecTitle
                        id={1}
                        text='Our Mission'
                        color='red'
                    />
                    <h1>sample code</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda vel recusandae quam in officia qui sapiente ratione praesentium cumque deserunt?
                    </p>
                    <SubPageSecTitle
                        id={2}
                        text='Service Overview'
                        color='red'
                    />
                    <SubPageSecTitle
                        id={3}
                        text='Background of production'
                        color='red'
                    />
                    <SubPageSecTitle
                        id={4}
                        text='About the future'
                        color='red'
                    />
                    <SubPageSecTitle
                        id={5}
                        text='Self introduction'
                        color='red'
                    />
                </SubPageContent>
            </MainLayout>

        </div>
    )
}

export default About