export const DOWNLOAD_ALL_VALUES = 'DOWNLOAD ALL VALUES FROM DB';
export const INC = 'INCREMENT';
export const DEC = 'DECREMENT';
export const RST = 'RESET VALUE';
export const DOWNLOAD_VALUE = 'DOWNLOAD VALUE FROM STATE';
export const TOGGLE_IS_UPDATING = 'TOGGLE IS UPDATING';
export const TOGGLE_IS_WAITING = 'TOGGLE IS WAITING';


let initialState = {
    allNumbers: [],
    number: 0,
    isUpdating: true,
    isWaiting: false
};


const reducer = (state = initialState, action) => {

    let stateCopy = { ...state };

    switch (action.type) {
        case DOWNLOAD_ALL_VALUES:
            stateCopy.allNumbers = [...state.allNumbers];
            stateCopy.allNumbers = [...action.values];
            return stateCopy;
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
            stateCopy.number = state.allNumbers.length
                ? state.allNumbers[action.id]
                : 0;
            return stateCopy;
        case TOGGLE_IS_UPDATING:
            return { ...state, isUpdating: action.isUpdating };
        case TOGGLE_IS_WAITING:
            return { ...state, isWaiting: action.isWaiting };
        default:
            return stateCopy;
    }
};

export default reducer;