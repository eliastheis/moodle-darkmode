console.log('[DarkMode] loading click.js...');

async function click() {
  document.body.onclick = function() {
    // console.log('clicked');
    clickRefreshNum = clickRefreshNumOrg;
  };

  while (true) {
    if (clickRefreshNum > 0) {
      clickRefreshNum--;
      await sleep(clickSleepTimeShort);
    } else {
      await sleep(clickSleepTimeLong);
    }
  }
}

click();
