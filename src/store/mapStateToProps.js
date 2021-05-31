export default function mapStateToProps(component){
    switch(component) {
        case "SearchComponent": return function(state){
            return {
                valueTT: state.valueTT,
                bookList: state.bookList,
                loaderValue: state.loaderValue,
                modal: state.modal,
            }
        }
        case "BookListPage": return state => ({
                bookList: state.bookList,
            })  
        case "Modal": return state => ({
                modalItem: state.modalItem,
        })      
        default: return undefined;
    } 
}