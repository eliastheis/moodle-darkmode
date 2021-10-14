console.log('[DarkMode] loading start.js...');

async function start() {
    for (let countdown = 100; countdown > 0; countdown--) {
        elems = document.getElementsByClassName("boxStandard")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLight, "important");
            elems[j].style.setProperty("color", textColor, "important");
        }
        elems = document.getElementsByClassName("ListingNavigationPage mailMenu")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("background-color", backgroundColorLight, "important");
            elems[j].style.setProperty("color", textColor, "important");
        }
        elems = document.getElementsByTagName("a")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("color", textColor, "important");
        }
        elems = document.getElementsByTagName("span")
        for (let j = 0; j < elems.length; j++) {
            elems[j].style.setProperty("color", textColor, "important");
        }

        await sleep(100);
    }
}


start()

elems = document.getElementsByClassName("loginStartPage")
for (let j = 0; j < elems.length; j++) {
    elems[j].style.setProperty("background-color", backgroundColorLight, "important");
    elems[j].style.setProperty("color", textColor, "important");
}