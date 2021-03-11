console.log('[DarkMode] loading course_view.js...');

async function darkCourse() {

  elems = document.getElementsByClassName('region_main_settings_menu_proxy')
  for (let i = 0; i < elems.length; i++) {
    addDefaultDesign(elems[i]);
  }

  // tables (tbody)
  elems = document.getElementsByTagName('tbody');
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.border = '';
    } catch (e) {}
  }

  while (true) {
  	elems = document.getElementsByClassName('activity')
    for (let i = 0; i < elems.length; i++) {
      addDefaultDesign(elems[i]);
    }
    await sleep(clickRefreshNum > 0 ? clickSleepTimeShort : clickSleepTimeLong);
  }
}

darkCourse();
