import { HERO_CONTENT } from "../const";
import { createElement } from "../createElement";


export const renderHero = (main, gender) => {
  const hero = createElement('section',
    {
      className: `hero hero_${gender}`,
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
              className: 'hero__content',
            },
            {
              children: [
                createElement('h2',
                  {
                    className: 'hero__title',
                    textContent: HERO_CONTENT[gender].title,
                  },
                ),
                createElement('a',
                  {
                    className: 'hero__link',
                    textContent: 'Перейти',
                    href: `#${gender}/product/${HERO_CONTENT[gender].id}`,
                  },
                )
              ]
            }
          )
        }
      )
    }
  );
}