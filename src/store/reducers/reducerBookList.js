import SEARCH from '../actions/search';
import ERASE_BOOKLIST from '../actions/eraseBooklist'

export default function bookList(state = [], action){
    switch(action.type){
        case SEARCH: return action.bookList;
        case ERASE_BOOKLIST: return [];
        default: return state;
    }
}