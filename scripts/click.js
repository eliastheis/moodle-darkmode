console.log('[DarkMode] loading click.js...');

document.body.onclick = function() {
  // console.log('clicked');
  chatRefreshNum = chatRefreshNumOrg;
};