const SET_USER_DATA = 'SET_USER_DATA'
const SET_TOKEN = 'SET_TOKEN'

let initialState = {
    userId: null,
    name: null,
    token: null,
    isLogin: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, isLogin: true }
        case SET_TOKEN:
        return { ...state, token: action.token }
        default:
            return state;
    }
}

export const setUserData = (userId, name) => ({ type: SET_USER_DATA, data: {userId, name} })
export const setToken = (token) => ({ type: SET_TOKEN, token })



export default authReducer;