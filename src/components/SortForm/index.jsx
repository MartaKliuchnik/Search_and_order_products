import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import s from './style.module.sass';
import Button from '../../components/UI/Button'

export default function SortForm() {

    const { sort_title } = useContext(Context);

    const submit = event => {
        event.preventDefault();
        const { sorts } = event.target;
        sort_title(sorts.value);
    }
    
    return (
        <form className={s.sort_form} onSubmit={submit} >
            <p>Сортировать по:</p>
            <div className={s.container}>
                <select required defaultValue='' name="sorts">
                    <option value="" disabled hidden>Критерий сортировки</option>
                    <option value="title">Название</option>
                    <option value="price">Цена</option>
                    <option value="descount">Цена со скидкой</option>
                </select>
            <Button>Сортировать</Button>
            </div>
        </form>
    )
}
