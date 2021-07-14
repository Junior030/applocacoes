export default async function requestApi() {
  const END_POINT = 'https://api.mercadolibre.com/categories/MLB1459';
  const response = await fetch(END_POINT);
  const resposnseJSON = response.json();
  console.log(resposnseJSON);
};
