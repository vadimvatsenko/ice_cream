$('.number .number_controls > div').on('click', function() {
  var input = $(this).closest('.number').find('input'); // инпут
  var value = parseInt(input.val()) || 0; // получаем value инпута или 0
  if ($(this).hasClass('nc-minus')) {
    value = value - 1 || value >= 0; // вычитаем из value 1
  }
  if ($(this).hasClass('nc-plus')) {
    value = value + 1; // прибавляем к value 1
  }
  input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
});