export const LS_DATA = {}

export const loadLSData = () => {
  const jsonData = localStorage.getItem('inspired-store');

  if (jsonData) {
    const data = JSON.parse(jsonData);
    LS_DATA.cart = cart in data ? data.cart : [];
    LS_DATA.favorites = favorites in data ? data.favorites : [];
  }
}

const saveLSData = () => {
  localStorage.getItem('inspired-store', JSON.stringify(LS_DATA));
}

export const saveToFavorites = (id) => {
  LS_DATA.favorites.push(id)
  saveLSData();
}

export const saveProductToCart = ({id, number, color}) => {
  LS_DATA.cart.push({
    id: id,
    number: number,
    color: color,
  });
  saveLSData();
}



