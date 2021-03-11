console.log('[DarkMode] loading chat.js...');

async function darkChat() {
  while (true) {
    // categories
    elems = document.getElementsByClassName('section border-0 card')
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.backgroundColor = backgroundColorLightest;
      elems[i].style.color = textColor;
    }


    // chat-app
    elems = document.getElementsByClassName('message-app')
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.backgroundColor = backgroundColorLight;
      elems[i].style.color = textColor;
    }

    // chat-overview
    elems = document.getElementsByClassName('py-0 px-2 d-flex list-group-item list-group-item-action align-items-center')
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.backgroundColor = backgroundColorLight;
      elems[i].style.color = textColor;
    }

    // contacts
    elems = document.getElementsByClassName('list-group')
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.backgroundColor = backgroundColorLight;
      elems[i].style.color = textColor;
    }

    // messages in overview
    elems = document.getElementsByClassName('text-muted')
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.remove('text-muted');
    }

    // ### IN CHAT ###

    // dropdown-menu
    elems = document.getElementsByClassName('dropdown-menu');
    for (let j = 0; j < elems.length; j++) {
      try {
        elems[j].style.backgroundColor = backgroundColorLightest;
        elems[j].style.color = textColor;
        elems[j].style.borderColor = menueBorderColor;
      } catch (e) {}
    }

    elems = document.getElementsByClassName('bg-white')
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.remove('bg-white');
    }
    elems = document.getElementsByClassName('bg-light')
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.remove('bg-light');
    }

    // message
    elems = document.getElementsByClassName('message')
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.backgroundColor = backgroundColorLightest;
      elems[i].style.color = textColor;
    }
    elems = document.getElementsByClassName('tail position-absolute')
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.borderBottomColor = backgroundColorLightest;
    }

    // ### contacts ###

    // chats
    elems = document.getElementsByClassName('p-2 d-flex list-group-item list-group-item-action')
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.backgroundColor = backgroundColorLight;
      elems[i].style.color = textColor;
    }
    // chat-overview
    elems = document.getElementsByClassName('time')
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.color = textColor;
    }

    if (chatRefreshNum > 0) {
      chatRefreshNum--;
      await sleep(chatSleepTimeShort);
    } else {
      await sleep(chatSleepTimeLong);
    }
  }
}

darkChat();
