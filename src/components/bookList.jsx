import React from 'react';
// import BookItem from './bookItem';
import BOOK_ITEM_W from './wrapContainers/bookItem_w';

export default function BookListPage(props){
    
    let bookCoverLink = 'http://covers.openlibrary.org/b/';
    let bookListElements = props.bookList.map(item => 
        <BOOK_ITEM_W key={item.last_modified_i} coverLink={
         (item.cover_i&&(bookCoverLink + 'id/' + item.cover_i + '-M.jpg' ))    
        ||(item.olid&&(bookCoverLink + 'olid/' + item.olid[0] + '-M.jpg' ))
        ||(item.isbn&&(bookCoverLink + 'isbn/' + item.isbn[0] + '-M.jpg' ))
        ||(item.lccn&&(bookCoverLink + 'lccn/' + item.lccn[0] + '-M.jpg' ))
        ||(item.oclc&&(bookCoverLink + 'oclc/' + item.oclc[0] + '-M.jpg' ))
        ||'https://thumbs.dreamstime.com/b/эскиз-книг-рисунки-изображенные-на-рисунках-содержат-кучу-старого-159243668.jpg'} 
        title={item.title}
        author={item.author_name&&item.author_name[0]} 
        item={item}
        /> );

    return(
        <div className="list">
            {bookListElements}
        </div>
    )
}