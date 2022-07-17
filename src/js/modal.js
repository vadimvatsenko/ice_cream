

(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open]'),
    closeModalBtn: document.querySelector('[modal-close]'),
    modal: document.querySelector('[header-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
