document.body.style.setProperty('display', 'inherit', 'important');


var d = new Date();
let diff = d.getMilliseconds() - start_date.getMilliseconds()

console.log('[DarkMode] finished in ' + diff + 'ms');