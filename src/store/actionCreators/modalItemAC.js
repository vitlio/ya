import MODAL_ITEM from "../actions/modalItem";

export default function modalItemAC(value){
    return {
        type: MODAL_ITEM,
        modalItem: value
    }
}