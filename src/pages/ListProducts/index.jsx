import React from 'react'
import ListContainer from '../../components/ListContainer';
import SearchForm from '../../components/SearchForm';
import s from './style.module.sass';

export default function ListProducts() {
    return (
        <div className={s.container}>
            <SearchForm/>
            <ListContainer/>
        </div>
    )
}
