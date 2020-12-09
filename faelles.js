window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("sidenVises");
	const menuknap = document.querySelector("#menuknap");
	const box_menu = document.querySelector("#box_menu");

	menuknap.addEventListener("click", toggle);
}

function toggle() {
	console.log("toggle");
	box_menu.classList.toggle("toggle");
	box_menu.classList.remove("hidden");

	let erSkjult = document.querySelector("#box_menu").classList.contains("toggle");

	if (erSkjult == true) {
		document.querySelector("#menuknap").text = "☰";
	} else {
		document.querySelector("#menuknap").text = "X";
	}
}
