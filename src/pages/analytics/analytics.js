import './analytics.css';

import DataStorage from '../../js/modules/DataStorage';
import Statistics from '../../js/components/Statistics';

const сurrentMonth = document.querySelector('.diagram__text-line span');
const weekTitle = document.querySelector('#week');
const template = document.querySelector('.diagram__template');
const diagContainer = document.querySelector('.diagram__wrapper-percent-block')
const dateTemplate = document.querySelector('.diagram-date-template');
const dateContainer = document.querySelector('.diagram__wrapper-date');

const dataStorage = new DataStorage();
const statistics = new Statistics(dataStorage, template, diagContainer, dateTemplate, dateContainer, сurrentMonth);





const renderResult = () => {
    const articles = dataStorage.getStorage()
    const totalResult = document.querySelector('.request__subtitle span');
    const titleMatches = document.querySelector('#week');
    const requestResult = document.querySelector('.request__title span');

    totalResult.textContent = dataStorage.getTotalStorage()
    requestResult.textContent = dataStorage.getRequestStorage()
    titleMatches.textContent = statistics._extractTitle(articles)

}





renderResult()
statistics.findWeekResult();
statistics.addResult(weekTitle);
