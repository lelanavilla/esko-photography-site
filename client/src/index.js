import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './redux/';
import {getImages, postImage} from './redux/images.js';
import {getBookings, postBooking} from './redux/bookings.js';
import {getVideos, postVideo, deleteVideo} from './redux/videos.js';
import {BrowserRouter}from 'react-router-dom';
import './styles.css';
import App from './App';


store.dispatch(getImages());
store.dispatch(postImage());
store.dispatch(getBookings());
store.dispatch(postBooking());
store.dispatch(getVideos());
store.dispatch(postVideo());
// store.dispatch(deleteVideo());

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
<App/>
</BrowserRouter>
</Provider>
, document.getElementById("root"));
