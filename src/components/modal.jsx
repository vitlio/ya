import React from 'react';
import '../index.css'

export default function Modal(props){
    let bookCoverLink = 'http://covers.openlibrary.org/b/';
    return(
        <div className="overlay" onClick={(e) => !e.target.closest('.modal-body') && props.closeModal()}>
            <div className="modal-body">
                <img src={(props.modalItem.cover_i&&(bookCoverLink + 'id/' + props.modalItem.cover_i + '-L.jpg' ))    
        ||(props.modalItem.olid&&(bookCoverLink + 'olid/' + props.modalItem.olid[0] + '-L.jpg' ))
        ||(props.modalItem.isbn&&(bookCoverLink + 'isbn/' + props.modalItem.isbn[0] + '-L.jpg' ))
        ||(props.modalItem.lccn&&(bookCoverLink + 'lccn/' + props.modalItem.lccn[0] + '-L.jpg' ))
        ||(props.modalItem.oclc&&(bookCoverLink + 'oclc/' + props.modalItem.oclc[0] + '-L.jpg' ))
        ||'https://thumbs.dreamstime.com/b/эскиз-книг-рисунки-изображенные-на-рисунках-содержат-кучу-старого-159243668.jpg'} 
        alt={props.modalItem.title}/>
        <span>
        <p><b>{props.modalItem.title ? props.modalItem.title : 'Без названия'}</b></p>
                <p>{props.modalItem.author_name ? props.modalItem.author_name : 'Автор неизвестен'}</p>
        </span>
            </div>
        </div>
    )
}