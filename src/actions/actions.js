import * as actionTypes from "./type";

// set input subscriber to redux store
export const setSubscriber = value => {
    return {
        type: actionTypes.SET_SUBSCRIBER,
        payload: value
    };
};

// delete subscriber
export const deleteSubscriber = id => {
    return {
        type: actionTypes.DELETE_SUBSCRIBER,
        payload: id
    };
};

export const selectSubscriber = id => {
    return {
        type: actionTypes.SELECT_SUBSCRIBER,
        payload: id
    };
};

export const updateSubscriber = value => {
    return {
        type: actionTypes.UPDATE_SUBSCRIBER,
        payload: value
    };
};
