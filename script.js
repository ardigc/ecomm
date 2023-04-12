// Cuando numero en string, usar funciones parseInt, parseFloat (si lo necesitas)

const products = [
  {
    name: 'Oriental Concrete Gloves',
    price: '374.00',
    description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    qt: 1,
    ide: 1
  },
  {
    name: 'Refined Metal Towels',
    price: '614.00',
    description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    qt: 1,
    ide: 2
  },
  {
    name: 'Bespoke Cotton Bacon',
    price: '811.00',
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    qt: 1,
    ide: 3
  },
  {
    name: 'Licensed Rubber Pants',
    price: '524.00',
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    qt: 1,
    ide: 4
  },
  {
    name: 'Unbranded Fresh Cheese',
    price: '186.00',
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    qt: 1,
    ide: 5
  },
  {
    name: 'Tasty Concrete Bacon',
    price: '40.00',
    description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    qt: 1,
    ide: 6
  },
  {
    name: 'Oriental Concrete Soap',
    price: '882.00',
    description: 'The Football Is Good For Training And Recreational Purposes',
    qt: 1,
    ide: 7
  },
  {
    name: 'Recycled Fresh Gloves',
    price: '307.00',
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    qt: 1,
    ide: 8
  },
  {
    name: 'Fantastic Bronze Pants',
    price: '182.00',
    description: 'The Football Is Good For Training And Recreational Purposes',
    qt: 1,
    ide: 9
  },
  {
    name: 'Rustic Steel Hat',
    price: '267.00',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    qt: 1,
    ide: 11
  },
  {
    name: 'Rustic Soft Chips',
    price: '553.00',
    description: 'The Football Is Good For Training And Recreational Purposes',
    qt: 1,
    ide: 12
  },
  {
    name: 'Small Soft Computer',
    price: '151.00',
    description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    qt: 1,
    ide: 13
  },
  {
    name: 'Rustic Bronze Towels',
    price: '133.00',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    qt: 1,
    ide: 14
  },
  {
    name: 'Rustic Wooden Bacon',
    price: '264.00',
    description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    qt: 1,
    ide: 15
  },
  {
    name: 'Oriental Wooden Salad',
    price: '108.00',
    description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    qt: 1,
    ide: 16
  },
  {
    name: 'Luxurious Steel Pants',
    price: '680.00',
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    qt: 1,
    ide: 17
  },
  {
    name: 'Oriental Concrete Computer',
    price: '254.00',
    description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    qt: 1,
    ide: 18
  },
  {
    name: 'Unbranded Metal Shirt',
    price: '703.00',
    description: 'The Football Is Good For Training And Recreational Purposes',
    qt: 1,
    ide: 19
  },
  {
    name: 'Luxurious Granite Mouse',
    price: '255.00',
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    qt: 1,
    ide: 20
  },
  {
    name: 'Incredible Rubber Salad',
    price: '589.00',
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    qt: 1,
    ide: 21
  }
]

// Objetivo: crear página de e-commerce -> Mostrar todos los productos, añadir botón de añadir al carrito
// en cada producto, añadir botón mostrar carrito que abra un drawer (ver MUI) y en el carrito mostrar
// precio total, y cada elemento en el carrito con su precio individual.

// const productBox =document.querySelector(".product-box");
const productsGrid = document.querySelector(".products-grid");
const carrito = [];
const showCarrito = document.querySelector(".carrito")


function createElement(tag, styles, content) {
  const element=document.createElement(tag);
  element.setAttribute("class", styles);
  if (!!content === false) {
    
  } else {
    if (Array.isArray(content)) {
      element.append(...content)
    } else {
      element.append(content)
    }
  } 
  return element;
}
const buttonCarrito = document.querySelector(".button-position");

buttonCarrito.addEventListener("click", (ev) =>{
  if (showCarrito.className.includes("fuera")) {
    showCarrito.setAttribute("class","carrito show")
  } else {
    showCarrito.setAttribute("class","carrito fuera")  
  }
})

function createItem(item) {
  // console.log(item);  
  const nameBox = createElement("div", "item-name",item.name);
  // const descriptionBox = createElement("div", "item-description", item.description)
  const priceBox = createElement("div", "item-price","Unidades "+item.qt+"   "+item.price+"€");
  const itemBox = createElement("div", "item-box",)
  itemBox.append(nameBox)
  // itemBox.append(descriptionBox);
  itemBox.append(priceBox);
  // console.log()
  return itemBox
}
function renderizarCarro(carro) {
  const carritoList = carrito.map(createItem);
  showCarrito.append(...carritoList)
  let totalPrice = 0;
  for (let x = 0; x < carrito.length; x++) 
  {
    const currentPrice = parseFloat(carrito[x].price);
    totalPrice = totalPrice + (currentPrice*carrito [x].qt); 
  }
  // console.log(totalPrice)
  showCarrito.append(createElement("div", "total-price", "Total price is "+totalPrice+"€"));
}

function createProduct(product){
  let contcicles = 0;
  // let int = [ev.name, ev.price, ev.description];
  // console.log(int);
  // const div = createElement("div");
  // const dibujito = createElement("div");
  const nameBox = createElement("div", "product-name",product.name);
  // crear descriptionBox
  const descriptionBox = createElement("div", "description-box", product.description)
  // crear priceBox
  const priceBox = createElement("div", "price-box", product.price+"€");
  // crear buttonBox
  const button = createElement("button", "buy-button", "comprar");
  const buttonBox = createElement("div", "button-box", button);
  const productBox = createElement("div", "product-box",);
  productBox.append(nameBox)
  productBox.append(descriptionBox);
  productBox.append(priceBox);
  productBox.append(buttonBox);
 button.addEventListener("click",(ev)=>{
  showCarrito.innerHTML= " ";
if (contcicles===0) {
  contcicles++
  carrito.push(product);
} else {
  ident = carrito.find((element) => element.ide === product.ide);
  index = carrito.findIndex((element) => element.ide === product.ide);
  if (product.ide===ident.ide) {
        carrito[index].qt++;
  } else {
    carrito.push(product);
  }}
  renderizarCarro(carrito);
// 
// Intentar ventana emergente con setTimeOut

button.append(createElement("div", "feedback-window", "Se añadio al carrito correctamente"));

var aparecer ;
const popup = document.querySelector(".feedback-window");
aparecer = setTimeout(() => {
    
    popup.style.display="none";
  }, 500); 
if (popup.style.display === "none") {
  clearTimeout(aparecer);
}
  
});

return productBox;
}

const mapa = products.map(createProduct);

productsGrid.append(...mapa);



