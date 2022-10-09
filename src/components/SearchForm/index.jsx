import React from 'react';
import s from './style.module.sass';
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { useContext } from 'react';
import {Context} from '../../context'


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
                <Input placeholder='Название' name='search'/>
                <Button >Найти</Button>
            </form>
        </div>
    )
}
