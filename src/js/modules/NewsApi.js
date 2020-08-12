export default class NewsApi {
    constructor(config) {
        this.config = config;
    }

    getNews(data) {
        const val = data

        return fetch(` https://newsapi.org/v2/everything?language=ru&q=${val}&from=${this.config.dateFrom}&to=${this.config.dateTo}&sortBy=publishedAt&pageSize=${this.config.PAGE_SIZE}&apiKey=${this.config.API_KEY}`, {
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