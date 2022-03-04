const $ = document.querySelector.bind (document);
const $$ = document.querySelectorAll.bind (document);

const iFrame = $("#iFrame");
const moreWatch = $("#moreWatch");

const slider = $("#slider");

const ChooseStyleJS = $$ (".ChooseStyleJS");

var previousSlider = "MetaViewport";

const loaded = $("#loaded");

const slider_code = $$(".slider_code");

slider_code.forEach ((item) => {
	item.onclick = function () {
		ChangeFrame (item.id);
	}
});

ChooseStyleJS.forEach ((item)  => {
	item.onclick = function () {
		if (window.innerWidth <= 850) {
			openSlide ();
		}
	}
});

function ChangeFrame (string) {
	$("#"+previousSlider+".slider_active").classList.remove ("slider_active");
	$("#"+string).classList.add ("slider_active");
	previousSlider = string;
	iFrame.src = "content/"+string+"/index.html";
	moreWatch.href = "content/"+string+"/index.html";
	if (window.innerWidth <= 850) {
		closeSlide ();
	}
	loaded.classList.remove ("hidden");
}

iFrame.addEventListener ("load", ()=> {
	loaded.classList.add ("hidden");
});

function closeSlide () {
	slider.style.display = "none";
}

function openSlide () {
	slider.style.display = "initial";
}
