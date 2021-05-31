import React from 'react';
import '../index.css'

export default function Modal(props){
    let bookCoverLink = 'http://covers.openlibrary.org/b/';
    return(
        <div className="overlay" onClick={(e) => !e.target.closest('.modal-body') && props.closeModal()}>
            <div className="modal-body">
                {/* <button className="close-modal">x</button> */}
                <img src={(props.modalItem.cover_i&&(bookCoverLink + 'id/' + props.modalItem.cover_i + '-L.jpg' ))    
        ||(props.modalItem.olid&&(bookCoverLink + 'olid/' + props.modalItem.olid[0] + '-L.jpg' ))
        ||(props.modalItem.isbn&&(bookCoverLink + 'isbn/' + props.modalItem.isbn[0] + '-L.jpg' ))
        ||(props.modalItem.lccn&&(bookCoverLink + 'lccn/' + props.modalItem.lccn[0] + '-L.jpg' ))
        ||(props.modalItem.oclc&&(bookCoverLink + 'oclc/' + props.modalItem.oclc[0] + '-L.jpg' ))
        ||'https://thumbs.dreamstime.com/b/эскиз-книг-рисунки-изображенные-на-рисунках-содержат-кучу-старого-159243668.jpg'} 
        alt={props.modalItem.title}/>
        <span>
        <p><b>{props.title ? (props.title.length < 50 ? props.title : props.title.substr(0, 50) + '...') : 'Без названия'}</b></p>
                <p>{props.author ? (props.author.length < 30 ? props.author : props.author.substr(0, 30) + '...') : 'Автор неизвестен'}</p>
        </span>
                {console.log(props.modalItem)}
            </div>
        </div>
    )
}