// import axios from "axios";

// const{auth_users} = this.state.props;
// const authUser = {auth_users};
// const initialState={

//     login_inputs:[{
//         user_name: "",
//         password:""
//     }],
//     loading:true,
//     errMsg:""
   
// }
// export const loginsReducer = (state = initialState, action)=>{
// switch(action.type){
//     case "CHECK_LOGIN_CREDENTIALS": {
//         return{
//             ...state,
//             loading:false,
//             user_data:action.logins
//         }
//     }
//     default:{
//         return initialState
//     }

//     }
// }

// export function checkLoginCredentials(id){
//     return dispatch =>{
//         axios.get('/auth_user/' + id, authUser)
//         .then(response =>{
//             dispatch({
//                 type: "CHECK_LOGINS_CREDENTIALS",
//                 authUser: response.data, id
//             })
//             const {login_inputs}= this.state.props;
//             const{user_name, password}= login_inputs.props.value;
//             if(this.state.login_inputs.password.value !== this.globalState.auth_user.password.value){
//                 return console.log("This page is restricted");
//             }
//         }

//     )
// }
// }
// export default loginsReducer;