import React from 'react';
import s from './style.module.sass';
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'


export default function SearchForm() {

    const submit = event => {
        event.preventDefault();
        const { search } = event.target;
        console.log(search.value);
    }

    return (
        <form onSubmit={submit}
            className={s.searh_form}>
            <Input placeholder='Название' name='search'/>
            <Button>Найти</Button>
        </form>
    )
}
