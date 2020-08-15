import { setDate } from '../utils/utils'

export default class Card {
    constructor(data, cardSelector) {
        this.cardSelector = cardSelector;
        this.data = data;

    }

    _create() {
        this.elementCard = this.cardSelector.content.querySelector('.card');
        this.card = this.elementCard.cloneNode(true)
        this.card.setAttribute('href', this.data.url);
        this.card.querySelector('.card__image').style.backgroundImage = `url(${this.data.urlToImage})`;
        this.card.querySelector('.card__text-title').textContent = this.data.title;
        this.card.querySelector('.card__text').textContent = this.data.description;
        this.card.querySelector('.card__text-edit').textContent = this.data.source.name;
        this.card.querySelector('.card__text-date').textContent = setDate(this.data.publishedAt)

        return this.card;

    }



} 