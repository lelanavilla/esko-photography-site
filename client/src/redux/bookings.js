import axios from "axios";
import assign from 'lodash.assign';

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}
export const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOOKINGS": {
            return {
                ...state,
                loading: false,
                data: action.bookings
            }
        }
        case "POST_BOOKING": {
            return {
                ...state,
                data: [...state.data, action.newBooking],
                loading: false,
            }
        }

        case "FORM_UPDATE_VALUE": {
            return assign({}, state, {
                values: assign({}, state.values, {
                    [action.name]: action.value
                })
            })
        }

        case "FORM_RESET": {
            return initialState;
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

export const getBookings = () => {
    return dispatch => {
        axios.get('/bookings').then(response => {
            dispatch({
                type: "GET_BOOKINGS",
                bookings: response.data
            })
        })

            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Info Unavailable"
                });
            });
    }
}
export function postBooking(newBooking) {
    return dispatch => {
        axios.post('/bookings', newBooking)
            .then(response => {
                dispatch({
                    type: "POST_BOOKING",
                    newBooking: response.data
                })
            })
    }

}
export function update(name, value) {
    return dispatch => dispatch({
        type: "FORM_UPDATE_VALUE",
        name, value
    });
}

export function reset() {
    return dispatch => dispatch({
        type: "FORM_RESET"
    });
}

export default bookingsReducer;