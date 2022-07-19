(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-products-modal-open-1]'),
      closeModalBtn: document.querySelector('[data-products-modal-close-1]'),
      modal: document.querySelector('[data-products-modal-1]'),
      body: document.querySelector('body'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();
  