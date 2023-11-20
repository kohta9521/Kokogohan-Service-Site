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

// zod
import { ContactIndividualSchema, ContactIndividualType } from '@/schema/individual'
// import { ContactCorporationSchema, ContactCorporationType } from '@/schema/corporation'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ContactFormProps {}


const Contact = () => {

    // formの切り替え
    const [form, setForm] = useState<'personal' | 'company'>('personal');

    const handleOnSubmit: SubmitHandler<ContactIndividualType> = (data) => {
        console.log(data)
    }

    const {
        register,
        handleSubmit,
        formState: { errors: formatError, isValid, isSubmitting },
    } = useForm<ContactIndividualType>({
        mode: 'onBlur',
        resolver: zodResolver(ContactIndividualSchema),
    })


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
                            <div className={styles.box}>
                            <h1>個人のお客様用お問い合わせフォーム</h1>
                            <form
                                className={styles.form}
                                action="https://docs.google.com/forms/d/e/1FAIpQLSeiTWm4EKK5esqpYw_rGQemcp8UX-a0LSDFz8V9vsBB6CHMfA/viewform?usp=sf_link"
                                method="post"
                                onSubmit={(event) => {
                                void handleSubmit(handleOnSubmit)(event)
                                }}
                            >
                                {/* email */}
                                <label className={styles.label}>
                                <div className={styles.labelTitle}>メールアドレス</div>
                                <input
                                    type="text"
                                    {...register('email')}
                                    className={styles.textInput}
                                    placeholder="例）mail@example.com"
                                    name="entry.1011188443"
                                />
                                {formatError.email && (
                                    <div className={styles.errorMessage}>
                                    {formatError.email.message}
                                    </div>
                                )}
                                </label>

                                {/* name */}
                                <label className={styles.label}>
                                <div className={styles.labelTitle}>お名前</div>
                                <input
                                    type="text"
                                    {...register('name')}
                                    className={styles.textInput}
                                    placeholder="例）山田太郎"
                                    name='entry.1520862316'
                                />
                                {formatError.name && (
                                    <div className={styles.errorMessage}>
                                    {formatError.name.message}
                                    </div>
                                )}
                                </label>

                                {/* kana */}
                                <label className={styles.label}>
                                <div className={styles.labelTitle}>フリガナ</div>
                                <input
                                    type="text"
                                    {...register('kana')}
                                    className={styles.textInput}
                                    placeholder="例）ヤマダタロウ"
                                    name='entry.48359775'
                                />
                                {formatError.kana && (
                                    <div className={styles.errorMessage}>
                                    {formatError.kana.message}
                                    </div>
                                )}
                                </label>

                                {/* tel */}
                                <label className={styles.label}>
                                <div className={styles.labelTitle}>電話番号</div>
                                <input
                                    type="text"
                                    {...register('telephone')}
                                    className={styles.textInput}
                                    placeholder="例）09012345678"
                                    name='entry.1713269236'
                                />
                                {formatError.telephone && (
                                    <div className={styles.errorMessage}>
                                    {formatError.telephone.message}
                                    </div>
                                )}
                                </label>

                                {/* title */}
                                <label className={styles.label}>
                                <div className={styles.labelTitle}>件名</div>
                                <input
                                    type="text"
                                    {...register('title')}
                                    className={styles.textInput}
                                    placeholder="例）お問い合わせ"
                                    name='entry.1265409169'
                                />
                                {formatError.title && (
                                    <div className={styles.errorMessage}>
                                    {formatError.title.message}
                                    </div>
                                )}
                                </label>

                                {/* message */}
                                <label className={styles.label}>
                                <div className={styles.labelTitle}>お問い合わせ内容</div>
                                <textarea
                                    {...register('message')}
                                    className={styles.textarea}
                                    placeholder="例）お問い合わせ内容"
                                    name='entry.1945242439'
                                />
                                {formatError.message && (
                                    <div className={styles.errorMessage}>
                                    {formatError.message.message}
                                    </div>
                                )}
                                </label>

                                {/* agree */}
                                <label className={styles.checkLabel}>
                                    <div className={styles.textBox}>
                                        <p className={styles.text}>
                                        個人情報の取り扱いについて<br />
                                        Simple株式会社（以下、「当社」という）では、お預かりした個人情報は下記の通りに厳粛に管理保護してまいります。<br />
                                        本同意書の内容を確認、ご理解いただき同意ボタンを押していただきますと情報が送信されます。<br />
                                        <br />
                                        （本お問い合わせ及びサービスにおける個人情報について）<br />
                                        お問い合わせに際してお預かりする個人情報については、当該お問い合わせのためにのみ利用させていただきます。<br />
                                        <br />
                                        （個人情報の第三者提供について）<br />
                                        当社は、ご利用者様の個人情報を、事前の同意なく第三者提供することはありません。ただし、次の各号の場合は除くものとします。<br />
                                        <br />
                                        ①第三者への提供について<br />
                                        当社では法律・法令などに基づく場合を除きましては、お預かりしました個人情報は、本人の同意を得ずに、第三者への提供はいたしません。<br />
                                        <br />
                                        ②個人情報提供の任意性について<br />
                                        個人情報の提供は原則任意です。ただし、個人情報を提供いただけない場合は、該当事項につきまして当社からの情報やサービスなどのご提供ができない場合がございます。<br />
                                        <br />
                                        ③開示対象個人情報の「利用目的の通知」「開示」「訂正、追加または削除」「利用または提供の拒否」に関して<br />
                                        個人情報を提供されたお客様は、該当情報に関して「利用目的の通知」「開示」「訂正、追加または削除」「利用または提供の拒否」を要求する権利を有しています。<br />
                                        </p>
                                    </div>
                                <div className={styles.checkboxContainer}>
                                    <input
                                    type="checkbox"
                                    value="true"
                                    {...register('agree')}
                                    className={styles.checkbox}
                                    />
                                    <p>個人情報の取り扱いに同意する</p>
                                </div>
                                {formatError.agree && (
                                    <div className={styles.errorMessage}>
                                    {formatError.agree.message}
                                    </div>
                                )}
                                </label>

                                {/* Submit Button */}
                                <button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className={styles.button}
                                >
                                送信する
                                </button>
                            </form>
                            </div>
                        ) : (
                            <div className={styles.box}>
                            <h1>法人のお客様用お問い合わせフォーム</h1>
                            
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