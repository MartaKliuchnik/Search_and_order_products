import React from 'react';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import s from './style.module.sass'

export default function AddForm() {

    const submit = event => {
        event.preventDefault();
        const { title, price, discount } = event.target;
        console.log(title.value, price.value, discount.value);
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
