const fs = require('fs');
const products = JSON.parse(fs.readFileSync(`__dirname/../src/db/products/products.json`));

const findFewProducts = request => {
  const url = new URL('http://localhost:8080' + request.url);
  const ids = url.searchParams.get('ids');

  const idsArr = ids.slice(1, ids.length - 1).split(',');

  const result = [];

  idsArr.forEach(el => {
    products.forEach(product => {
      if (product.id * 1 === el * 1) result.push(product);
    });
  });

  return result;
};

module.exports = findFewProducts;
