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

    addCard(element) {

        const cardElem = this.createCard(element)
        this.cardContainer.appendChild(cardElem.create())
    }

    resetResult() {
        this.cardContainer.textContent = ''
    }

    render(data) {
        for (let i = this.start; i < this.start + COUNT; i++) {
            if (data[i]) {
                console.log(this.start)
                this.addCard(data[i])
            }

        }

        hideButtonMore(this.start, data.length)
    }


    showMore(data) {
        this.start += COUNT;

        this.render(data)
    }




    renderResult(num) {

        this.result.textContent = num.length;
    }


















}