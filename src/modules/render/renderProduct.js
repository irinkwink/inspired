import { API_URL, DATA } from "../const"
import { createElement } from "../createElement"

export const renderProduct = (product) => {
  return createElement('li',
    {
      className: 'products__item',
    }, {
      child: createElement('article',
        {
          className: 'product',
          innerHTML: `
            <a href="#product/${product.id}" class="product__link">
              <img class="product__image" src="${API_URL}/${product.pic}" alt="${product.title}">
              <h3 class="product__title">${product.title}</h3>
            </a>
            <div class="product__row">
              <p class="product__price">руб ${product.price}</p>
              <button 
                class="product__btn-favorite"
                aria-label="Добавить в избранное"
                data-id=${product.id}>
              </button>
            </div>
          `
        }, {
          child: createElement('ul',
            {
              className: 'product__color-list'
            },
            {
              children: product.colors.map((colorId, index) => {
                const color = DATA.colors.find((item) => item.id === colorId)
                return createElement('li',
                {
                  className: 'product__color-item',
                  innerHTML: `
                    <div class="color color_${color.title} ${index ? '' : 'color_check'}"></div>
                  `
                }
                )
              })
            }
          )
        }
      )
    }
  )
}