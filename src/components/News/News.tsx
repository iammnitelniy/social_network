import React, {useEffect} from 'react';
import s from './News.module.css'


type NewsPropsType = any;


export const News = (props: NewsPropsType) => {

     useEffect(() => { console.log('render')}, [])

    return (
        <div className={s.container}>
            <div className={s.item1}>элемент1</div>
            <div className={`${s.flexGrow}`}>элемент2</div>
            <div className={s.item3}>элемент3</div>
        </div>
    )
}

