import React from 'react';
import { useContext } from 'react';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import { Context } from '../../context';
import s from './style.module.sass'

export default function AddForm() {

    const { addProduct } = useContext(Context);

    const submit = event => {
        event.preventDefault();
        const { title, price, discount } = event.target;
        addProduct(title.value, price.value, discount.value);
        title.value = '';
        price.value = '';
        discount.value = '';
    }

    return (
        <form onSubmit={submit} className={s.container}>
            <Input placeholder='Название' name='title' />
            <Input placeholder='Цена' name='price' />
            <Input placeholder='Процент скидки' name='discount' />
            <Button>Добавить</Button>
        </form>
    )
}
