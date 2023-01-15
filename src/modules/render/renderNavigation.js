import { createElement } from "../createElement";
import { dataNavigation } from "../navigation";


export const renderNavigation = (gender) => {
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

  for (let genderName in dataNavigation) {
    createElement('a',
      {
        className: `gender__link ${genderName === gender ? 'gender__link_active' : ''}`,
        href: `#${genderName}`,
        textContent: dataNavigation[genderName].title,
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

  dataNavigation[gender].list.forEach(category => {
    createElement('a',
      {
        className: 'category__link',
        href: `#${gender}/${category.slug}`,
        textContent: category.title,
      },
      {
        parent: createElement('li',
          {
            className: 'category__item',
          },
          {
            parent: categoryList,
          }
        ),
        cb(elem) {
          elem.addEventListener('click', () => {
            document.querySelector('.category__link_active')
            ?.classList.remove('category__link_active');

            elem.classList.add('category__link_active');
          })
        }
      }
    )
  });
}