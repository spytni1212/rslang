const showNewWords = (wordsArray, setWordsArray) => {
    const newWords = wordsArray
    .slice(1, 20);
    newWords.push(wordsArray[0]);
    setWordsArray(newWords);
}
export default showNewWords;