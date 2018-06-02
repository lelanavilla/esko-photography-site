// import React from 'react';
// import VideosList from './VideosList';
// import jquery from 'jquery';
// import './videos.css';
// // import './videosJS.js';
// window.$ = window.jQuery = jquery;
// require('jquery-slimscroll');

// function Videos (props){
//     return (
//       <div className="html-wrapper">
//        <div className="body-wrapper">
// <div id="video-container">  
//   <div id="loading" >
//     Gallery is loading
//   </div>
  
//   <div id="warning">
//     Cover Art by Derek Eskridge of ESKO PHOTOGRAPHY, Las Vegas, Nevada
//   </div>

//     <div id="main" role="main">

//     <ul id="gallery" class="clearfix">
      
//       <li>
//         <div> 
//           <section>
          
//             <h3>The Weekend- Down Low<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/0XG9Nc1UXEM?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid1" allowfullscreen></iframe>
//           </section>
//         </div>
//       </li>
    
//        <li>
//         <div> 
//           <section>
          
//             <h3>Roy Woods ft PNB & Dvn-Balance<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/YQUOoWIfyvk?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid2" allowfullscreen></iframe>
//           </section>
//         </div>
//       </li>


//        <li>
//         <div> 
//           <section>
          
//             <h3>Nat Weaves- <span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/9hfmZWI_omQ?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid3" allowfullscreen></iframe>
//           </section>
//         </div>
//       </li>
    
//        <li>
//         <div> 
//           <section>
          
//             <h3>Siggy 808er Way Too Black ft. Rhyme Skeem & A. Campanell<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/MECL9q0kULI?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid4" allowfullscreen></iframe>
//           </section>
//         </div>
//       </li>

//       <li>
//         <div> 
//           <section>
          
//             <h3>Plaza -Run This<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/8tZs04XhGH0?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid5" allowfullscreen></iframe>
//           </section>
//         </div>
//       </li>
    
//        <li>
//         <div> 
//           <section>
          
//             <h3>Alicia Keyes ft Drake- Unthinkable<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/j81l5b2fjk8?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid6" allowfullscreen></iframe>
//           </section>
//         </div>
//       </li>
    
//       <li>
//         <div> 
//           <section>
          
//             <h3>Sade- No Ordinary Love<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/_9zFnlDxpvU?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid7" allowfullscreen></iframe>
//           </section>
//         </div>
//       </li>
    
//       <li>
//         <div> 
//           <section>
          
//             <h3>Majid Jordan- Gave Away your love<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/dN3I-IoXt_Y?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid8" allowfullscreen></iframe>
//           </section>
//         </div>
//       </li>
    
//       <li>
//         <div> 
//           <section>
          
//             <h3>Party Next Door- Things and such<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/79E4BwUWN1Q?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid9" allowfullscreen></iframe>
//           </section>
//         </div>
//       </li>
//       <li>
//         <div>
//           <section>
//       <h3>Drake ft Beyonce- I can<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/tkowAtnmJ0E?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid10" allowfullscreen></iframe>
//           </section>
      
// </div>
//     </li>

//        <li>
//         <div>
//           <section>
//       <h3>Trouble ft Drake -Bring it back<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/Rw-HD_cxitU?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid11" allowfullscreen></iframe>
//           </section>
      
// </div>
//     </li>

//        <li>
//         <div>
//           <section>
//       <h3>Childish Gambino ft.Tamia -So into you<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/HTakxY9GxNw?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid12" allowfullscreen></iframe>
//           </section>
      
// </div>
//     </li>
//  <li>
//         <div>
//           <section>
//       <h3>Drake- Trust Issues<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/ubOY0aDkrXo?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid13" allowfullscreen></iframe>
//           </section>
      
// </div>
//     </li>

//        <li>
//         <div>
//           <section>
//       <h3>Preme ft Party Next Door- Cant hang<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://www.youtube.com/embed/iXblys9kJHI?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid14" allowfullscreen></iframe>
//           </section>
      
// </div>
//     </li>

//     </ul>

//     </div>

//   <footer id="">
    
//     <p></p>
    
//   </footer>

// </div>

//                          {/* template for addons-----
//                          <li>
//                              <div>
//                                  <section>
//                                      <h3>MAGNUM PI<span class="after"></span></h3>
        
//           <iframe  height="100%" width="100%" src="https://youtube.com/embed/LBIgXhiOpeQ?autoplay=0&controls=1&showinfo=0&autohide=1" frameborder="0" title="youtube-vid" allowfullscreen></iframe>
//           </section>
//         </div>
//       </li> */}
//       </div>
    
//              {/* <VideosList video={this.props.video.url}/> */}
//         </div>
      
        
       
        
//     )
// }
// export default Videos
import React from 'react'
import VideosList from './VideosList.js';

function Videos(props) {
  return (
    <div>
      <VideosList />
    </div>
    
  )
}

export default Videos;
