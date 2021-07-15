// Setar item no LocalStorage
export function setItemLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

// Pegar item pro localStorage
export function getItemLocalStorage(key) {
  let result = localStorage.getItem(key);
  return result;
}
