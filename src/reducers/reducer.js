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
        case actionTypes.DELETE_SUBSCRIBER:
            let subscriber = [...state.subscriber];
            subscriber = subscriber.filter(subs => subs.id !== action.payload);
            return {
                ...state,
                subscriber
            };
        default:
            return state;
    }
};

export default subscriberReducer;
