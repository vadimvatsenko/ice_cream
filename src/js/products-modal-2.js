(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-products-modal-open-2]'),
      closeModalBtn: document.querySelector('[data-products-modal-close-2]'),
      modal: document.querySelector('[data-products-modal-2]'),
      body: document.querySelector('body'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();
