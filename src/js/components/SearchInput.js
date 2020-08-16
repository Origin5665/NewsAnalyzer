export default class SearchInput {
   constructor(config) {
      this.input = config.input;
      this.button = config.button;
      this.error = config.error
      this.errorElement = config.errorEl

   }

   // Меняет состояние кнопки:

   _setSubmitButtonState(button, state) {
      if (state === true) {

         button.classList.remove('input-block__button-disactive');
         button.removeAttribute('disabled');

      } else {

         button.classList.add('input-block__button-disactive');
         button.setAttribute('disabled', 'disabled');
      }
   }
   // Устанавливает слушатель инпута:

   setEventListeners() {

      this.input.addEventListener('input', (event) => this._isFieldValid(event.target))
   }


   // Если поле валидно, меняет состояние кнопки или выводим ошибку:

   _isFieldValid(input) {

      this._checkInputValidity(input) ? this._setSubmitButtonState(this.button, true) : this._setSubmitButtonState(this.button, false)
      this.errorElement.textContent = input.validationMessage;

   }
   // Проверка на валидность: 

   _checkInputValidity(input) {
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