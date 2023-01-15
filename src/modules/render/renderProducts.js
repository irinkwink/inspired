import { API_URL } from '../const';
import { createElement } from '../createElement';
import { getData } from '../getData';
import { renderCard } from './renderCard';

export const renderProducts = async (main, title, params) => {
  console.log('params: ', params);

  const data = await getData(`${API_URL}/api/goods`, params);
  const productsData = 'goods' in data ? data.goods : data;
  const totalCount = 'totalCount' in data ? data.totalCount : 0;

  createElement('section',
    {
      className: 'products',
    },
    {
      parent: main,
      child: createElement('div',
        {
          className: 'container',
        },
        {
          children: [
            createElement('h2',
              {
                className: 'products__title',
                innerHTML: `${title}${totalCount ? `<sup> (${totalCount})</sup>` : ''}`,
              }
            ),
            createElement('ul',
              {
                className: 'products__list'
              },
              {
                children: productsData.map((product) => renderCard(params.gender, product)),
              }
            )
          ],
        }
      )
    }
  )
}
