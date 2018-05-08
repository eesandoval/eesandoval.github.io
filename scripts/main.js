function changeStylesheet(sheet) {
	document.getElementById("pagestyle").setAttribute("href", sheet); 
	if (sheet == "styles/dark.css") {
		document.getElementById("styling").innerText = "Light Theme";
		document.getElementById("styling").setAttribute("onclick", "changeStylesheet('styles/light.css')");
	}
	else {
		document.getElementById("styling").innerText = "Dark Theme";
		document.getElementById("styling").setAttribute("onclick", "changeStylesheet('styles/dark.css')");
	}
}