console.log('[DarkMode] loading belegungen.js...');

async function belegungen() {
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
        elems = document.getElementsByClassName("link_information")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLight, "important");
            elems[j].style.setProperty("color", textColor, "important");
        }
        elem = document.getElementsByClassName("form-label")[0]
        elem.style.setProperty("background-color", backgroundColorLight, "important");


        // main content
        elems = document.getElementsByClassName("box_content")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLight, "important");
            elems[j].style.setProperty("color", textColor, "important");
        }


        // teset
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
        elems = document.getElementsByClassName("listStyleIconSimple")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLightest, "important");
            for (let i = 0; i < elems[j].children.length; i++) {
                elems[j].children[i].style.setProperty("background-color", backgroundColorLightest, "important");
            }
        }

        elems = document.getElementsByClassName("listNoStyle")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLightest, "important");
            for (let i = 0; i < elems[j].children.length; i++) {
                elems[j].children[i].style.setProperty("background-color", backgroundColorLightest, "important");
            }
        }

        elems = document.getElementsByClassName("link_text")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("color", "#2978ae", "important");
        }

        elems = document.getElementsByClassName("linkImageTable")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("color", textColor, "important");
        }
        
        await sleep(1000);
    }
}

belegungen();