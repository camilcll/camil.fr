var lang = {
    "htmlCss": "95%",
    "javascript": "80%",
    "php": "60%",
    "sql": "80%",
    "mysql":"80%",
    "bash" : "70%",
    "cpp" : "60%",
    "py" : "75%",
    "adm" : "85%",
    "c" : "75%"
};

var multiply = 4;

$.each(lang, function (language, pourcent) {

    var delay = 700;

    setTimeout(function () {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});