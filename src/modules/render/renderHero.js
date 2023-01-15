import { createElement } from "../createElement";

const content = {
  women: 
    {
      title: 'Новая коллекция Бюстгальтер-балконет',
      link: 'bras'
    }, 
  men:
    {
      title: 'Боксеры из новой коллекции',
      link: 'underwear',
    }
};

export const renderHero = (gender) => {
  const hero = document.querySelector('.hero');
  hero.innerHTML = '';

  if (gender) {
    hero.style.display = '';
    hero.className = `hero hero_${gender}`;
    createElement('div',
      {
        className: 'container',
      },
      {
        parent: hero,
        child: createElement('div',
          {
            className: 'hero__content',
          },
          {
            children: [
              createElement('h2',
                {
                  className: 'hero__title',
                  textContent: content[gender].title,
                }
              ),
              createElement('a',
              {
                className: 'hero__link',
                href: `#${gender}/${content[gender].link}`,
                textContent: 'Перейти',
              }
            )
            ]
          }
        )
      }
    );
  } else {
    hero.style.display = 'none';
  }
}