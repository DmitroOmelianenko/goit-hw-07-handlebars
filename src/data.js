export const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 1500,
    description: 'A high-performance laptop for all your needs.',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 700,
    description: 'A modern smartphone with an excellent camera.',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 200,
    description: 'Noise-cancelling headphones for better focus.',
  },
];

const container = document.getElementById('product-list');
const ul = document.createElement('ul');
products.forEach(product => {
  const li = document.createElement('li');
  li.innerHTML = `<h3>${product.name}</h3> - $${product.price}<p>${product.description}</p>`;
  ul.appendChild(li);
});


container.appendChild(ul);
