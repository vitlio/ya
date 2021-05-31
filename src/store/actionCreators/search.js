import SEARCH from "../actions/search";

function searchAC(value){
    return{
        type: SEARCH,
        bookList: value
    }
}

export default searchAC;