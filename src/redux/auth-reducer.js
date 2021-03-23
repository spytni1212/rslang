const SET_USER_DATA = 'SET_USER_DATA'
const SET_TOKEN = 'SET_TOKEN'

let initialState = {
    email: null,
    userId: null,
    name: null,
    token: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data }
        case SET_TOKEN:
        return { ...state, token: action.token }
        default:
            return state;
    }
}

export const setUserData = (email, userId, name) => ({ type: SET_USER_DATA, data: {email, userId, name} })
export const setToken = (token) => ({ type: SET_TOKEN, token })



export default authReducer;