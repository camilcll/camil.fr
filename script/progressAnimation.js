var lang = {
    "htmlCss": "100%",
    "javascript": "80%",
    "php": "60%",
    "angular": "65%"
};

var multiply = 4;

$.each(lang, function (language, pourcent) {

    var delay = 700;

    setTimeout(function () {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});