export default function mapStateToProps(component){
    switch(component) {
        case "SearchComponent": return function(state){
            return {
                valueTT: state.valueTT,
                bookList: state.bookList,
                loaderValue: state.loaderValue
            }
        }
        case "BookListPage": return state => ({
                bookList: state.bookList,
            })        
        default: return undefined;
    } 
}