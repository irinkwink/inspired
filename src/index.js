import './index.html';
import './index.scss';

import { router } from './modules/router';
import { mainPage } from './modules/mainPage/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import { renderHeader } from './modules/render/renderHeader';
import { womenMainPage } from './modules/mainPage/womenMainPage';
import { menMainPage } from './modules/mainPage/menMainPage';
import { getData } from './modules/getData';
import { API_URL, DATA } from './modules/const';
import { createCssColors } from './modules/createCssColors';

const init = async () => {
  DATA.navigation = await getData(`${API_URL}/api/categories`);
  console.log('DATA.navigation: ', DATA.navigation);
  DATA.colors = await getData(`${API_URL}/api/colors`);

  createCssColors(DATA.colors);

  router.on('*', () => {
    renderHeader();
    renderFooter();
  })
  
  router.on('/', () => {
    mainPage();
  })
  
  router.on('women', () => {
    womenMainPage();
  })

  router.on('women/:category', ({ data }) => {
    womenMainPage(data.category);
  })

  router.on('men', () => {
    menMainPage();
  })

  router.on('men/:category', ({ data }) => {
    menMainPage(data.category);
  })
  
  router.resolve();
}

init();




