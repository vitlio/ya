import eraseBookList from "./actionCreators/eraseBookList";
import textTypingAC from "./actionCreators/textTypingAC";

export default function mapDispatchToProps(component){
    switch(component){
        case "SearchComponent": return function(dispatch){
            return{
                textTyping: value => dispatch(textTypingAC(value)),
                textErase: () => dispatch(textTypingAC('')),
                eraseBookList: () => dispatch(eraseBookList()),
            }
        }
        default: return undefined;
    }
}