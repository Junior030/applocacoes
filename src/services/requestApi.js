export async function requestApiCategories() {
  const END_POINT = 'https://api.mercadolibre.com/categories/MLB1459';
  const response = await fetch(END_POINT);
  const resposnseJSON = response.json();
  return resposnseJSON;
};

export async function requestType(category) {
  const END_POINT_ALUGUEL = `https://api.mercadolibre.com/categories/${category}`
  const categoryAluguel = await fetch(END_POINT_ALUGUEL);
  const categoryAluguelJSON = categoryAluguel.json();
  return categoryAluguelJSON;
}

export async function requestApiImovel(id) {
  const END_POINT_IMOVEL = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`;
  const response = await fetch(END_POINT_IMOVEL);
  const resposnseJSON = response.json();
  return resposnseJSON;
}

