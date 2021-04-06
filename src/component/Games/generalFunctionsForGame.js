import axios from "axios";


export function generateRandom(min, max, excludeNumber = null) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num === excludeNumber ? generateRandom(min, max) : num;
}


export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


export const getRequestWords = (group) => {
    return axios.get(
      `https://react-learn-words.herokuapp.com/words?group=${group}&page=${generateRandom(
        0,
        29
      )}`
    );
  };