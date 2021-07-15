// Setar item no LocalStorage
export function setItemLocalStorage(key, value) {
  let result = value;
  result = JSON.stringify(value);
  localStorage.setItem(key, result);
}

// Pegar item pro localStorage
export function getItemLocalStorage(key) {
  let result = localStorage.getItem(key);
  result = JSON.parse(result);
  return result;
}
