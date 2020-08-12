export default class DataStorage {


    addStorage(newsArray) {
        localStorage.setItem('news', JSON.stringify(newsArray))
    }

    addTotalStorage(number) {
        localStorage.setItem('total', number)
    }

    getStorage() {
        this.array = JSON.parse(localStorage.getItem('news'));

        return this.array;

    }
    clearStorage() {
        localStorage.clear('news')
    }





}