function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

// Add listener on Start button
refs.start.addEventListener('click', onClickBgChange);
let btnStatus = true;
let intervalId = null;

// The function change background color(randomly) of HTMl's body and disable "Start" button.
function onClickBgChange() {
  const changeBgColor = () =>
    (document.querySelector('body').style.backgroundColor =
      getRandomHexColor());

  intervalId = setInterval(changeBgColor, 1000);
  if (btnStatus) {
    refs.start.setAttribute('disabled', 'disabled');
    btnStatus = false;
  }
  //   document.querySelector('body').style.backgroundColor = getRandomHexColor();
}

// Add listener on Stop button
refs.stop.addEventListener('click', onClickStopBgChange);

//The function suspend change color of Html's body and enable "Start" button.
function onClickStopBgChange() {
  //
  clearInterval(intervalId);

  if (!btnStatus) {
    refs.start.removeAttribute('disabled');
    btnStatus = true;
  }
}
