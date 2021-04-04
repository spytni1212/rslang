import * as axios from 'axios'

const putLearningWords = (words, user) => {
    words.map(word => {
        if (word.userWord === undefined) {
            axios.post(`https://react-learn-words.herokuapp.com/users/${user.userId}/words/${word._id}`, {
                optional: { "learning": true }
            },
                {
                    headers: { "Authorization": `Bearer ${user.token}` }
                })
        } else {
            axios.put(`https://react-learn-words.herokuapp.com/users/${user.userId}/words/${word._id}`, {
                optional: { "learning": true }
            },
                {
                    headers: { "Authorization": `Bearer ${user.token}` }
                })
        }
    })
}
export default putLearningWords;
