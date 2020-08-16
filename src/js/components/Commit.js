import { setDate } from '../utils/utils';

export default class Commit {
    constructor(commitData, commitTemplate) {
        this.commitTemplate = commitTemplate;
        this.commitData = commitData;
        this.email = 'aleksandrbakumenko11@gmail.com';

    }

    // Собирает карточку:

    create() {
        this.commit = this.commitTemplate.content.querySelector('.swiper__commit').cloneNode(true);

        this.commit.querySelector('.swiper__text-date').textContent = setDate(this.commitData.commit.committer.date);
        this.commit.querySelector('.swiper__text-email').textContent = this.email;
        this.commit.querySelector('.swiper__text-name').textContent = this.commitData.author.login;
        this.commit.querySelector('.swiper__text-commit').textContent = this.commitData.commit.message;
        this.commit.querySelector('.swiper__image').src = this.commitData.author.avatar_url;

        return this.commit
    }


}