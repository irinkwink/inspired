import photo from '../../img/product01.jpg';

export const renderProducts = () => {
  const products = document.querySelector('.products');



  products.innerHTML = `
    <div class="container">
      <h2 class="products__title">Новинки</h2>
      <ul class="products__list">
        <li class="products__item">
          <article class="product">
            <a href="#" class="product__link">
              <img src="${photo}" alt="Бюстгальтер-Балконет Paris из Переработанной Микрофибры" class="product__image">
              <h3 class="product__title">Бюстгальтер-Балконет Paris из Переработанной Микрофибры</h3>
            </a>
            <div class="product__row">
              <p class="product__price">руб 2299</p>
              <button class="product__btn-favorite" aria-label="Добавить в избранное">
              </button>
            </div>
            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_red color_check"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>
        <li class="products__item">
          <article class="product">
            <a href="#" class="product__link">
              <img src="${photo}" alt="Бюстгальтер-Балконет Paris из Переработанной Микрофибры" class="product__image">
              <h3 class="product__title">Бюстгальтер-Балконет Paris из Переработанной Микрофибры</h3>
            </a>
            <div class="product__row">
              <p class="product__price">руб 2299</p>
              <button class="product__btn-favorite" aria-label="Добавить в избранное">
              </button>
            </div>
            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_red color_check"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>
        <li class="products__item">
          <article class="product">
            <a href="#" class="product__link">
              <img src="${photo}" alt="Бюстгальтер-Балконет Paris из Переработанной Микрофибры" class="product__image">
              <h3 class="product__title">Бюстгальтер-Балконет Paris из Переработанной Микрофибры</h3>
            </a>
            <div class="product__row">
              <p class="product__price">руб 2299</p>
              <button class="product__btn-favorite" aria-label="Добавить в избранное">
              </button>
            </div>
            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_red color_check"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>
        <li class="products__item">
          <article class="product">
            <a href="#" class="product__link">
              <img src="${photo}" alt="Бюстгальтер-Балконет Paris из Переработанной Микрофибры" class="product__image">
              <h3 class="product__title">Бюстгальтер-Балконет Paris из Переработанной Микрофибры</h3>
            </a>
            <div class="product__row">
              <p class="product__price">руб 2299</p>
              <button class="product__btn-favorite" aria-label="Добавить в избранное">
              </button>
            </div>
            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_red color_check"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>
        <li class="products__item">
          <article class="product">
            <a href="#" class="product__link">
              <img src="${photo}" alt="Бюстгальтер-Балконет Paris из Переработанной Микрофибры" class="product__image">
              <h3 class="product__title">Бюстгальтер-Балконет Paris из Переработанной Микрофибры</h3>
            </a>
            <div class="product__row">
              <p class="product__price">руб 2299</p>
              <button class="product__btn-favorite" aria-label="Добавить в избранное">
              </button>
            </div>
            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_red color_check"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>

      </ul>
    </div>
  `;
}