function changeStylesheet(sheet) {
	document.getElementById("pagestyle").setAttribute("href", sheet); 
	var styling = document.getElementById("styling");
	if (sheet == "styles/dark.css") {
		styling.innerText = "Light Theme";
		styling.setAttribute("onclick", "changeStylesheet('styles/light.css')");
	}
	else {
		styling.innerText = "Dark Theme";
		styling.setAttribute("onclick", "changeStylesheet('styles/dark.css')");
	}
	styling.blur();
}