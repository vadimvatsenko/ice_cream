

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-header-down-open]'),
    closeModalBtn: document.querySelector('[data-modal-header-down-close]'),
    modal: document.querySelector('[data-hodal-header-down]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();



