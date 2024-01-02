import {createRow} from './createElements';
import {addContactData, removeStorage} from './serviceStorage';

export const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    formOverlay.classList.add('is-visible');
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.remove('is-visible');
    });
  };

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };

  btnAdd.addEventListener('click', openModal);

  formOverlay.addEventListener('click', e => {
    const target = e.target;

    if (target === formOverlay || target.classList.contains('close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

export const deleteControl = (btnDel, list) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.del-icon')) {
      const contact = target.closest('.contact');
      const phone = contact.querySelector('.phone').textContent;
      removeStorage(phone);
      target.closest('.contact').remove();
    }
  });
};

export const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

export const formControl = (form, list, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);
    addContactPage(newContact, list);
    addContactData(newContact);

    form.reset();
    closeModal();
  });
};

export const hoverRow = (allRow, logo) => {
  const text = logo.textContent;

  allRow.forEach(contact => {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });

    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  });
};
