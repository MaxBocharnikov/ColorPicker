'use strict';
(function () {
    var pickerChooserBlock = document.querySelectorAll('.picker__chooser');
    var scale = document.querySelectorAll('.picker__scale');
    var range = document.querySelectorAll('.picker__range');



    range.forEach(function (r, index) {
        var mouseDownHandler = function (downE) {
            var startX = downE.clientX;
            var mouseMoveHandler = function (moveE) {
                var shifted = moveE.clientX - startX;
                startX = moveE.clientX;
                r.style.left = r.offsetLeft + shifted + 'px';
                if (parseInt(r.style.left, 10) < 0) r.style.left = '0';
                if (parseInt(r.style.left, 10) > scale[index].offsetWidth ) r.style.left = scale[index].offsetWidth + 'px';
                changeInputValue(index); // на перемещение ранжа изменяем значение соответствующего инпута
                window.changeMainValue(); // изменянм значение главного инпута
                window.changePreview(); // изменяем цвет превью
            };
            var mouseUpHandler = function () {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };

        r.addEventListener('mousedown', mouseDownHandler)
    });

    var changeInputValue = function (index) {
        var MAX_INPUT_VALUE = 255;
        var proportionValue = parseInt(range[index].offsetLeft) / parseInt(scale[index].offsetWidth);
        window.chooserValue[index].value = Math.round(MAX_INPUT_VALUE * proportionValue);
    };

})();
