'use strict';
const cart = {
  items: [], // товары
  discount: null,
  set setDiscount(discount) {
    if (discount === 'METHED') {
      this.discount = 0.15;
    } else if (discount === 'NEWYEAR') {
      this.discount = 0.21;
    }
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0, // Кол-во товаров

  // добавить товар
  add(productName, productPrice, amountOfProduct) {
    const product = {
      name: productName,
      price: productPrice,
      amount: amountOfProduct,
    };
    this.items.push(product);
    this.increaseCount(amountOfProduct);
  },

  // увеличить количество товаров
  increaseCount(num) {
    this.count += num;
  },

  // посчитать общую стоимость товаров
  calculateItemPrice() {
    let sum = 0;
    this.items.map((item) => {
      sum += item.price * item.amount;
    });

    return this.discount === null ? sum : (1 - this.discount) * sum;
  },

  // очистка корзины
  clear() {
    this.items = [];
    this.count = 0;
  },

  // распечатать корзину
  print() {
    const cartStr = JSON.stringify(cart);
    const cartObj = JSON.parse(cartStr);
    console.log(cartObj);
    console.log(`В строке выглядит так себе ` + cartStr);
  },
};

cart.setDiscount = 'METHED';
cart.add('Коловорот', 50, 3);
cart.add('Кружка', 25, 2);
cart.add(`Щипцы для завивки очень хороших волос`, 50, 2);
// cart.clear();
cart.print();
// cart.clear();
