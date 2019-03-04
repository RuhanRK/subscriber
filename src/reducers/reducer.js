import * as actionTypes from "../actions/type";

const initialState = {
    subscriber: [],
    selectedSubscriber: null
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
        case actionTypes.SELECT_SUBSCRIBER:
            let foundSubscriber = [...state.subscriber];

            foundSubscriber = foundSubscriber.filter(
                subs => subs.id.toString() === action.payload
            );
            return {
                ...state,
                selectedSubscriber: foundSubscriber
            };
        case actionTypes.UPDATE_SUBSCRIBER:
            let subscribers = [...state.subscriber];

            const index = subscribers.findIndex(
                subs => subs.id === action.payload.id
            );
            subscribers.splice(index, 1, action.payload);

            return {
                ...state,
                subscriber: subscribers
            };
        default:
            return state;
    }
};

export default subscriberReducer;
