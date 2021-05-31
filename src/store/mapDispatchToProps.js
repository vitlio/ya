import eraseBookList from "./actionCreators/eraseBookList";
import modal from "./actionCreators/modal";
import modalItemAC from "./actionCreators/modalItemAC";
import textTypingAC from "./actionCreators/textTypingAC";


export default function mapDispatchToProps(component){
    switch(component){
        case "SearchComponent": return function(dispatch){
            return{
                textTyping: value => dispatch(textTypingAC(value)),
                textErase: () => dispatch(textTypingAC('')),
                eraseBookList: () => dispatch(eraseBookList()),
            }
        };
        case "BookItem": return function(dispatch){
            return{
                clickHandler: (e, item) => {e.preventDefault();
                dispatch(modal(true)); dispatch(modalItemAC(item))}
            }
        };
        case "Modal": return function(dispatch){
            return{
                closeModal: () => dispatch(modal(false))
            }
        }
        default: return undefined;
    }
}