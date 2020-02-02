export const INC = 'INCREMENT';
export const DEC = 'DECREMENT';
export const RST = 'RESET_VALUE';
export const DOWNLOAD_VALUE = 'DOWNLOAD_VALUE_FROM_DB';
export const UPLOAD_VALUE = 'UPLOAD_VALUE_TO_DB';
export const TOGGLE_IS_WAITING = 'TOGGLE_IS_WAITING';


const initialState = {
    number: 0,
    isWaiting: false
};


const reducer = (state = initialState, action) => {

    let stateCopy = { ...state };

    switch (action.type) {
        case INC:
            ++stateCopy.number;
            return stateCopy;
        case DEC:
            --stateCopy.number;
            return stateCopy;
        case RST:
            stateCopy.number = 0;
            return stateCopy;
        case DOWNLOAD_VALUE:
            stateCopy.number = action.value;
            return stateCopy;
        case UPLOAD_VALUE:
            return stateCopy;
        case TOGGLE_IS_WAITING:
            return { ...state, isWaiting: action.isWaiting };
        default:
            return stateCopy;
    }
};

export default reducer;