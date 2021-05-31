import { combineReducers } from "redux";
import valueTT from './reducerTT';
import bookList from './reducerBookList';
import loaderValue from './reducerLoader';
import modal from './reducerModal';
import modalItem from './reducerModalItem';


const reducers = combineReducers({
    valueTT,
    bookList,
    loaderValue,
    modal,
    modalItem
});

export default reducers;