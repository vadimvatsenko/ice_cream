(() => {
    const refs = {
      openModalBtn: document.querySelector('[products-modal-open-3]'),
      closeModalBtn: document.querySelector('[products-modal-close-3]'),
      modal: document.querySelector('[products-modal-3]'),
      body: document.querySelector('body'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();
