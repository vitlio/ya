import TEXT_TYPING from "../actions/textTyping";
import initialState from "../initialState";

export default function valueTT(state = initialState.valueTT, action){
    switch(action.type){
        case TEXT_TYPING: 
            return action.valueTT;

        default: return state;
    }
}