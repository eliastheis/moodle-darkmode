console.log('[DarkMode] loading benutzer.js...');

// navigation
elems = document.getElementsByClassName("divBreadcrumb")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByClassName("breadcrumbLi")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("color", textColor, "important");
}
elem = document.getElementById("breadcrumbLink_startpage");
elem.style.setProperty("color", textColor, "important");
elem = document.getElementById("statusLastLink0");
elem.style.setProperty("color", textColor, "important");

elems = document.getElementsByClassName("box_noheader_bg_white")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByClassName("ListingNavigationPage");
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}

elems = document.getElementsByTagName("a");
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByTagName("p");
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("color", textColor, "important");
}
