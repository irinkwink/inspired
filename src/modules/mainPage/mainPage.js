import { DATA } from "../const";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";

export const mainPage = (gender = 'women', category = '') => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  renderNavigation(main, gender, category);

  if (category) {
    const categoryData = DATA.navigation[gender].list.find((item) => item.slug === category)
    renderProducts(main, categoryData.title, { gender, category});
  } else {
    renderHero(main, gender);
    renderProducts(main, 'Новинки', { gender });
  }
  
}
