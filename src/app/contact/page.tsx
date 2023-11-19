'use client'
import React, { useState } from 'react'

// scss import
import styles from './Contact.module.scss'

// components import
import SubPageHero from '@/components/templates/SubPageHero'
import SubPagePureLayout from '@/components/templates/SubPagePureLayout'
import SubPageContent from '@/components/templates/SubPageContent'
import SubPageSecTitle from '@/components/atoms/SubPageSecTitle'
import SubPageTitleBox from '@/components/molecules/SubPageTitleBox'
import SubPageMainText from '@/components/atoms/SubPageMainText'


const Contact = () => {

    // formの切り替え
    const [form, setForm] = useState<'personal' | 'company'>('personal');


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
                />
                <SubPageContent id={5}>
                    <SubPageSecTitle id={1} text='Contact' color='red' />
                    <SubPageTitleBox id={1} enTitle='FORM' jaTitle='お問い合わせフォーム' />
                    <SubPageMainText
                        id={1}
                        text='
                            ここではサービスについて、また、サービスを使用する上での不具合や要望などをお問い合わせいただけます。
                            下記のフォームは法人のお客様と個人のお客様で内容が分かれていますので、お問い合わせの内容によって選択してください。
                            また、お問い合わせの内容によっては、お返事にお時間をいただく場合がございます。あらかじめご了承ください。
                        '
                    />
                    <div className={styles.formBox}>
                        <div className={styles.flexButton}>
                        <button
                            className={`${styles.personalButton} ${form === 'personal' ? styles.active : ''}`}
                            onClick={() => setForm('personal')}
                        >
                            個人の方
                        </button>
                        <button
                            className={`${styles.companyButton} ${form === 'company' ? styles.active : ''}`}
                            onClick={() => setForm('company')}
                        >
                            法人の方
                        </button>
                        </div>
                        <div className={styles.formBox}>
                        {form === 'personal' ? (
                            <div>
                            <h1>Person Form</h1>
                            {/* ここに実際の個人の方向けのフォームを配置 */}
                            </div>
                        ) : (
                            <div>
                            <h1>Company Form</h1>
                            {/* ここに実際の法人の方向けのフォームを配置 */}
                            </div>
                        )}
                        </div>
                    </div>
                </SubPageContent>
            </SubPagePureLayout>
        </div>
    )
}

export default Contact