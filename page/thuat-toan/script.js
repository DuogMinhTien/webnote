var now_language = "vietnamese";
var list_language = ["english","vietnamese"];
var showLanguage = false;

$("#now-language").src="img/"+now_language+".png";

list_language.forEach ((item, index) => {
    $("#language-list").insertAdjacentHTML ('afterbegin','<li onclick="changeLanguage('+index+')"><img src="img/'+item+'.png"/>'+capitalizeFirstLetter(item)+'</li>');
    if (item != now_language) {
        $$(item).forEach ((item2, index2) => {
            item2.style.display = "none";
        })
    }
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$("#change-language").onclick = () => {
    if (showLanguage) {
        $("#language-list").classList.remove ('showLang');
        $("#language-list").classList.add ('hiddenLang');
        showLanguage = false;
    }
    else {
        $("#language-list").classList.remove ('hiddenLang');
        $("#language-list").classList.add ('showLang');
        showLanguage = true;
    }
}

function changeLanguage (index) {
    if (list_language[index] != now_language) {
        $$(now_language).forEach ((item, index) => {
            item.style.display = "none";
        })
        now_language = list_language[index];
        $$(now_language).forEach ((item, index) => {
            item.style.display = "initial";
        })
        $("#now-language").src="img/"+now_language+".png";
    }
    $("#language-list").classList.remove ('showLang');
    $("#language-list").classList.add ('hiddenLang');
    showLanguage = false;
}