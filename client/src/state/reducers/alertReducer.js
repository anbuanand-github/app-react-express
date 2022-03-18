import { SET_ALERT } from '../actions/types';
import initialState from '../initialState';

const alertReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return [...state, payload];
        default:
            return state;
    }
};

export default alertReducer;
