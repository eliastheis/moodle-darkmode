console.log('[DarkMode] loading dashboard.js...');

async function darkDashboard() {
  courseLength = document.getElementsByClassName('course-info-container').length;
  timelineLength = document.getElementsByClassName('list-group-item flex-column py-2 pl-0 pr-0 border-0').length;


  await sleep(1000);
  elems = document.getElementsByClassName('course-info-container');
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColor;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = borderColor;
    } catch (e) {}
  }

  // timeline
  elems = document.getElementsByClassName('list-group-item flex-column py-2 pl-0 pr-0 border-0')
  for (let j = 0; j < elems.length; j++) {
    try {
      addDefaultDesign(elems[j]);
    } catch (e) {}
  }


  // update if change (not final, pls improve)
  tmp = document.getElementsByClassName('course-info-container')[4].style.backgroundColor
  while (true) {
    await sleep(100);
    elems = document.getElementsByClassName('course-info-container');
    for (let j = 0; j < elems.length; j++) {
      try {
        elems[j].style.backgroundColor = backgroundColor;
        elems[j].style.color = textColor;
        elems[j].style.borderColor = borderColor;
      } catch (e) {}
    }
    elems = document.getElementsByClassName('card-footer dashboard-card-footer border-0 bg-white');
    for (let j = 0; j < elems.length; j++) {
      elems[j].style.backgroundColor = backgroundColor;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = borderColor;
      try {
        elems[j].classList.remove('bg-white');
      } catch (e) {}
    }
    elems = document.getElementsByClassName('progress');
    for (let j = 0; j < elems.length; j++) {
      try {
        elems[j].classList.remove('border');
      } catch (e) {}
    }

    // timeline
    elems = document.getElementsByClassName('list-group-item flex-column py-2 pl-0 pr-0 border-0')
    for (let j = 0; j < elems.length; j++) {
      try {
        addDefaultDesign(elems[j]);
      } catch (e) {}
    }
  }
}

darkDashboard();
