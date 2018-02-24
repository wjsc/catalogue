import en from './en.js';
import es from './es.js';
const languages = {en, es};
const userLanguage = (navigator.language || navigator.userLanguage).substr(0,2);
export const Translate = ({word}) => translate(word);
export const translate = (word) => languages[userLanguage] ?
    languages[userLanguage][word]
    : languages['en'][word];