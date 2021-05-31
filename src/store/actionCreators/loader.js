import LOADER from "../actions/loader";

function loaderAC(value){
    return {
        type: LOADER,
        loaderValue: value
    }
}

export default loaderAC;