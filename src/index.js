import dateAndTime from '../modules/luxon.js';
import pageDisplay from '../modules/page-content.js';
import * as script from '../modules/script.js';

document.addEventListener('DOMContentLoaded', () => {
  const list1 = document.getElementById('listbtn1');
  list1.addEventListener('click', () => {
    pageDisplay('list1');
  });
  const list2 = document.getElementById('listbtn2');
  list2.addEventListener('click', () => {
    pageDisplay('list2');
  });
  const list3 = document.getElementById('listbtn3');
  list3.addEventListener('click', () => {
    pageDisplay('list3');
  });

  dateAndTime();

  script.addBooks();
  script.removeBook();
  script.showBooks();
  script.bookForm.addEventListener('submit', script.addBooks);
  script.bookForm.addEventListener('submit', script.showBooks);
});
