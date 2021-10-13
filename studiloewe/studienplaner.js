console.log('[DarkMode] loading studienplaner.js...');

async function studienplaner() {
    while (true) {
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
        elems = document.getElementsByClassName("textStudyplanner")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLight, "important");
            elems[j].style.setProperty("color", textColor, "important");
        }
        elem = document.getElementById("enrollTree:switchView")
        elem.style.setProperty("background-color", backgroundColorLight, "important");
        elems = document.getElementsByClassName("fieldsetSelectStudyTree")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLight, "important");
            elems[j].style.setProperty("color", textColor, "important");
        }
        elems = document.getElementsByClassName("link_information")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLight, "important");
            elems[j].style.setProperty("color", textColor, "important");
        }

        // tree
        for (let level=0; level <= 6; level++) {
            elems = document.getElementsByClassName("treeTableCellLevel" + level)
            for (let j = 0; j < elems.length; j++) {
                elems[j].style.setProperty("background-color", backgroundColorLight, "important");
                elems[j].style.setProperty("color", textColor, "important");
            }
        }

        for (let i = 0; i < document.styleSheets.length; i++) {
            for (let j = 0; j < document.styleSheets[i].cssRules.length; j++) {
                if ("".concat(document.styleSheets[i].cssRules[j].cssText).includes("border")) {
                    elem = document.styleSheets[i].cssRules[j].style
                    if (typeof elem !== 'undefined'){
                        elem.removeProperty('border');
                        elem.setProperty("border-color", backgroundColorLightest, "important");
                        
                    }
                }
            }
        }

        elems = document.getElementsByClassName("listNoStyle")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLight, "important");
        }

        await sleep(1000)
    }
}

studienplaner()