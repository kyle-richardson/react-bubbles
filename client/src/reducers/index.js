import { 
    GET_BUBBLES_START,
    GET_BUBBLES_FAIL, 
    GET_BUBBLES_SUCCESS,
    LOGIN_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    HANDLE_CHANGE,
    SET_COLORS,
    LOGOUT,
    ADD_COLOR_START,
    ADD_COLOR_FAIL,
    ADD_COLOR_SUCCESS,
    DELETE_COLOR,
    EDIT_START,
    EDIT_SUCCESS,
    EDIT_FAIL,
    CANCEL_EDIT
    } 
from "../actions"

const initialState = {
    error: '',
    isFetching: false,
    isLoggingIn: false,
    isAdding: false,
    isEditing: false,
    bubbleList: [],
    credentials: {},
    newColor: {
        color: "",
        code: { hex: "" }
    },
    initialColor: {
        color: "",
        code: { hex: "" }
    },
    token: '',
    colorToEdit: {},

}

export const rootReducer = (state = initialState, {type, payload})=> {
switch (type) {
    case GET_BUBBLES_START:
        return {
            ...state,
            error: '',
            isFetching: true
        }
    case GET_BUBBLES_FAIL:
        return {
            ...state,
            error: payload,
            isFetching: false
        }
    case GET_BUBBLES_SUCCESS:
        return {
            ...state,
            error: '',
            isFetching: false,
            bubbleList: payload
        }
    case LOGIN_START:
        return {
            ...state,
            error: '',
            isLoggingIn: true
        }
    case LOGIN_FAIL:
        return {
            ...state,
            error: payload,
            isLoggingIn: false
        }
    case LOGIN_SUCCESS:
        return {
            ...state,
            error: '',
            isLoggingIn: false,
            token: payload
        }
    case HANDLE_CHANGE:
        return {
            ...state,
            [payload.form]: 
            payload.target.name==='code' ? {
                ...state[payload.form],
                code: {hex: payload.target.value}
            } : 
            {
                ...state[payload.form],
                [payload.target.name]: payload.target.value
            }
        }
    case SET_COLORS:
        return {
            ...state,
            bubbleList: payload
        }
    case LOGOUT:
        return {
            ...state,
            error: '',
            isFetching: false,
            isLoggingIn: false,
            isAdding: false,
            isEditing: false,
            bubbleList: [],
            credentials: {},
            newColor: {
                color: "",
                code: { hex: "" }
            },
            initialColor: {
                color: "",
                code: { hex: "" }
            },
            token: '',
            colorToEdit: {},
        }
    case ADD_COLOR_START:
        return {
            ...state,
            isAdding: true,
            err: ''
        }
    case  ADD_COLOR_FAIL:
        return {
            ...state,
            err: payload,
            isAdding: false

        }
    case ADD_COLOR_SUCCESS: 
        return {
            ...state,
            err: '',
            bubbleList: payload,
            isAdding: false
        }
    case DELETE_COLOR:
        return {
            ...state,
            bubbleList: state.bubbleList.filter(color => `${color.id}` !== payload)
        }
    case EDIT_START:
        return {
            ...state,
            error: '',
            isEditing: true,
            colorToEdit: state.bubbleList.find(color=> `${color.id}`===`${payload}`)
        }
    case EDIT_SUCCESS:
        return {
            ...state,
            error: '',
            isEditing: false,
            colorToEdit: {},
            bubbleList: state.bubbleList.map(color=>{
                if(`${color.id}`===payload.id) return payload
                return color
            })
        }
    case EDIT_FAIL:
        return {
            ...state,
            error: payload,
            isEditing: false,
            colorToEdit: {}
        }
    case CANCEL_EDIT:
        return {
            ...state,
            isEditing: false,
            colorToEdit: {},
            error: ''
        }
    default: 
        return state
}
}
