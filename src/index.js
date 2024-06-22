import './styles.css';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = 'supo ';
   element.classList.add('t')

   return element;
 }

 document.body.appendChild(component());