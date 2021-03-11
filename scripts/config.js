console.log('[DarkMode] loading config.js...');

const start_date = new Date();

// colors
const backgroundColor = '#181818';
const backgroundColorLight = '#282828';
const backgroundColorLightest = '#383838';
const textColor = 'white';
const borderColor = backgroundColorLightest;
const menueBorderColor = backgroundColor;
const linkColor = '#007edf';

// dashboard
const dashboardSleepTime = 10; // refresh 10 times per second
const dashboardRefreshNum = 1000; // refresh 100 times (1000*10ms = 10s)

// chat
const chatSleepTimeShort = 10;
const chatSleepTimeLong = 1000;
const chatRefreshNumOrg = 500;
let chatRefreshNum = 500;


function addDefaultDesign(elem) {
  elem.style.backgroundColor = backgroundColor;
  elem.style.color = textColor;
}

function addDefaultDesignWithBorder(elem) {
  elem.style.backgroundColor = backgroundColor;
  elem.style.color = textColor;
  elem.style.border = '1px solid ' + borderColor;
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
