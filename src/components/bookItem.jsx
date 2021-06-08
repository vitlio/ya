import React, { useState } from 'react';
import '../index.css'

export default function BookItem(props){

    let [imgURL, setImgURL] = useState(props.coverLink);

    return (
        <div className="book-item-wrapper" onClick={(e) => props.clickHandler(e, props.item)}>
            <img src={imgURL} onLoad={e => e.target.clientHeight === 1 && setImgURL('https://thumbs.dreamstime.com/b/эскиз-книг-рисунки-изображенные-на-рисунках-содержат-кучу-старого-159243668.jpg')}
                alt={props.title}/>
            <span>
                <p><b>{props.title ? (props.title.length < 50 ? props.title : props.title.substr(0, 50) + '...') : 'Без названия'}</b></p>
                <p>{props.author ? (props.author.length < 30 ? props.author : props.author.substr(0, 30) + '...') : 'Автор неизвестен'}</p>
            </span>
        </div>
    )
}