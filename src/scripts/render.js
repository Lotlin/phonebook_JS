import {
  createHeader,
  createLogo,
  createMain,
  createButtonGroup,
  createTable,
  createForm,
  createRow,
  createFooter,
  createCopyright,
  createImageLogo,
} from './createElements';

import mainButtons from './mainButtons';

export const renderContacts = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);

  return allRow;
};

export const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createLogo(title);
  const imgLogo = createImageLogo();
  const main = createMain();
  const buttonGroup = createButtonGroup(mainButtons);
  const table = createTable();
  const {form, overlay} = createForm();

  const footer = createFooter();
  const copyright = createCopyright(title);

  header.headerContainer.append(imgLogo, logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  footer.footerContainer.append(copyright);
  app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};
