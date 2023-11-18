import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SubPageHero, { SubPageHeroProps } from '../SubPageHero'

const meta: Meta = {
    title: 'Components/Templates/SubPageHero',
    component: SubPageHero,
    tags: ['autodocs'],
    argTypes: {
        backgroundImg: {
            control: {
                type: 'text'
            }
        },
        title: {
            control: {
                type: 'text'
            }
        },
        subTitle: {
            control: {
                type: 'text'
            }
        },
        pageName: {
            control: {
                type: 'text'
            }
        }
    }
}

export default meta

type SubPageHero = StoryObj<typeof SubPageHero>

export const Default: SubPageHero = {
    args: {
        id: 1,
        backgroundImg: '/',
        title: 'ここごはんについて',
        subTitle: 'このサービスを作るに至った経緯について、また、このサービスをどのように使用して欲しいのか。サービスを詳しく説明させていただきます。',
        pageName: 'ABOUT'
    }
}