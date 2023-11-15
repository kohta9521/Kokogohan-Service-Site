import React from 'react'
import {  Meta } from '@storybook/react'
import Header from '../Header'

export default {
    title: "Components/Organisms/Header",
    component: Header,
} as Meta

const Template = () => <Header />

export const Default = Template.bind({})

