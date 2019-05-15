var preview = document.querySelector('.picker__preview');
var mainValue = document.querySelector('.picker__input--main');
var chooserValue = document.querySelectorAll('.picker__input--chooser');
var scale = document.querySelectorAll('.picker__scale');
var range = document.querySelectorAll('.picker__range');

// Изменяем значение главного инпута
var changeMainValue = function () {
    var mainVal = '#';
    chooserValue.forEach(function (chooser) {
        var chooserValue = parseInt(chooser.value, 10);
        var hexValue = chooserValue.toString(16);
        if (hexValue < 10) {
            hexValue = '0' + hexValue;
        }
        mainVal+=hexValue;
    });
    mainValue.setAttribute('value', mainVal);
};

// Изменяем цвет превью
var changePreview = function () {
  preview.style.background = mainValue.value;
};

// Обработчик на изменения в одном из инпутов установки цвета
var chooserChangeHandler = function (chooser) {
  chooser.addEventListener('change', function (e) {
      chooser.setAttribute('value', e.target.value);
      changeMainValue();
      changePreview();
  });
};

// На каждый инпут установки цвета вызываем обработчик
chooserValue.forEach(function (chooser, index) {
    chooserChangeHandler(chooser, index);
});

// На изменение основого инпута
mainValue.addEventListener('change', function (e) {
    mainValue.setAttribute('value', e.target.value);
    changePreview();
});
