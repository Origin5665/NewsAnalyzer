import './index.css';
import Card from '../../js/components/Card';
import CardList from '../../js/components/CardList';
import NewsApi from '../../js/modules/NewsApi';
import SearchInput from '../../js/components/SearchInput';

import { cardSelector, cardContainer, newsApiConfig, searchForm, inputConfig } from './../../js/constants/constants'
import DataStorage from '../../js/modules/DataStorage';


// Переменные

const resultBlock = document.querySelector('.result')
const loaderBlock = document.querySelector('.loader')
const buttonResult = document.querySelector('.result__button');
const notFoundBlock = document.querySelector('.not-found')
const buttonSearch = document.querySelector('.input-block__button');
const renderRes = document.querySelector('#result');

// Классы
const dataStorage = new DataStorage()
const newsApi = new NewsApi(newsApiConfig);
const createCard = (...arg) => new Card(...arg, cardSelector);
const cardList = new CardList(cardContainer, createCard, dataStorage, renderRes, hideButtonMore);
const searchInput = new SearchInput(inputConfig);


// Функции:



// Отображение блока Loader

const getNewResult = () => {
    event.preventDefault();
    loaderBlock.style.display = 'block';
    resultBlock.style.display = 'none'
    cardList.resetResult();

    newsApi.getNews(inputConfig.input.value)
        .then(res => {
            console.log(res);
            searchForm.reset();
            dataStorage.addTotalStorage(res.totalResults)
            dataStorage.addStorage(res.articles)

            if (res.articles.length === 0) {
                notFoundBlock.style.display = 'block'
                loaderBlock.style.display = 'none';
                dataStorage.clearStorage();

            } else {
                notFoundBlock.style.display = 'none'
                const data = dataStorage.getStorage()
                cardList.render(data);

                loaderBlock.style.display = 'none';
                resultBlock.style.display = 'block'
                cardList.renderResult(data)
            }
        })

        .catch(err => {

            console.log(`Ошибка ${err} при получении данных`)
        });

}

const hideButtonMore = (num, state) => {
    // const [...array] = document.querySelectorAll('.card');
    // console.log(array)
    if (num >= state) {


        buttonResult.style.display = 'none'
    } else {
        buttonResult.style.display = 'block'
    }

}

export { hideButtonMore };


// Вывод карточек 
// const showResult = () => {
//     let COUNT_DOWN = 0
//     const END_COUNT_DOWN = 3;
//     const [...array] = document.querySelectorAll('.card');
//     array.slice(END_COUNT_DOWN).forEach(item => item.style.display = 'none');
//     COUNT_DOWN += END_COUNT_DOWN;
//     buttonResult.addEventListener('click', () => {
//         const newArray = array.slice(COUNT_DOWN, COUNT_DOWN + END_COUNT_DOWN);

//         newArray.forEach(item => item.style.display = 'block');
//         console.log(newArray)
//         console.log(array)
//         COUNT_DOWN += END_COUNT_DOWN;


//     })

// // }
// const showResult = () => {

// }



// Выводим карточки после перезагрузки страницы

const reloadResult = () => {
    if (dataStorage.getStorage()) {
        console.log('Заполнено!')
        const data = dataStorage.getStorage();
        cardList.render(data)
        // showResult()
        cardList.renderResult(data)
        resultBlock.style.display = 'block'
    }
    else if (!dataStorage.getStorage()) {
        console.log('Введите запрос!')
        resultBlock.style.display = 'none'
    }
}



reloadResult()
buttonResult.addEventListener('click', () => cardList.showMore(dataStorage.getStorage()))
searchForm.addEventListener('submit', getNewResult)
searchInput.setEventListeners();
