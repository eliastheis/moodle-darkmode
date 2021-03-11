console.log('[DarkMode] loading admin_tool_policy_viewall.js...');

elems = document.querySelectorAll('[scope="col"]');
for (let i = 0; i < elems.length; i++) {
  elems[i].style.color = textColor;
}

elems = document.getElementsByTagName('td');
for (let i = 0; i < elems.length; i++) {
  elems[i].style.color = textColor;
}