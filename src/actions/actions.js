import * as actionTypes from "./type";

// set input subscriber to redux store
export const setSubscriber = value => {
    return {
        type: actionTypes.SET_SUBSCRIBER,
        payload: value
    };
};
