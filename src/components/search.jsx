import React from 'react';
import '../index.css'
import { getData, getLinkBookSearch } from '../store/getData';
import store from '../store/store';
import Loader from './loader';
import Modal from './modal';
import BOOK_LIST_W from './wrapContainers/bookList_w';
import MODAL_W from './wrapContainers/modal_w';

export default function SearchComponent(props){
    function onChangeHandler(e){
        let value = e.target.value
        props.textTyping(value);
        setTimeout(() => {e.target.value.trim() && onClickSearchBtn(e.target.value)}, 1000)
    };
    function onClickSearchBtn(text){
        props.eraseBookList();
        getData(getLinkBookSearch(text))
    };
    return(
        <>


        <div className= "wrapper">    
            <div className = "search">
                <input  className="searchInput" placeholder="Введите название" type="text" onChange={(e) => onChangeHandler(e)} value={props.valueTT}/>
                <button className="searchBtnX" onClick={() => props.textErase()}>x</button>
                <button className="searchBtn"  onClick={() => onClickSearchBtn(props.valueTT)}>Найти</button>
            </div>
        </div> 

        {store.getState().modal && <MODAL_W/>}
        {store.getState().loaderValue && <Loader />}
        {(props.bookList.length > 0) && <BOOK_LIST_W />}
        </>
    )
}