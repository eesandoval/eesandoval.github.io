function changeStylesheet(sheet) {
	document.getElementById("pagestyle").setAttribute("href", sheet); 
	var styling = document.getElementById("styling");
	if (sheet == "styles/dark.css") {
		styling.setAttribute("onclick", "changeStylesheet('styles/light.css')");
	}
	else {
		styling.setAttribute("onclick", "changeStylesheet('styles/dark.css')");
	}
	styling.blur();
}

function repositorySearch() {
	var repositorySearchBar = document.getElementById("repository-search-bar");
	var filter = repositorySearchBar.value.toUpperCase();
	var repositories = document.getElementsByClassName("repository");
	for (i = 0; i < repositories.length; i++) {
		var repositoryName = repositories[i].getElementsByClassName("repository-name")[0];
		if (repositoryName.innerHTML.toUpperCase().indexOf(filter) > -1) {
			repositories[i].style.display = "";
		}
		else {
			repositories[i].style.display = "none";
		}
	}
}

function scrollToDiv(stringDiv) {
	document.getElementById(stringDiv).scrollIntoView();
	var navbarHeight = document.getElementById("navbar").clientHeight;
	window.scrollBy(0, -navbarHeight - 1);
}