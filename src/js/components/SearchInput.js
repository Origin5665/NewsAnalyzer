export default class SearchInput {
    constructor(config) {
        this.input = config.input;
        this.button = config.button;
        this.error = config.error
        this.errorElement = config.errorEl

    }

    setSubmitButtonState(button, state) {
        if (state === true) {

            button.classList.remove('input-block__button-disactive');
            button.removeAttribute('disabled');

        } else {

            button.classList.add('input-block__button-disactive');
            button.setAttribute('disabled', 'disabled');
        }
    }

    setEventListeners() {

        this.input.addEventListener('input', (event) => this.isFieldValid(event.target))
    }



    isFieldValid(input) {

        this.checkInputValidity(input) ? this.setSubmitButtonState(this.button, true) : this.setSubmitButtonState(this.button, false)
        this.errorElement.textContent = input.validationMessage;

    }

    checkInputValidity(input) {
        input.setCustomValidity('');

        if (input.validity.valueMissing) {
            input.setCustomValidity('Поле не должно быть пустым');
            return false;
        }
        if (input.validity.tooShort || input.validity.tooLong) {
            input.setCustomValidity('Не менее двух символов');
            return false
        }
        return input.checkValidity();
    }






}