const checkboxes = document.querySelectorAll('input');

for (let i = 0; i < checkboxes.length; i++) {
  const checkboxArray = Array.from(checkboxes);
  checkboxArray[i].addEventListener('click', (evt) => {
    if (evt.shiftKey) {
      const nextArray = checkboxArray.slice(0, i);
      for (let j = 0; j < nextArray.length; j++) {
        nextArray[j].checked = true;
      }
    }
  });
}
