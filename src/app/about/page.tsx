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
                    <SubPageMainText
                        id={1}
                        text='また、最初から世界を目指してきたメルカリは、創業の翌年である2014年からUSへ進出し、事業を展開してきました。USは人種や国籍、宗教など人々のバックグラウンドが多様で、州ごとにも法律や文化が異なるため、サービスを成長させるには複雑な問題や課題に挑戦する必要があります。だからこそ、USは世界の縮図と言え、今後メルカリを世界に展開していくためには、必ず成功しなければならない重要な国であると考えています。当然、日本に比べて難易度は高いですが、USでの成功がメルカリのミッションの達成に大きく寄与するため、挑戦を続けます。'
                    />
                    <SubPageTitleBox
                        id={1}
                        enTitle='more'
                        jaTitle='信用を創造して、なめらかな社会を創る'
                    />
                    <SubPageMainText
                        id={1}
                        text='「信用を創造して、なめらかな社会を創る」。これはメルペイが創業時から掲げているミッションです。 一人ひとりが持つ、フリマアプリ「メルカリ」やスマホ決済サービス「メルペイ」の利用を通じて得た「信用」を可視化し、その「信用」に基づいてお金を自由に使える“なめらかな社会”を創る。そうすることで、誰もが今よりも自由・平等にお金を使い、欲しいモノを手に入れるだけでなく、やりたいことが叶う社会を実現したいと考えています。 メルペイが目指すのは、単なる便利なお金ではありません。社会のあり方を、お金との付き合い方を、働き方を、夢を実現する方法を変えていくことが、メルペイの目標であり、使命だと考えています。'
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