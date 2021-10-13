console.log('[DarkMode] loading stundenplan.js...');



document.getElementById("breadcrumbLink_startpage").style.setProperty("color", textColor, "important");
document.getElementById("breadcrumbLink0").style.setProperty("color", textColor, "important");
document.getElementById("statusLastLink1").style.setProperty("color", textColor, "important");
document.getElementById("hisinoneTitle").style.setProperty("color", textColor, "important");




tags = ["li"]
for (let i = 0; i < tags.length; i++) {
    elems = document.getElementsByTagName(tags[i])
    for (let j = 0; j < elems.length; j++) {
        if (elems[j].classList.contains("listBullet")) {

        }else if (elems[j].classList.contains("singleblock")) {
            elems[j].style.setProperty("background-color", backgroundColorLightest, "important");
        } else {
            elems[j].style.setProperty("background-color", backgroundColor, "important");
        }
        
        elems[j].style.setProperty("color", textColor, "important");
    }
}

elems = document.getElementsByClassName("scheduleContainer")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByClassName("boxStandard")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByClassName("legendEntry")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}

// Montag
elem = document.getElementById("plan:schedule:scheduleColumn:0:showOnlyOneDay")
elem.style.setProperty("background-color", backgroundColorLight, "important");
// Dienstag
elem = document.getElementById("plan:schedule:scheduleColumn:1:showOnlyOneDay")
elem.style.setProperty("background-color", backgroundColorLight, "important");
// Mittwoch
elem = document.getElementById("plan:schedule:scheduleColumn:2:showOnlyOneDay")
elem.style.setProperty("background-color", backgroundColorLight, "important");
// Donnerstag
elem = document.getElementById("plan:schedule:scheduleColumn:3:showOnlyOneDay")
elem.style.setProperty("background-color", backgroundColorLight, "important");
// Freitag
elem = document.getElementById("plan:schedule:scheduleColumn:4:showOnlyOneDay")
elem.style.setProperty("background-color", backgroundColorLight, "important");
