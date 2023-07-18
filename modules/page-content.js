/* eslint-disable no-unused-vars */ /* eslint-disable no-plusplus */
const pageDisplay = (listId) => {
  const lists = document.getElementsByClassName('list');
  for (let i = 0; i < lists.length; i += 1) {
    if (lists[i].id === listId) {
      lists[i].style.display = 'block';
    } else {
      lists[i].style.display = 'none';
    }
  }
};
export default pageDisplay;
/* eslint-disable no-unused-vars */
