console.log('[DarkMode] loading studienservice.js...');

async function studienservice(){

    // navigation
    elems = document.getElementsByClassName("divBreadcrumb");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("color", textColor, "important");
    }
    elems = document.getElementsByClassName("breadcrumbLi");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("color", textColor, "important");
    }
    elem = document.getElementById("breadcrumbLink_startpage");
    elem.style.setProperty("color", textColor, "important");
    elem = document.getElementById("breadcrumbLink0");
    elem.style.setProperty("color", textColor, "important");
    elem = document.getElementById("statusLastLink1");
    elem.style.setProperty("color", textColor, "important");


    // header
    elems = document.getElementsByClassName("tabButton");
    for (let j = 0; j < elems.length; j++) {
        if (!elems[j].classList.contains("active")) {
            elems[j].style.setProperty("background-color", backgroundColorLight, "important");
            elems[j].style.setProperty("color", textColor, "important");
        }
    }

    try{
        elem = document.getElementById("studyserviceForm:studienstatus").children[0].children[0];
        elem.style.setProperty("background-color", backgroundColorLightest, "important");
        elem.style.setProperty("color", textColor, "important");
    } catch(e) {}

    elems = document.getElementsByClassName("boxStandard")
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }


    elems = document.getElementsByClassName("listRowOdd");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLightest, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }

    elems = document.getElementsByClassName("job-configuration-buttons-item job");
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
}

studienservice();
