import { API_URL, DATA } from "../const"
import { createElement } from "../createElement"

export const renderCard = (gender, product) => {
  const favorite = createElement('button',
    {
      className: 'card__btn-favorite favorite',
      ariaLabel: 'Добавить в избранное',
    },
    {
      cb(elem) {
        elem.addEventListener('click', () => {
          elem.classList.toggle('favorite_active');
        })
      }
    }
  );

  return createElement('li',
    {
      className: 'products__item',
    }, {
      child: createElement('article',
        {
          className: 'card',
          innerHTML: `
            <a href="#${gender}/product/${product.id}" class="card__link">
              <img class="card__image" src="${API_URL}/${product.pic}" alt="${product.title}">
              <h3 class="card__title">${product.title}</h3>
            </a>
          `
        }, {
          children: [
            createElement('div',
              {
                className: 'card__row'
              },
              {
                children: [
                  createElement('p',
                    {
                      className: 'card__price',
                      textContent: `руб ${product.price}`,
                    },
                  ), favorite
                ]
              }
            ),
            createElement('ul',
            {
              className: 'card__color-list'
            },
            {
              children: product.colors.map((colorId, index) => {
                const color = DATA.colors.find((item) => item.id === colorId)
                return createElement('li',
                {
                  className: 'card__color-item',
                  innerHTML: `
                    <div class="color color_${color.title} ${index ? '' : 'color_check'}"></div>
                  `
                }
                )
              })
            }
          )
          ]
        }
      )
    }
  )
}
