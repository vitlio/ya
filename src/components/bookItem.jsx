import React from 'react';
import '../index.css'

export default function BookItem(props){

    return (
        <div className="book-item-wrapper" onClick={(e) => props.clickHandler(e, props.item)}>
            <img src={props.coverLink
                || 'https://spare-print.ru/images/003/840/123/3840123/original/placeholder-original-600Wx450H-retina.png'} 
                alt={props.title}/>
            <span>
                <p><b>{props.title ? (props.title.length < 50 ? props.title : props.title.substr(0, 50) + '...') : 'Без названия'}</b></p>
                <p>{props.author ? (props.author.length < 30 ? props.author : props.author.substr(0, 30) + '...') : 'Автор неизвестен'}</p>
            </span>
        </div>
    )
}