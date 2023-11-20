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
                        enTitle='New options for you'
                        jaTitle='新しい選択肢をあなたに'
                    />
                    <SubPageMainText
                        id={1}
                        text='ここでこの文章を読んでくださっている方々に考えて欲しいことがあります。

                        皆さんが地図を見るときはどんなシュチュエーションが多いですか？これは紙媒体の地図だけではなく、お手持ちのスマートフォンなどのマップアプリでも構いません。私は次のような場面が思いつきました。'
                    />
                    {/* <ul>
                        <li>友達との待ち合わせ。知らない駅に降り立った際</li>
                        <li>初めて行く予約をしたレストランの最寄駅についた際</li>
                        <li>旅行先で行きたい観光地へのルートを調べる際</li>
                    </ul> */}
                    <SubPageMainText
                        id={1}
                        text='皆さんお気づきでしょうか。全て目的地が定まっているシュチュエーションが多いですよね。地図とは元々ある情報をもとに私たちは答え（目的地）を知っている状態で使用していることが多いのです。実際かく言う私もスマートフォンのマップアプリを使用しているときは同じシチュエーションが多いです。もうひとつだけ皆さんに質問をさせてください。地図を作ったことがある人はいますか？
                        この質問にあると答えた方。素晴らしいです。その楽しさをすでに知っていると言うことですね。きっとあなたのような人は私の作ったこの「ここごはん」を楽しんで使用してくださるに違いありません。「地図なんて作ったことあるわけないだろ」このような方が大半だと感じます。
                        安心してください。すぐにこの「ここごはん」でその楽しさを知ることができます。'
                    />
                    <SubPageMainText
                        id={1}
                        text='地図を作るという体験を通してあなたは自分の普段生活をしている地理的な範囲で新しい発見と新しい喜びを得られることでしょう。毎日家を出て会社、もしくは大学に通う。もちろん現代には瞬間移動をできる技術はありませんので皆さん徒歩、車、バス、電車のユーザーですよね。その道中に一件の美味しいごはん屋さんを見つけられたらどうでしょう。会社・大学の近くに美味しくてランチの値段が安いごはん屋さんを見つけられたらどうでしょう。地元に深夜までやっている雰囲気が良く、居心地が良いバーを一件見つけられたらどうでしょう。それは自分が発見し共有してもいいですし、どなたかが見つけてくれても良いのです。あなたの生活に一つの選択肢が増えるのです。私は一つの選択肢を増やすのはなかなか容易ではないと考えています。
                        私はこのサービスを使ってくださる方々の一つの新しい選択肢を生み出したい。そう考えています。'
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