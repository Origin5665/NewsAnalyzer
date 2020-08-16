// INDEX

const cardSelector = document.querySelector('.card-template');
const cardContainer = document.querySelector('.result__cards');
const searchForm = document.querySelector('.input-block');
const inputSearch = document.querySelector('.input-block__input');
const inputButton = document.querySelector('.input-block__button');
const errorElement = document.querySelector('.input-block__error');
const date = new Date();
const time = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + date.getDate(); // 
const COUNT = 3;
const dateMonth = document.querySelector('.diagram__text-line span');
const commitTemplate = document.querySelector('.swiper__template');
const commitsContainer = document.querySelector('.swiper__wrapper');
const buttonResult = document.querySelector('.result__button');
const ADD_COUNT = 3;



// Git
const GIT_CONFIG = {
    login: 'Origin5665',
    rep: 'NewsAnalyzer'
}

// ApiNews
const NEWS_API_CONFIG = {
    API_KEY: 'be1a51caaca347d8945917ce763db756',
    PAGE_SIZE: 100,
    dateFrom: time,

}


const ERROR_MESSAGES = {
    empty: 'Введите запрос',
    long: 'Не меньше двух символов',

}

const inputConfig = {
    input: inputSearch,
    button: inputButton,
    error: ERROR_MESSAGES,
    errorEl: errorElement
}




export { cardSelector, cardContainer, NEWS_API_CONFIG, searchForm, inputButton, inputConfig, COUNT, inputSearch, dateMonth, date, GIT_CONFIG, commitTemplate, commitsContainer, buttonResult, ADD_COUNT }
