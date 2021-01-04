import { importData } from './app.js';


document.querySelector('#data-import')
.addEventListener('click', function() {
  importData();
});