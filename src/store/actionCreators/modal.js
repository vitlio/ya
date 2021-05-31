import MODAL from "../actions/modal";

export default function modal(value){
    return {
        type: MODAL,
        modal: value
    }
}