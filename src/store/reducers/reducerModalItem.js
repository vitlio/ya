import MODAL_ITEM from "../actions/modalItem";

export default function modalItem(state={}, action){
    switch(action.type){
        case MODAL_ITEM: return action.modalItem
        default: return state;
    }
}