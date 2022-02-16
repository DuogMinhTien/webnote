document.querySelector ("body").insertAdjacentHTML ("beforeend","<div style='height: 50px'></div>");

function copyFN (string) {
	navigator.clipboard.writeText(string);
	Swal.fire(
		'COPY THÀNH CÔNG',
		'',
		'success'
	);
}


//<div style="display: block;height: 125px;"></div>