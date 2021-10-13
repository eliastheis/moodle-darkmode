console.log('[DarkMode] loading main.js...');

// body
document.body.style.backgroundColor = backgroundColor;
document.body.style.color = textColor;



// general stuff
tags = ["input", "label", "ul"]
for (let i = 0; i < tags.length; i++) {
    elems = document.getElementsByTagName(tags[i])
    for (let j = 0; j < elems.length; j++) {
        elems[j].style.setProperty("background-color", backgroundColor, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
}
elems = document.getElementsByTagName("label")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLightest, "important");
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByTagName("button")
for (let j = 0; j < elems.length; j++) {
    //elems[j].style.setProperty("background-color", backgroundColorLightest, "important");
    elems[j].style.setProperty("color", textColor, "important");
}


// menu
elems = document.getElementsByClassName("topMenuLink")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByClassName("topMenuLinkHighlighted")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", buw_green, "important");
    elems[j].style.setProperty("color", "black", "important");
}
elems = document.getElementsByClassName("iconfont-house")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", "white", "important");
}
elems = document.getElementsByClassName("subMenuLink")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("color", textColor, "important");
}



// footer
elems = document.getElementsByClassName("divfoot_navigation_portal")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByClassName("footerLinks")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}

elems = document.getElementsByClassName("sLink")
for (let j = 0; j < elems.length; j++) {
    if (elems[j].classList.contains("portalInfoBoxLink")) {

    } else if (elems[j].classList.contains("short-waiting-behavior")) {

    } else if (elems[j].classList.contains("waiting-behavior")) {

    } else {
        elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        elems[j].style.setProperty("color", textColor, "important");
    }
}



// container
elems = document.getElementsByClassName("box_green_bg_grey")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByClassName("colhead")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByClassName("iconfont-resultset_next")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColor, "important");
    elems[j].style.setProperty("color", textColor, "important");
}
elems = document.getElementsByClassName("timelineItem")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}


// header icons
document.getElementById("collapsibleHeaderActionFrom:userInformationCenter").style.setProperty("background-color", buw_green, "important");
document.getElementById("userInformationCenterElement").style.setProperty("background-color", buw_green, "important");
