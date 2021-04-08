import axios from "axios";

export function generateRandomArray(max, addNumber) {
  const array = [...Array(40)].map((_) => Math.ceil(Math.random() * max));
  const arrayFillter = array.filter((n) => n !== addNumber);
  const arrayRemoveDublicate = Array.from(new Set(arrayFillter));
  const arraySlice = arrayRemoveDublicate.slice();
  if (arraySlice.length > 6) {
    const arraySliceResult = arraySlice.splice(0, 3);
    arraySliceResult.push(addNumber);
    shuffleArray(arraySliceResult)
    return arraySliceResult
  }
  generateRandomArray()
}

export function generateRandom(min, max, excludeNumber = []) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  if (excludeNumber.some((n) => n === num)) {
    return generateRandom(min, max);
  }
  return num;
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
