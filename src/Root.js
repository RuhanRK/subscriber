import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import subscriberReducer from "./reducers/reducer";

const Root = props => {
    const store = createStore(
        subscriberReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return <Provider store={store}>{props.children}</Provider>;
};

export default Root;
