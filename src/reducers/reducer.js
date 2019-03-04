import * as actionTypes from "../actions/type";

const initialState = {
    subscriber: []
};

const subscriberReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SUBSCRIBER:
            return {
                ...state,
                subscriber: [...state.subscriber, action.payload]
            };

        default:
            return state;
    }
};

export default subscriberReducer;
