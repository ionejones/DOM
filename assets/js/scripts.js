const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';

button.addEventListener('click', changeMode);

function changeMode () {
    changeClasses();
    changeText();
 }

function changeClasses () {
  body.classList.toggle(darkModeClass);
  button.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText () {
   if (button.classList.contains(darkModeClass)) {
      h1.innerHTML = 'Dark Mode ON';
      button.innerHTML = 'Light Mode'
      return
   }

   h1.innerHTML = 'Light Mode ON';
   button.innerHTML = 'Dark Mode';
}
