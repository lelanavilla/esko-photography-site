import React from 'react';
import{Switch, Route}from "react-router-dom";
import '../styles.css';
import Header from './Header';
// import Footer from './Footer';

import Home from './Home';
import Bookings from './Bookings.js';
import Videos from './Videos';
// import BookingDisplay from './pages/BookingDisplay.js';
import Images from './Images.js';
import Contact from './Contact.js';
// import LoginPage from './pages/LoginPage.js';
import Dashboard from './Dashboard.js';

function App(props){
    return(
        <div className="app-wrapper">
            <Header></Header>
           
            <div className="content-wrapper">
            <Switch> 
                <Route exact path="/" component={Home}></Route>
                <Route path="/bookings" component={Bookings}></Route>
                <Route  path="/images" component={Images}></Route>
                <Route  path="/contact" component={Contact}></Route>
                <Route path="/videos" component={Videos}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>


            </Switch>
        
         
            </div>


      
            </div>
    )

};

export default App;