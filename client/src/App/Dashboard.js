// import React from 'react';
// import {Link} from 'react-router-dom';
// import BookingsDisplay from './BookingDisplay';
// // import {connect} from 'react-redux';
// import './assets/dashboard.css';
// // import { getBookings } from './redux/bookings.js';
// // import Bookings from './Bookings';
// // import bookingRouter from'../routes.bookings.js'


// function Dashboard(props) {
 



// return (
//         <div>
//         <div class="admin-panel clearfix">
//   <div class="slidebar">
//     <div class="logo">
//       <a href=""></a>
//     </div>
//     <ul>
//       <li><a href="#dashboard" id="targeted">dashboard</a></li>
//       <li><Link to={BookingsDisplay}path="'./BookingList">Bookings</Link></li>
//       <li><a href="#media">media</a></li>
//       <li><a href="#pages">pages</a></li>
//       <li><a href="#links">links</a></li>
//       <li><a href="#comments">comments</a></li>
//       <li><a href="#widgets">widgets</a></li>
//       <li><a href="#plugins">plugins</a></li>
//       <li><a href="#users">users</a></li>
//       <li><a href="#tools">tools</a></li>
//       <li><a href="#settings">settings</a></li>
//     </ul>
//   </div>
//   <div class="main">
//     <ul class="topbar clearfix">
//       <li><a href="#">q</a></li>
//       <li><a href="#">p</a></li>
//       <li><a href="#">o</a></li>
//       <li><a href="#">f</a></li>
//       <li><a href="#">n</a></li>
//     </ul>
//     <div class="mainContent clearfix">
//       <div id="dashboard">
//         <h2 class="header"><span class="icon"></span>Dashboard</h2>
//           <div class="booking-list-dash">
//             <h4 className="booking-display-area">Current Bookings</h4>
//             <div class="clearfix">
//               <ul class="current-booking-list">
//                 <BookingList/>
//                 </ul>
//               <ul class="discussions">
//                 <li>discussions</li>
//                 <li class="comments"><span class="count">353</span><a href="">comments</a></li>
//                 <li class="approved"><span class="count">319</span><a href="">approved</a></li>
//                 <li class="pending"><span class="count">0</span><a href="">pending</a></li>
//                 <li class="spam"><span class="count">34</span><a href="">spam</a></li>
//              </ul>
//            </div>
//            
//          </div>
// <section id="add-image"> 
//          <div class="quick-press">
//            <h4>Add Media</h4>
//            <form action="addImage" method="post" onSumbit={handleSubmit}>
//              <input type="text" name="media" placeholder="Image Url"/>
//              <button type="button" class="save">Enter</button>
//            </form>
//          </div>
//        </div>
//         </section>
//        <div id="posts">
//          <h2 class="header">posts</h2>
//        </div>
//        <div id="media">
//          <h2 class="header">media</h2>
//        </div>
//        <div id="pages">
//          <h2 class="header">pages</h2>
//        </div>
//        <div id="links">
//          <h2 class="header">links</h2>
//        </div>
//        <div id="comments">
//          <h2 class="header">comments</h2>
//        </div>
//        <div id="widgets">
//          <h2 class="header">widgets</h2>
//        </div>
//        <div id="plugins">
//          <h2 class="header">plugins</h2>
//        </div>
//        <div id="users">
//          <h2 class="header">users</h2>
//        </div>
//        <div id="tools">
//          <h2 class="header">tools</h2>
//        </div>
//        <div id="settings">
//          <h2 class="header">settings</h2>
//        </div>
//      </div>
//      <ul class="statusbar">
//        <li><a href=""></a></li>
//        <li><a href=""></a></li>
//        <li class="profiles-setting"><a href="">s</a></li>
//        <li class="logout"><a href="">k</a></li>
//      </ul>
//    </div>
// </div>
            
//         </div>
//     )
// }
// export default Dashboard;





   


import React from 'react'
// import AppCalendar from './AppCalendar.js';

function Dashboard() {
    return (
        <div>
            <aside className="calendar-section">
                {/* <AppCalendar/> */}
            </aside>
            
        </div>
    )
}

export default Dashboard
