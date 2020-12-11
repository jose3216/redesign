window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("sidenVises");
	if (window.matchMedia("(max-width: 500px)").matches) {
		/* The viewport is less than, or equal to, 600 pixels wide */

		const menuknap = document.querySelector("#menuknap");
		const box_menu = document.querySelector("#box_menu");
//		document.querySelector("#logo").classList.add("hidden");

		menuknap.addEventListener("click", toggle);
	} else {
		/* The viewport is greater than 600 pixels wide */
		menuknap.classList.add("hidden");
//		document.querySelector("#logo").classList.remove("hidden");

	}
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
