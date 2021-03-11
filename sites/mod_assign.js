console.log('[DarkMode] loading mod_assign.js...');



elems = document.getElementsByClassName('cell');
for (let j = 0; j < elems.length; j++) {
  try {
    addDefaultDesignWithBorder(elems[j]);
  } catch (e) {}
}

elems = document.getElementsByClassName('criterion');
for (let j = 0; j < elems.length; j++) {
  try {
    addDefaultDesignWithBorder(elems[j]);
  } catch (e) {}
}

elems = document.getElementsByClassName('description');
for (let j = 0; j < elems.length; j++) {
  try {
    addDefaultDesignWithBorder(elems[j]);
  } catch (e) {}
}

elems = document.getElementsByClassName('fileuploadsubmissiontime');
for (let j = 0; j < elems.length; j++) {
  try {
    addDefaultDesign(elems[j]);
  } catch (e) {}
}


elems = document.getElementsByClassName('visibleifjs');
for (let j = 0; j < elems.length; j++) {
  try {
    elems[j].childNodes[0].style.color = linkColor;
  } catch (e) {}
}
