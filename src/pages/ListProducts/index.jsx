import React from 'react'
import ListContainer from '../../components/ListContainer';
import s from './style.module.sass';

export default function ListProducts() {
    return (
        <div className={s.container}>
            <ListContainer/>
        </div>
    )
}
