// Cuando numero en string, usar funciones parseInt, parseFloat (si lo necesitas)

const products = [
  {
    name: 'Oriental Concrete Gloves',
    price: '374.00',
    description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016'
  },
  {
    name: 'Refined Metal Towels',
    price: '614.00',
    description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'
  },
  {
    name: 'Bespoke Cotton Bacon',
    price: '811.00',
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals'
  },
  {
    name: 'Licensed Rubber Pants',
    price: '524.00',
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit'
  },
  {
    name: 'Unbranded Fresh Cheese',
    price: '186.00',
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals'
  },
  {
    name: 'Tasty Concrete Bacon',
    price: '40.00',
    description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart'
  },
  {
    name: 'Oriental Concrete Soap',
    price: '882.00',
    description: 'The Football Is Good For Training And Recreational Purposes'
  },
  {
    name: 'Recycled Fresh Gloves',
    price: '307.00',
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality'
  },
  {
    name: 'Fantastic Bronze Pants',
    price: '182.00',
    description: 'The Football Is Good For Training And Recreational Purposes'
  },
  {
    name: 'Rustic Steel Hat',
    price: '267.00',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J'
  },
  {
    name: 'Rustic Soft Chips',
    price: '553.00',
    description: 'The Football Is Good For Training And Recreational Purposes'
  },
  {
    name: 'Small Soft Computer',
    price: '151.00',
    description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive'
  },
  {
    name: 'Rustic Bronze Towels',
    price: '133.00',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J'
  },
  {
    name: 'Rustic Wooden Bacon',
    price: '264.00',
    description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients'
  },
  {
    name: 'Oriental Wooden Salad',
    price: '108.00',
    description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart'
  },
  {
    name: 'Luxurious Steel Pants',
    price: '680.00',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J'
  },
  {
    name: 'Oriental Concrete Computer',
    price: '254.00',
    description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'
  },
  {
    name: 'Unbranded Metal Shirt',
    price: '703.00',
    description: 'The Football Is Good For Training And Recreational Purposes'
  },
  {
    name: 'Luxurious Granite Mouse',
    price: '255.00',
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals'
  },
  {
    name: 'Incredible Rubber Salad',
    price: '589.00',
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit'
  }
]

// Objetivo: crear página de e-commerce -> Mostrar todos los productos, añadir botón de añadir al carrito
// en cada producto, añadir botón mostrar carrito que abra un drawer (ver MUI) y en el carrito mostrar
// precio total, y cada elemento en el carrito con su precio individual.

const productBox =document.querySelector(".product-box");
const productsGrid = document.querySelector(".products-grid");

function createElement(tag, styles, content) {
  const element=document.createElement(tag);
  element.setAttribute("class", styles);
  element.append(content)
  return element;
}
const mapa = products.map((ev)=>{
  // let int = [ev.name, ev.price, ev.description];
  // console.log(int);
  const nameBox = createElement ("div", "product-name", ev.name);
  productBox.append(nameBox)
  return createElement("div", "product-box","la caja");
});


productsGrid.append(...mapa);
