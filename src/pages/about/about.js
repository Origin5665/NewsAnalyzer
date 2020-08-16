import './about.css';
import "swiper/swiper-bundle.css";

import Swiper from 'swiper/bundle';
import GithubApi from '../../js/modules/GithubApi'
import Commit from '../../js/components/Commit';
import CommitList from '../../js/components/CommitList';

import { GIT_CONFIG, commitsContainer, commitTemplate } from '../../js/constants/constants';



// Классы: 

const github = new GithubApi(GIT_CONFIG);
const createCommit = (...arg) => new Commit(...arg, commitTemplate);
const commitList = new CommitList(commitsContainer, createCommit)


// Swiper Config: 

const swiper = new Swiper(".swiper__container", {

    init: false,
    slidesPerView: 1,
    spaceBetween: 16,
    wrapperClass: "swiper__wrapper",
    slideClass: "swiper__commit",
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
        nextEl: ".swiper__button-next",
        prevEl: ".swiper__button-prev",
    },
    pagination: {
        el: ".swiper__pagination",
        type: 'bullets',
        bulletClass: 'swiper__pagination-bullet',
        bulletActiveClass: 'swiper__pagination-bullet_active',
        clickable: true,

    },

});


// Рендер слайдов и запуск слайдера 

github.getCommits()
    .then(res => {
        commitList.render(res)
    })
    .then(() => {
        swiper.init(true)
    })