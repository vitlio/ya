import TEXT_TYPING from "../actions/textTyping";

export default function textTypingAC(value){
    return{
        type: TEXT_TYPING,
        valueTT: value 
    }
}