import React from 'react';
import s from './style.module.sass';
import Input from '../../components/UI/Input'
import { useContext } from 'react';
import { Context } from '../../context';
import SortForm from '../SortForm'


export default function SearchForm() {

    const { setSearchWord } = useContext(Context);

    // const submit = event => {
    //     event.preventDefault();
    //     const { search } = event.target;
    //     setSearchWord(search.value);
    // }


    const change = event => setSearchWord(event.target.value);

    return (
        <div className={s.container}>
            <form
                // onSubmit={submit}
                onChange={change}
                className={s.searh_form}>
                <p>Поиск по...</p>
                <Input placeholder='Название' name='search'/>
            </form>
            <SortForm/>
        </div>
    )
}
