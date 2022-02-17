const $$ = document.querySelectorAll.bind (document);

document.querySelector ("body").insertAdjacentHTML ("beforeend","<div style='height: 50px'></div>");

const codeBlock = $$ (".code-block");

const CodeFrame =  $$ ("code");

var SaveCode = [];

CodeFrame.forEach ((item) => {
	SaveCode.push (item.textContent);
	if (item.classList.contains ("language-css")) {
		item.innerHTML = replaceAll (item.innerHTML,'[tab_js]','&emsp;&emsp;&emsp;&emsp; ');
	}
	else
		item.innerHTML = replaceAll (item.innerHTML,'[tab_js]','&emsp;&emsp;&emsp;&emsp;');
})

codeBlock.forEach ((item) => {
	item.insertAdjacentHTML ("beforebegin","<div class='code-toolbar'></div>");
})


const codeToolbar = $$ (".code-toolbar");

codeToolbar.forEach ((item, index) => {
	item.appendChild(codeBlock[index]);
})

codeBlock.forEach ((item) => {
	item.insertAdjacentHTML ("beforebegin","<div class='pseudoMac'></div>");
	item.insertAdjacentHTML ("afterbegin","<button class='copy'>Copy</button>");
})

const Copy = $$ (".copy");

function copyFN (string) {
	navigator.clipboard.writeText(replaceAll (string,'[tab_js]','	'));
}

Copy.forEach ((item, index) => {
	item.onclick = ()  => {
		copyFN (SaveCode[index]);
		item.textContent = "Copied";
		setTimeout (() => {
			item.textContent = "Copy";
		},1000);
	}
})

function replaceAll (text, search, replace) {
    return text.split(search).join(replace);
}
//<div style="display: block;height: 125px;"></div>
