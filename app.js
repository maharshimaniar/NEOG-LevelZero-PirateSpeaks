var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#txt-output");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function generateUrl(text) {
    return serverUrl + "?text=" + text;
}

function clickHandler() {
    var inputText = textInput.value;

    fetch(generateUrl(inputText)).then(response => response.json()).then(json => {
        var translatedText = json.contents.translated;
        textOutput.innerHTML = translatedText;
    }).catch(errorHandler)
}

function errorHandler(error) {
    console.log("Error Occured : " + error);
}

btnTranslate.addEventListener("click", clickHandler);