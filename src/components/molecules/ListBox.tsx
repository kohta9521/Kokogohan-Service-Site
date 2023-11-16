import React from 'react'

// scss import
import styles from './styles/ListBox.module.scss';
import List from '../atoms/List';

// components import



const ListBox = () => {
    return (
        <div className={styles.listBox}>
            <List
                id={1}
                text='Home'
                link='/'
            />
            <List
                id={2}
                text='About'
                link='/about'
            />
            <List
                id={3}
                text='Map'
                link='/map'
            />
            <List
                id={4}
                text='Ranking'
                link='/ranking'
            />
        </div>
    )
}

export default ListBox