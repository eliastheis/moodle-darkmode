console.log('[DarkMode] loading user_view.js...');


// "Mitteilungen"
elems = document.getElementsByClassName('header-button-title');
for (let i = 0; i < elems.length; i++) {
	elems[i].style.color = textColor;
}

// icons
elems = document.getElementsByClassName('icon fa fa-comment fa-fw iconsmall');
for (let i = 0; i < elems.length; i++) {
	elems[i].style.color = textColor;
}
elems = document.getElementsByClassName('icon fa fa-address-card fa-fw iconsmall');
for (let i = 0; i < elems.length; i++) {
	elems[i].style.color = textColor;
}

