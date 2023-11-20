import React from 'react'


// scss import
import styles from './Map.module.scss'

// components import
import SubPageHero from '@/components/templates/SubPageHero'
import MainLayout from '@/components/templates/MainLayout'
import SubPageContent from '@/components/templates/SubPageContent'
import SubPageSecTitle from '@/components/atoms/SubPageSecTitle'
import SubPageTitleBox from '@/components/molecules/SubPageTitleBox'
import SubPageMainText from '@/components/atoms/SubPageMainText'



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
                />
                <SubPageContent id={1}>
                    <SubPageSecTitle
                        id={1}
                        text='Why the map?'
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
                        id={1}
                        text='Basic Functions'
                        color='red'
                    />
                    <SubPageSecTitle
                        id={1}
                        text='Functions to be added in the future'
                        color='red'
                    />
                    <SubPageSecTitle
                        id={1}
                        text='Gallery of actual screens, etc.'
                        color='red'
                    />
                </SubPageContent>
            </MainLayout>

        </div>
    )
}

export default Map