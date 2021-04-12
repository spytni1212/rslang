import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-learn-words.herokuapp.com/',
})


export const authAPI = {
    registration(registrationData) {
        return instance.post(`users`, registrationData)
    },
    login(loginData) {
        return instance.post(`signin`, loginData)
    }
}

export const wordsAPI = {
    getWords(currentGroup, currentPage) {
        return instance.get(`words?group=${currentGroup}&page=${currentPage}`)
    }
}

export const UserWordsAPI = {
    createUserWord(userId, token, wordId, optional) {
        return instance.post(`users/${userId}/words/${wordId}`, { optional }, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    },
    updateUserWords(userId, token, wordId, optional) {
        return instance.put(`users/${userId}/words/${wordId}`, { optional }, {
            headers: {"Authorization": `Bearer ${token}`}
        })
    }
}

export const userAggregatedWordsAPI = {
    getAllUserAggregatedWords(userId, token, currentGroup, currentPage, filter) {
        return instance.get(`users/${userId}/aggregatedWords`, {
            headers: {'Authorization': `Bearer ${token}`},
            params: { 
                group: currentGroup,
                page: currentPage,
                wordsPerPage: 20,
                filter
            }
        })
    },
    getAggregatedWords(userId, token, wordsPerPage, filter, currentPage = 0) {
        return instance.get(`users/${userId}/aggregatedWords`, {
            headers: {'Authorization': `Bearer ${token}`},
            params: { 
                page: currentPage,
                wordsPerPage,
                filter
            }
        })
    }
}
