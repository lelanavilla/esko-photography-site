import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}
export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_IMAGES": {
            return {
                ...state,
                loading: false,
                data: action.images
            }
        }
        case "POST_IMAGE": {
            return {
                ...state,
                data: [...state.data, action.newImage],
                loading: false,
            }
        }
        case "LOADING_START": {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state;
    }
}

export function getImages(){
    return dispatch =>{
        axios.get('/images').then(response =>{
            dispatch({
                type: "GET_IMAGES",
                images:response.data
            })
            console.log(response.data);
        })
        .catch(err => {
            dispatch({
            type: "ERR_MSG",
            err: "images Unavailable"
        });
    });
    }
}
export function postImage (newImage) {
    return dispatch =>{
        axios.post('/images', newImage)
        .then(response =>{
            dispatch({
                type:"POST_IMAGE",
                newImage: response.data
            })
        })
    }

}

export default imagesReducer;