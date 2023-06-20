export const getStorage = (key = 'phoneBook') =>
  JSON.parse(localStorage.getItem(key)) || [];

export const setStorage = (valueObject, key = 'phoneBook') => {
  localStorage.setItem(key, JSON.stringify(valueObject));
};

export const removeStorage = phone => {
  const phoneBook = getStorage();
  const newPhoneBook = phoneBook.filter(item => item.phone !== phone);
  setStorage(newPhoneBook);
};

export const addContactData = contact => {
  const phoneBook = getStorage();
  phoneBook.push(contact);
  setStorage(phoneBook);
};
