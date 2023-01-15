import photo from '../../img/product01.jpg';
import { API_URL, DATA } from '../const';
import { createElement } from '../createElement';
import { getData } from '../getData';
import { renderProduct } from './renderProduct';

export const renderProducts = async(title, params) => {
  console.log('params: ', params);
  const products = document.querySelector('.products');
  products.innerHTML = '';

  const data = await getData(`${API_URL}/api/goods`, params);
  console.log('data: ', data);
  const productsData = 'goods' in data ? data.goods : data;
  const totalCount = 'totalCount' in data ? data.totalCount : 0;
  console.log('productsData: ', productsData);
   

  createElement('div',
    {
      className: 'container',
    },
    {
      parent: products,
      children:[
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
            children: productsData.map(renderProduct),
          }
        )
      ],
    }
  );
}