import React from 'react'


// scss import
import styles from './About.module.scss'
import SubPageHero from '@/components/templates/SubPageHero'
import SubPageSecTitle from '@/components/atoms/SubPageSecTitle'
import Contact from '../contact/page'
import MainLayout from '@/components/templates/MainLayout'
import SubPageContent from '@/components/templates/SubPageContent'
import SubPageTitleBox from '@/components/molecules/SubPageTitleBox'
import SubPageMainText from '@/components/atoms/SubPageMainText'


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
                    <SubPageTitleBox
                        id={1}
                        enTitle='kokogohan'
                        jaTitle='ここごはんについて'
                    />
                    <SubPageMainText
                        id={1}
                        text='「新たな価値を生みだす世界的なマーケットプレイスを創る」。これは誰もが簡単にモノの売り買いを楽しむことによって、資源を循環させる豊かな社会、そして個人がやりたいことを実現できる社会をつくっていきたいという想いから掲げたミッションです。たとえば、クローゼットの中で眠っていた洋服や、いらなくなったからと捨てていたモノが、メルカリを通じてほかの誰かの役に立つように、誰かにとって価値がなくなってしまったモノを、別の誰かの「新たな価値」に変えることができる。そんなマーケットプレイスを国境や文化、言語を超え、世界中で展開することで、人々がモノを大切に使う循環型社会の実現を目指していきたいと考えています。'
                    />
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