// function openModal() {
//   const modal = document.getElementById('modal');
//   modal.style.display = 'flex';
// }

// function closeModal() {
//   const modal = document.getElementById('modal');
//   modal.style.display = 'none';
// }

// window.addEventListener('load', openModal);

function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';

  // Store a flag indicating that the modal has been opened
  sessionStorage.setItem('modalOpened', 'true');

  // Add a click event listener to the modal
  modal.addEventListener('click', closeModal);
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';

  // Remove the click event listener from the modal
  modal.removeEventListener('click', closeModal);
}

window.addEventListener('load', function () {
  const modalOpened = sessionStorage.getItem('modalOpened');

  if (!modalOpened) {
    openModal();
  }
});
