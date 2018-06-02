import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
// import "/styles.css";

import { imagesReducer } from "./images.js";
import { bookingsReducer } from "./bookings.js";
import {videosReducer } from "./videos.js";
// import { loginsReducer } from "./logins.js";
// import {dashboardsReducer} from "./dashboard.js";

const globalState = {
    images: imagesReducer,
    bookings: bookingsReducer,
    videos: videosReducer,
    // logins: loginsReducer,
    auth_users: [{

        user_name: "lelanavilla",
        password: "getmoney88"
    },
    {
        user_name: "derekeskridge",
        password: "getmoney88"
    }]

}

const store = createStore(combineReducers(globalState), applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()))

export default store;