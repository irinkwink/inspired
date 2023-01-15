import { DATA } from "../const";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";

export const mainPage = (gender = 'women', category = '') => {
  renderNavigation(gender, category);
  renderHero(gender, category);

  if (category) {
    const categoryData = DATA.navigation[gender].list.find((item) => item.slug === category)
    renderProducts(categoryData.title, { gender, category});
  } else {
    renderProducts('Новинки', { gender });
  }
  
}
