import LOADER from "../actions/loader";
import initialState from "../initialState";

export default function loaderValue(state = initialState.loaderValue, action){
    switch(action.type){
        case LOADER: return action.loaderValue;
        default: return state;
    }
}