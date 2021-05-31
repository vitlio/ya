import { combineReducers } from "redux";
import valueTT from './reducerTT';
import bookList from './reducerBookList';
import loaderValue from './reducerLoader';


const reducers = combineReducers({
    valueTT,
    bookList,
    loaderValue,
});

export default reducers;