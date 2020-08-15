export default class GithubApi {
    constructor(config) {
        this.config = config
    }
    getCommits() {

        return fetch(` https://api.github.com/repos/${this.config.login}/${this.config.rep}/commits`, {
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