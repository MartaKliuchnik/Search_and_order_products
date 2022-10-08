import React from 'react';
import s from './style.module.sass';

export default function EmptyCard() {
    return (
        <div className={s.empty_card}>
            <p>Список продуктов пуст</p>
        </div>
    )
}
