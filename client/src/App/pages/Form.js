// import React, {Component} from 'react';

// import FormList from './FormList';
// //the example ben gave shows the empty array to be 
// //populated is supposed to go after the first closing 
// //curly brace but mine throws an error when i put it there
// //but doesnt throw an error when i put it after the second closing 
// //curly brace
// class Form extends Component{
//     constructor(props){
//         super(props);
//         this.initialState={
//             inputs:{
//                 name:"",
//                 email:"",
//                 phone:""
//             },
//             inquiries:[]
//         }
        
        
//     }
// }   
//     this.state =this.initialState;
//     this.handleChange = this.handleChange.bind('this');
//     this.handleSubmit = this.handleSubmit.bind('this');

// handleChange(e) {
//     const {value,name}= e.target;
//     this.setState(prevState => {
//         return{
//             inputs:{
//             ...prevState.inputs,
//             [name]:value
//             }
//         }
    
//         });
//     }

//      handleSubmit(e) {
//         e.preventDefault();
//         this.setState(prevState => {
//             return{
//                 inputs: this.initialState.inputs,
//                 inquires:[...prevState.inquires,prevState.inputs]
//             }
//         });
//     }
//       render() {
//         const props ={
//             handleSubmit: this.handleSubmit,
//             handleChange: this.handleChange, 
//             ...this.state

//         }
//      return(
//             <FormDisplay {...props}> </FormDisplay>
//         )
//     }

// export default Form;


