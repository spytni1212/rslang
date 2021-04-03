const SET_IS_SHOW_TRANSLATE = 'SET_IS_SHOW_TRANSLATION'
const SET_IS_SHOW_BUTTONS = 'SET_IS_SHOW_BUTTONS'

let initialState = {
    isShowTranslate: true,
    isShowButtons: true
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_SHOW_TRANSLATE:
            return {...state, isShowTranslate: action.value}
        case SET_IS_SHOW_BUTTONS:
            return {...state, isShowButtons: action.value}
        default:
            return state
    }
}

export const setIsShowTranslate = (value) => ({type: SET_IS_SHOW_TRANSLATE, value })
export const setIsShowButtons = (value) => ({type: SET_IS_SHOW_BUTTONS, value })

export default settingsReducer