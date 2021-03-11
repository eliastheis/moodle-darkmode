console.log('[DarkMode] loading mod_forum.js...');

elems = document.getElementsByClassName('region_main_settings_menu_proxy');
for (let i = 0; i < elems.length; i++) {
  elems[i].style.backgroundColor = backgroundColor;
}

elems = document.getElementsByClassName('author-info align-middle');
for (let i = 0; i < elems.length; i++) {
  elems[i].style.color = textColor;
}

elems = document.getElementsByClassName('text-center');
for (let i = 0; i < elems.length; i++) {
  elems[i].style.color = textColor;
}

elems = document.getElementsByClassName('icon fa fa-ellipsis-v fa-fw');
for (let i = 0; i < elems.length; i++) {
  elems[i].style.color = textColor;
}