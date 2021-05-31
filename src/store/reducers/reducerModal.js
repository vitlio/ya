import MODAL from "../actions/modal";
import initialState from "../initialState";

export default function modal(state = initialState.modal, action){
    switch(action.type){
        case MODAL: return action.modal;
        default: return state;
    }
}