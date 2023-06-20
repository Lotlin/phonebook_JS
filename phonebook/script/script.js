import * as render from '../modules/render.js';
import {getStorage} from '../modules/serviceStorage.js';
import {modalControl, deleteControl, formControl, hoverRow}
  from '../modules/control.js';

{
  const init = (selectorApp, title) => {
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

  window.phoneBookInit = init;
}
