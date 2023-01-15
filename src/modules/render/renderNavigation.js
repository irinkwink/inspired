import { DATA } from "../const";
import { createElement } from "../createElement";


export const renderNavigation = (gender, category) => {
  const navigation = document.querySelector('.navigation');
  navigation.innerHTML = '';

  const container = createElement('div', {
    className: 'container navigation__container',
  }, {
    parent: navigation,
  });

  const genderList = createElement('ul', {
    className: 'navigation__gender gender',
  }, {
    parent: container,
  });

  const categoryList = createElement('ul', {
    className: 'navigation__category category',
  }, {
    parent: container,
  });

  for (let genderName in DATA.navigation) {
    createElement('a',
      {
        className: `gender__link ${genderName === gender ? 'gender__link_active' : ''}`,
        href: `#/${genderName}`,
        textContent: DATA.navigation[genderName].title,
      },
      {
        parent: createElement('li',
          {
            className: 'gender__item',
          },
          {
            parent: genderList,
          }
        )
      }
    )
  }

  DATA.navigation[gender].list.forEach(categoryItem => {
    createElement('a',
      {
        className: `category__link ${category === categoryItem.slug ? 'category__link_active' : ''}`,
        href: `#/${gender}/${categoryItem.slug}`,
        textContent: categoryItem.title,
      },
      {
        parent: createElement('li',
          {
            className: 'category__item',
          },
          {
            parent: categoryList,
          }
        )
      }
    )
  });
}