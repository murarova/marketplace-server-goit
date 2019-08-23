const fs = require('fs');

const products = JSON.parse(fs.readFileSync(`__dirname/../src/db/products/products.json`));

const findProductsByCategory = category => {
    const result = products.filter(el => el.categories.find(el => el === category));
    return result;
};

module.exports = findProductsByCategory;
