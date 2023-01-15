import { API_URL } from "../const";
import { getData } from "../getData";
import { renderNavigation } from "../render/renderNavigation";
import { renderProduct } from "../render/renderProduct";

export const productPage = async (gender, id) => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  renderNavigation(main, gender);

  const product = await getData(`${API_URL}/api/goods/${id}`);
  console.log('productInProductPage: ', product);

  if (product) {
    renderProduct(main, product);
  }

}
