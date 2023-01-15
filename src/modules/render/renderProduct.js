import { API_URL, DATA } from "../const";
import { createElement } from "../createElement";

export const renderProduct = (main, product) => {
  const vendorCode = createElement('p',
    {
      className: 'product__vendor-code',
      innerHTML: `
        <span class="product__text product__text_label">Артикул</span>
        <span class="product__text">${product.id}</span>
      `
    }
  );
  const color = createElement('div',
    {
      className: 'product__color',
      innerHTML: '<p class="product__text product__text_label">Цвет</p>',
    },
    {
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
          },
          {
            child: createElement('li',
              {
                className: `color color_${color.title} ${index ? '' : 'color_check'}`,
              },
              {
                cb(elem) {
                  elem.addEventListener('click', () => {
                    document.querySelector('.color_check')
                    ?.classList.remove('color_check');
       
                    elem.classList.add('color_check');
                  })
                }
              }
            )
          }
          )
        })
      }
    )
    }
  );

  const size = createElement('div',
    {
      className: 'product__size',
      innerHTML: `<p class="product__text product__text_label">Размер</p>`
    },
    {
      child: createElement('div',
        {
          className: 'product__sizes',
        },
        {
          children: product.size.map((size) => {
            return createElement('button',
              {
                className: 'product__size-btn',
                textContent: `${size}`
              },
              {
                cb(elem) {
                  elem.addEventListener('click', () => {
                    document.querySelector('.product__size-btn_active')
                    ?.classList.remove('product__size-btn_active');
       
                    elem.classList.add('product__size-btn_active');
                  })
                }
              }
            )
          })
        }
      )
    }
  );

  const description = createElement('div',
    {
      className: 'product__description',
      innerHTML: `
        <p class="product__text product__text_label">Описание</p>
        <p class="product__text product__text_description">${product.description}</p>
      `
    }
  );

  const info = createElement('div',
    {
      className: 'product__info',
    },
    {
      children: [vendorCode, color, size, description]
    }
  );

  const numberOutput = createElement('output',
    {
      className: 'product__output',
      textContent: '1',
    },
  );

  const decBtn = createElement('button',
    {
      className: 'product__btn product__btn_dec product__btn_inactive',
      textContent: '-'
    },
    {
      cb(elem) {
        elem.addEventListener('click', () => {
          numberOutput.textContent = `${+numberOutput.textContent - 1}`;
          if (numberOutput.textContent === '1') {
            elem.classList.add('product__btn_inactive')
          }
        })
      }
    }
  );

  const incBtn = createElement('button',
  {
    className: 'product__btn product__btn_inc',
    textContent: '+'
  },
  {
    cb(elem) {
      elem.addEventListener('click', () => {
        numberOutput.textContent = `${+numberOutput.textContent + 1}`;
        if (!(numberOutput.textContent === '1')) {
          decBtn.classList.remove('product__btn_inactive');
        }
      })
    }
  }
);

  const number = createElement('div',
    {
      className: 'product__number',
    },
    {
      children: [decBtn, numberOutput, incBtn]
    }
  )

  const toCartBtn = createElement('button',
    {
      className: 'product__to-cart',
      textContent: 'В корзину',
    },
    {
      cb(elem) {
        elem.addEventListener('click', () => {
          if (elem.textContent === 'В корзину') {
            elem.textContent = 'В корзине';
          } else {
            elem.textContent = 'В корзину';
          }
        })
      }
    }
  );

  const favorite = createElement('button',
    {
      className: 'product__btn-favorite favorite',
      ariaLabel: 'Добавить в избранное'
    },
    {
      cb(elem) {
        elem.addEventListener('click', () => {
          elem.classList.toggle('favorite_active');
        })
      }
    }
  );

  const control = createElement('div',
    {
      className: 'product__controls',
    },
    {
      children: [number, toCartBtn, favorite]
    }
  );


  createElement('section',
    {
      className: 'product',
    },
    {
      parent: main,
      child: createElement('div',
        {
          className: 'container',
        },
        {
          child: createElement('div',
            {
              className: 'product__container',
              innerHTML: `<img class="product__image" src="${API_URL}/${product.pic}" alt="${product.title}">`
            },
            {
              child: createElement('div',
                {
                  className: 'product__content',
                  innerHTML: `
                    <h2 class="product__title">${product.title}</h2>
                    <p class="product__price">руб ${product.price}</p>
                  `
                },
                {
                  children: [info, control]
                }
              )
            }
          )
        }
      )
    }
  )
};


