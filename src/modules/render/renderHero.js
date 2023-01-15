import { HERO_CONTENT } from "../const";
import { createElement } from "../createElement";

const container = createElement('div',
  {
    className: 'container',
  },
);

const content = createElement('div',
  {
    className: 'hero__content',
  },
  {
    parent: container,
  }
);

const title = createElement('h2',
  {
    className: 'hero__title',
  },
  {
    parent: content,
  }
);

const link = createElement('a',
  {
    className: 'hero__link',
    textContent: 'Перейти',
  },
  {
    parent: content,
  }
);

export const renderHero = (gender, category) => {
  const hero = document.querySelector('.hero');
  hero.append(container);

  if (category) {
    hero.style.display = 'none';
  } else {
    hero.style.display = '';
    hero.className = `hero hero_${gender}`;
    title.textContent = HERO_CONTENT[gender].title;
    link.href = `#product/${HERO_CONTENT[gender].id}`;
  }
}