console.log('[DarkMode] loading veranstaltung_suchen.js...');

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

elems = document.getElementsByClassName("boxStandard")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}

try{
    elems = document.getElementsByTagName("label")
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
    
    elems = document.getElementsByClassName("saveSearchCriteriaContainer")
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
    
    elem = document.getElementById("genericSearchMask:saveSearchCriteriaSetQuery").children[0]
    elem.style.setProperty("color", textColor, "important");
    
    elem = document.getElementById("genericSearchMask:buttonsBottom:search")
    elem.style.setProperty("background-color", backgroundColorLight, "important");
    
    elems = document.getElementsByClassName("link_information")
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("color", textColor, "important");
    }
} catch(e) {}


// ################################################


elems = document.getElementsByClassName("submit immediate")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
}

elems = document.getElementsByClassName("text_white_searchresult")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
    
}

elems = document.getElementsByClassName("tableWithBorder table")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}
for (let col = 0; col <= 10; col++) {
    elems = document.getElementsByClassName("column" + col)
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLightest, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
}
elems = document.getElementsByClassName("tableHeader")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", "#2978ae", "important");
    elems[j].style.setProperty("color", textColor, "important");
}

elems = document.getElementsByClassName("scrollerList short-waiting-behavior")
for (let j = 0; j < elems.length; j++) {
    for (let i = 0; i < elems[j].children.length; i++) {
        elems[j].children[i].style.setProperty("background-color", backgroundColor, "important");
        elems[j].children[i].style.setProperty("color", textColor, "important");
    }
}

elem = document.getElementsByClassName("activePage")[0].parentNode
for (let i = 0; i < elem.children.length; i++) {
    if (!elem.children[i].classList.contains("activePage")) {
        elem.children[i].style.setProperty("background-color", backgroundColor, "important");
        elem.children[i].children[0].style.setProperty("color", textColor, "important");
    }
}

