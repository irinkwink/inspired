import './index.html';
import './index.scss';

import { router } from './modules/router';
import { mainPage } from './modules/mainPage/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import { renderHeader } from './modules/render/renderHeader';
import { womenMainPage } from './modules/mainPage/womenMainPage';
import { menMainPage } from './modules/mainPage/menMainPage';

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

router.on('men', () => {
  menMainPage();
})

router.resolve();

// setTimeout(() => {
//   router.navigate('women');
// }, 3000)

// setTimeout(() => {
//   router.navigate('men');
// }, 6000)



