import './index.css';
import Card from '../../js/components/Card';
import CardList from '../../js/components/CardList';
import NewsApi from '../../js/modules/NewsApi';
import SearchInput from '../../js/components/SearchInput';

import { cardSelector, cardContainer, NEWS_API_CONFIG, searchForm, inputConfig, buttonResult, ADD_COUNT, inputButton } from './../../js/constants/constants'
import DataStorage from '../../js/modules/DataStorage';


// Переменные

const resultBlock = document.querySelector('.result')
const loaderBlock = document.querySelector('.loader')
const notFoundBlock = document.querySelector('.not-found')
const renderRes = document.querySelector('#result');
const noFoundTitle = document.querySelector('.not-found__title');
// Классы

const dataStorage = new DataStorage()
const newsApi = new NewsApi(NEWS_API_CONFIG, dataStorage);
const createCard = (...arg) => new Card(...arg, cardSelector);
const cardList = new CardList(cardContainer, createCard, dataStorage, renderRes, hideButtonMore);
const searchInput = new SearchInput(inputConfig);





// Инициализирует получение данных с сервера, записывает результаты в хранилище
// и отображает карточки. 

const getNewsResult = () => {
    event.preventDefault();

    loaderBlock.style.display = 'block';
    resultBlock.style.display = 'none'
    notFoundBlock.style.display = 'none';
    inputConfig.input.setAttribute('disabled', true);
    // Стираем карточки прошлого запроса
    cardList.resetResult();
    // Сохраняем запрос в хранилище
    dataStorage.addRequestStorage(inputConfig.input.value)

    newsApi.getNews(inputConfig.input.value)

        .then(res => {
            dataStorage.addTotalStorage(res.totalResults)
            dataStorage.addStorage(res.articles)
            // Если длинна массива - 0, обнуляем хранилище, выводим not-found
            if (res.articles.length === 0) {
                noFoundTitle.textContent = 'Ничего не найдено';
                notFoundBlock.style.display = 'block'
                loaderBlock.style.display = 'none';
                resultBlock.style.display = 'none';
                dataStorage.clearStorage();
                inputConfig.input.removeAttribute('disabled')

            } else {
                notFoundBlock.style.display = 'none'
                const data = dataStorage.getStorage();
                cardList.render(data);
                cardList.renderResult(data);

                loaderBlock.style.display = 'none';
                inputConfig.input.removeAttribute('disabled');
                resultBlock.style.display = 'block';

            }
        })


        .catch(err => {
            loaderBlock.style.display = 'none';
            notFoundBlock.style.display = 'block';
            inputConfig.input.removeAttribute('disabled');
            noFoundTitle.textContent = 'Произошла ошибка подключения';

            console.log(`Ошибка ${err} при получении данных`)
        });

}

// Скрывает кнопку:

const hideButtonMore = (num, state) => {

    if (num + ADD_COUNT >= state) {
        buttonResult.style.display = 'none'
    } else {
        buttonResult.style.display = 'block'
    }

}

// const buttonBlock = (state) => {
//     if (state === true) inputButton.setAttribute('disabled', true)
//     if (state === false) inputButton.removeAttribute
// }

// Выводим карточки после перезагрузки страницы
// Проверяем хранилище, если успешно, то отображаем карточки

const reloadResult = () => {
    if (dataStorage.getStorage()) {
        const data = dataStorage.getStorage();
        cardList.render(data)
        cardList.renderResult(data)
        resultBlock.style.display = 'block';
    }
    else if (!dataStorage.getStorage()) {
        resultBlock.style.display = 'none'
    }
}


reloadResult()
buttonResult.addEventListener('click', () => cardList._showMore(dataStorage.getStorage()))
searchForm.addEventListener('submit', getNewsResult)
searchInput.setEventListeners();
export { hideButtonMore };