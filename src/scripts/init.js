import * as render from '/src/scripts/render';
import {getStorage} from '/src/scripts/serviceStorage';
import {modalControl, deleteControl, formControl, hoverRow}
  from '/src/scripts/control';

export const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);
  const {
    list,
    logo,
    btnAdd,
    btnDel,
    formOverlay,
    form,
  } = render.renderPhoneBook(app, title);

  const data = getStorage();
  // функционал
  const {closeModal} = modalControl(btnAdd, formOverlay);
  const allRow = render.renderContacts(list, data);

  hoverRow(allRow, logo);
  deleteControl(btnDel, list);
  formControl(form, list, closeModal);
};
