import React from 'react';
import s from './style.module.sass';


export default function Input(props) {
    return (
        <input {...props} className={s.input} />
    )
}
