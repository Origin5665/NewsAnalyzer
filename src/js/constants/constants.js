const cardSelector = document.querySelector('.card-template');
const cardContainer = document.querySelector('.result__cards');
const searchForm = document.querySelector('.input-block');
const inputSearch = searchForm.querySelector('.input-block__input');
const inputButton = searchForm.querySelector('.input-block__button');
const errorElement = searchForm.querySelector('.input-block__error')
const date = new Date();
const COUNT = 3;

const newsApiConfig = {
    API_KEY: 'be1a51caaca347d8945917ce763db756',
    PAGE_SIZE: 100,
    dateFrom: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 6}`,
    dateTo: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,


}

const errorMessages = {
    empty: 'Введите запрос',
    long: 'Не меньше двух символов',

}

const inputConfig = {
    input: inputSearch,
    button: inputButton,
    error: errorMessages,
    errorEl: errorElement
}






export { cardSelector, cardContainer, newsApiConfig, searchForm, inputConfig, COUNT }
