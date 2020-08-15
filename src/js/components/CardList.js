import { hideButtonMore } from '../../pages/index/index'
import { COUNT } from '../constants/constants';
export default class CardList {

   constructor(cardContainer, createCard, data, result) {

      this.cardContainer = cardContainer;
      this.createCard = createCard;
      this.data = data
      this.result = result;
      this.start = 0;

   }
   // Добавляет элементы на страницу:

   _addCard(element) {
      const cardElem = this.createCard(element)
      this.cardContainer.appendChild(cardElem._create())
   }


   // Обнуляет DOM от элементов прошлого запроса

   resetResult() {

      this.cardContainer.textContent = ''
   }

   // Производит выборку карточек. В дальнейшем, по нажатию на кнопку "Показать еще" 
   // меняется "начальная" позиция в цикле, до тех пор, пока 
   // не дойдем до конца массива

   render(data) {
      for (let i = this.start; i < this.start + COUNT; i++) {
         if (data[i]) {

            this._addCard(data[i])
         }
      }

      hideButtonMore(this.start, data.length)
   }


   // Меняет счетчик для отображения карточек и отображает их

   _showMore(data) {
      this.start += COUNT;
      this.render(data)
   }



   // Отображает количество доступных новостей:

   renderResult(num) {

      this.result.textContent = num.length;
   }


















}