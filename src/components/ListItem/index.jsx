import React from 'react';
import s from './index.module.sass';

export default function ListItem({title, price, discount, new_price}) {
    return (
        <div className={s.card_container}>
            <p>{title}</p>
            {
                discount
                    ? <div className={s.card}>
                        <p style={{color: '#A2A2A2', textDecoration: 'line-through'}}>{price}</p>
                        <p style={{color: '#FFA3A3'}}>{new_price}</p>
                    </div>
                    : <p>{price}</p>
            }
        </div>
    )
}
