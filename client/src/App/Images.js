import React from 'react';
import './images.css';
import ImageList from './ImageList';

function Images(props){
    return (
     
            <div className="image-wrapper">
            <div className="grid">
  <div className="grid-sizer"></div>
                            <ImageList/>
        </div>
        </div>
    )
}
export default Images;








// import React,{Component} from 'react';
// import axios from 'axios';
// // import{render}from "react-dom";

// import {connect} from 'react-redux';
// import {getImages} from "../../redux/images.js";
// // import store from "../../redux/index.js";

// // import Images from './Images';

// // const images = {getImages};

// export class Portfolio extends Component{
//      componentDidMount(){
//        this.props.getImages();         
//  }        
//      render(){
//      const imageComponent = images.map((url, i) => {
//      <ImageItem key={image.url + i} {...image}></ImageItem>
//     if (loading) {
//         return (
//             <div>...Loading</div>
//         )
//     } else if (errMsg) {
//         return (
//             <div>{errMsg}</div>
//         )
//     } else {
//         return (
//             <div>
//                 {imageComponents}
//             </div>
       
//         )}
// // const mapStateToProps = state => {
// //     return state.images

// }  
      
    
// export default connect((mapStateToProps, {getImages})(Portfolio))