import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}
export const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_VIDEOS": {
            return {
                ...state,
                loading: false,
                data: action.videos
            }
        }
        case "POST_VIDEO": {
            return {
                ...state,
                data: [...state.data, action.newVideo],
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

export function getVideos(){
    return dispatch =>{
        axios.get('./api/videos').then(response =>{
            dispatch({
                type: "GET_VIDEOS",
                videos:response.data
            })
            console.log(response.data);
        })
        .catch(err => {
            dispatch({
            type: "ERR_MSG",
            err: "videos Unavailable"
        });
    });
    }
}
export function postVideo (newVideo) {
    return dispatch =>{
        axios.post('./api/videos', newVideo)
        .then(response =>{
            dispatch({
                type:"POST_VIDEO",
                newVideo: response.data
            })
        })
    }

}

export default videosReducer;