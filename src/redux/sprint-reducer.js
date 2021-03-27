const SPRINT_GAME_START = 'SPRINT_GAME_START';
const SPRINT_GAME_END = 'SPRINT_GAME_END';

let initialState = {
    sprintGameStart: false,
    sprintGameEnd: false,
}

const sprintReducer = (state = initialState, action) => {
    switch (action.type) {
        case SPRINT_GAME_START:
            return {sprintGameStart: !state.sprintGameStart}
        case SPRINT_GAME_END:
            return {sprintGameEnd: !state.sprintGameEnd}
        default:
            return state
    }
}

export const setSprintGameStart = () => ({type: SPRINT_GAME_START});
export const setSprintGameEnd = () => ({type: SPRINT_GAME_END});

export default sprintReducer;

export const words = [
    {
        id: 1,
        eng: 'mum',
        rus: 'мама',
    },
    
    {
        id: 2,
        eng: 'dad',
        rus: 'папа',
    },

    {
        id: 3,
        eng: 'brother',
        rus: 'брат',
    },

    {
        id: 4,
        eng: 'sister',
        rus: 'сестра',
    },

    {
        id: 5,
        eng: 'son',
        rus: 'сын',
    },

    {
        id: 6,
        eng: 'daughter',
        rus: 'дочь',
    },

    {
        id: 7,
        eng: 'dog',
        rus: 'собака',
    },

    {
        id: 8,
        eng: 'cat',
        rus: 'кот',
    },

    {
        id: 9,
        eng: 'mouse',
        rus: 'мышь',
    },

    {
        id: 10,
        eng: 'cow',
        rus: 'корова',
    },
]
