import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass'

export default function NavMenu() {
    return (
        <nav>
            <Link to='/add'>Добавить</Link>
            <Link to='/products'>Отобразить</Link>
        </nav>
    )
}
