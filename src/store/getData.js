import loaderAC from "./actionCreators/loader";
import searchAC from "./actionCreators/search";
import store from "./store";

export function getLinkBookSearch(data){
    let link = 'http://openlibrary.org/search.json?q=';
    link += data.split(' ').join('+');
    return link;
}

export function getData(url){
    store.dispatch(loaderAC(true));
    let request;
    try{
    fetch(url)
        .then(response => response.json())
        .then(data => {
            store.dispatch(searchAC(data.docs)); 
            store.dispatch(loaderAC(false)); 
        })
        .catch(err => console.log(err))
    }catch(e){
        console.error(e);
        store.dispatch(loaderAC(false)); 
    }
    return request;
}