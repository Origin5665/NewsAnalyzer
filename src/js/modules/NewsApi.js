export default class NewsApi {
    constructor(config) {
        this.config = config;
    }

    getNews(data) {
        const request = data;
        return fetch(` https://nomoreparties.co/news/v2/everything?language=ru&q=${request}&${this.config.dateFrom}&sortBy=publishedAt&pageSize=${this.config.PAGE_SIZE}&apiKey=${this.config.API_KEY}`, {
            method: "GET",
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
    }
}


