console.log('[DarkMode] loading leistungen.js...');

// navigation
elems = document.getElementsByClassName("divBreadcrumb")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByClassName("breadcrumbLi")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("color", textColor, "important");
}
elem = document.getElementById("breadcrumbLink_startpage")
elem.style.setProperty("color", textColor, "important");
elem = document.getElementById("breadcrumbLink0")
elem.style.setProperty("color", textColor, "important");
elem = document.getElementById("statusLastLink1")
elem.style.setProperty("color", textColor, "important");