
// ФУНКЦИИ ДЛЯ РАБОТЫ С ДАТАМИ


// добавляем месяц, выводим дату в нужном формате. 
// На вход принимает время с Api и преобразует его

const setDate = (str) => {

    let date = new Date(str)
    let months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октрября',
        'ноября',
        'декабря'];

    const time = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
    return time
}

// Аналогично для дней недели в Аналитике:

const setDateDiagram = (str) => {
    let date = new Date(str)
    date.getDay();
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    const string = `${days[date.getDay()]}, ${date.getDate()}`;
    return string


}


// Выводим текущий месяц в диаграмме:

const getDateMonth = (str) => {
    let monthDate = new Date(str);


    let months = [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октрябрь',
        'ноябрь',
        'декабрь'];

    const res = (months[monthDate.getMonth()]);
    return res;
}
export { setDate, setDateDiagram, getDateMonth }