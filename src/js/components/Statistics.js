import { date } from '../constants/constants';
import { setDate, setDateDiagram, getDateMonth } from '../utils/utils';

export default class Statistics {

   constructor(dataStorage, template, container, dateTemplate, dateContainer, currentMonth) {

      this.dataStorage = dataStorage;
      this.template = template;
      this.container = container;
      this.dateTemplate = dateTemplate;
      this.dateContainer = dateContainer;
      this.currentMonth = currentMonth;
   };

   // Добавляет в массив заголовки:

   _extractTitle(array) {
      const newArray = [];
      array.forEach(item => {
         newArray.push(item.title);
      })
      return this._isInclude(newArray);
   };


   // Добавляет в массив описания:

   _extractDescr(array) {
      const newArray = [];
      array.forEach(item => {
         newArray.push(item.description);
      })
      return this._isInclude(newArray);

   };
   // Добавляет в массив описание 


   // Производит расчет совпадений по искомому слову
   _isInclude(array) {
      this.res = 0;
      const req = localStorage.getItem('request').toLowerCase();
      for (let i = 0; i < array.length; i++) {
         if (array[i].toLowerCase().includes(req)) {
            this.res += 1
         }

      }

      return this.res;

   };
   // Выводит результат
   addResult(elem) {
      elem.textContent = this.res;

   };

   // Собирает диаграму на 7 дней:

   findWeekResult() {
      this.articles = this.dataStorage.getStorage();
      this.request = this.dataStorage.getRequestStorage();
      this.startNumber = 0;
      this.endNumber = 7;

      // ограничиваем диапазон семью днями

      while (this.startNumber < this.endNumber) {

         this.weekly = date;

         // поиск совпадений в заголовках и описании:

         this.descriptionMatches = this._count(this.articles, this.weekly, false);
         this.titleMatches = this._count(this.articles, this.weekly, true);
         this.totalResult = this.descriptionMatches + this.titleMatches;
         this.percent = this.totalResult;

         // Запуск методов отображения:

         this._diagramRender(this.titleMatches, this.percent);
         this._dateRender(this.weekly);
         this._currentMonthRender(date);

         // Счетчик:

         this.week = date.setDate(date.getDate() - 1);
         this.startNumber += 1;

      }

   };


   // Метод фильтрации массива с новостями по дням:

   _count(array, date, state) {

      this.dayArray = array.filter(item => ((setDate(item.publishedAt) === setDate(date))))

      if (state = true) {
         this.result = this._extractTitle(this.dayArray);
      } else {
         this.result = this._extractDesr(this.dayArray);
      }

      return this.result
   };



   // Строит график каждого дня:

   _diagramRender(newsCount, percent) {

      this.diagramPart = this.template.content.querySelector('.diagram__percent').cloneNode(true);
      this.diagramPart.textContent = newsCount;

      if (percent === 0) {
         this.diagramPart.style.width = `${1}%`
      }
      else {
         this.diagramPart.style.width = `${percent}%`
      }
      this.container.append(this.diagramPart)
   };

   // Отображает текущие 7 дней на графике: 

   _dateRender(week) {

      this.dateLine = this.dateTemplate.content.querySelector('.diagram__text-date').cloneNode(true);
      this.dateLine.textContent = setDateDiagram(week);
      this.dateContainer.append(this.dateLine)
   };

   // Отображает текущий месяц:

   _currentMonthRender(month) {
      this.currentMonth.textContent = getDateMonth(month)
   };





}