let faker = require('faker');

let products = [];
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

for (let i = 0; i < 10; i++) {
  products.push(
    new Product(faker.commerce.productName(), faker.commerce.price())
  );
}
products.forEach(product => {
  console.log(`${product.name} - $${product.price}`);
});
