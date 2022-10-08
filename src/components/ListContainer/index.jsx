import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import ListItem from '../ListItem';
import s from './style.module.sass';
import EmptyCard from '../EmptyCard';

export default function ListContainer() {

    const { products } = useContext(Context);

    return (
        <div className={s.list_container}>
            {
                products.length === 0
                    ? <EmptyCard/>
                    : products.map(product =>
                    <ListItem
                        key={product.id}
                        {...product}
                    />)
            }
        </div>
    )
}
