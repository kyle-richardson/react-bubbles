import { axiosWithAuth } from "../AxiosWithAuth"

export const GET_BUBBLES_START = 'GET_BUBBLES_START'
export const GET_BUBBLES_SUCCESS = 'GET_BUBBLES_SUCCESS'
export const GET_BUBBLES_FAIL = 'GET_BUBBLES_FAIL'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS='LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const SET_COLORS = 'SET_COLORS'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const LOGOUT = 'LOGOUT'
export const ADD_COLOR_START='ADD_COLOR_START'
export const ADD_COLOR_FAIL='ADD_COLOR_FAIL'
export const ADD_COLOR_SUCCESS='ADD_COLOR_SUCCESS'
export const DELETE_COLOR='DELETE_COLOR'
export const EDIT_START = 'EDIT_START'
export const EDIT_SUCCESS = 'EDIT_SUCCESS'
export const EDIT_FAIL = 'EDIT_FAIL'

export const getBubbles = () => dispatch => {
  dispatch({ type: GET_BUBBLES_START });
  axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(res =>
      dispatch({ type: GET_BUBBLES_SUCCESS, payload: res.data })
    )
    .catch(err => {
      return dispatch({ type: GET_BUBBLES_FAIL, payload: err })
    });
};

export const login = (event, credentials) => dispatch => {
  event.preventDefault()
  console.log(credentials)
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post('http://localhost:5000/api/login', credentials)
    .then(res =>
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    )
    .catch(err => {
      return dispatch({ type: LOGIN_FAIL, payload: err })
    });
};

export const addColor = (event, newColor) => dispatch => {
  event.preventDefault()
  dispatch({ type: ADD_COLOR_START });
  axiosWithAuth()
    .post('http://localhost:5000/api/friends', newColor)
    .then(res =>
      dispatch({ type: ADD_COLOR_SUCCESS, payload: res.data.payload })
    )
    .catch(err => {
      return dispatch({ type: ADD_COLOR_FAIL, payload: err })
    });
};
export const startEdit = (id)=> ({
  type: EDIT_START,
  payload: id
})
export const finishEdit = (friend, id) => dispatch => {
  axiosWithAuth()
    .put(`http://localhost:5000/api/friends/${id}`, friend)
    .then(res =>
      dispatch({ type: EDIT_SUCCESS, payload: res.data.payload })
    )
    .catch(err => {
      return dispatch({ type: EDIT_FAIL, payload: err })
    });
};

export const deleteColor = color => dispatch=> {
  axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then(res => dispatch({ type: DELETE_COLOR, payload: res.data.payload}))
    .catch(err=> console.log(err))
}
export const handleChange = (event, formType) => ({
    type: HANDLE_CHANGE,
    payload: { event: event, form: formType}
})

export const setColors = list => ({
    type: SET_COLORS,
    payload: list
})

export const logout = ()=> dispatch => {
  localStorage.clear()
  dispatch({
    type: LOGOUT
})
}



