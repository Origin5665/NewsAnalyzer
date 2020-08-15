export default class DataStorage {

    addRequestStorage(request) {
        localStorage.setItem('request', request)
    }

    getRequestStorage() {
        this.request = localStorage.getItem('request')
        return this.request;
    }


    addStorage(newsArray) {
        localStorage.setItem('news', JSON.stringify(newsArray))
    }

    addTotalStorage(number) {
        localStorage.setItem('total', number)
    }

    getTotalStorage() {
        this.num = localStorage.getItem('total')
        return this.num;
    }

    getStorage() {
        this.array = JSON.parse(localStorage.getItem('news'));

        return this.array;

    }
    clearStorage() {
        localStorage.clear('news')
    }





}