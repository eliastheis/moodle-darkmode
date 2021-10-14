console.log('[DarkMode] loading detailansicht.js...');

async function detailansicht(){
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
    
    // header
    elems = document.getElementsByClassName("box_noheader_bg_yellow dataBox dialogHeaderDataBox")
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
    
    // main content
    elems = document.getElementsByClassName("box_standard_without_headline");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
    elems = document.getElementsByClassName("inactive tabButton   immediate");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLightest, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
    elems = document.getElementsByClassName("courseDetailedInformationBackground");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
    elems = document.getElementsByClassName("listStyleIconSimple");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLight);
        elems[j].style.setProperty("color", textColor, "important");
    }
    // cards
    elems = document.getElementsByClassName("boxStandard");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
    
    // Zuordnungsspezifische Leistungsinformationen
    elems = document.getElementsByClassName("tableWithBorder table");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
    for (let col = 0; col <= 10; col++) {
        elems = document.getElementsByClassName("column" + col);
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLightest, "important");
            elems[j].style.setProperty("color", textColor, "important");
        }
    }
    elems = document.getElementsByClassName("tableHeader");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", "#2978ae", "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
}

detailansicht();
