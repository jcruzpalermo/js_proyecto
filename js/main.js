const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  Swal.fire({
    title: 'Desea agregar al carrito?',
    text: "Deseas agregar este producto?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, quiero'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Agregado!',
        'El producto fue agregado',
        'success'
      )
    }
  })
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

function removeShoppingCartItem(event) {
  Swal.fire({
    title: 'Est?? seguro de eliminar el producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'S??, seguro',
    cancelButtonText: 'No, no quiero'
}).then((result) => {

    if (result.isConfirmed) {
        Swal.fire({
            title: 'Borrado!',
            icon: 'success',
            text: 'El producto ha sido borrado'
        })
    }
})

  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}

const carrito = JSON.parse(localStorage.getItem('shopping-cart')) || []








// let nombre = prompt("Hola! ??Como te llamas?");
// console.log("Bienvenido " + nombre + " a Buscando florecer");

// class Producto{
//     constructor (nombre, precio, tama??o, color, disponible) {
//     this.nombre = nombre.toUpperCase();
//     this.precio = parseFloat(precio);
//     this.tama??o = tama??o;
//     this.color = color;
//     this.disponible = disponible;
//     }
//     sumarIva() {
//         return this.precio*1.21;
//     }
//     Vender() {
//         this.disponible = False;
//     }
//     precioSugerido() {
//         return this.precio * 1.21 * 1.50;
//     }
// }
// //Array de productos
// let Productos = [];
// do{
//     let Comprobar = prompt("Ingrese un producto o fin para terminar");
//     if(Comprobar === "fin"|| Comprobar==="FIN"|| Comprobar === "Fin" ){
//         break;
//     }else{
//         nombreP = Comprobar;
//     let precioP = prompt("ingrese el precio del producto");
//     let tama??oP = prompt("ingrese el tama??o del producto");
//     let colorP = prompt("Ingrese el color del producto");
//     Productos.push(new Productos(nombreP, precioP, tama??oP, colorP));
//     }
// }
// while (Comprobar !="fin" || Comprobar != "FIN" || Comprobar !="Fin")

// for(const producto of Productos )
//     producto.sumarIva()

// console.log(producto);
// //array de productos disponibles
// let Disponibles = []
//     producto1 = {
//         nombre: "Shampoo",
//         color: "Blanco",
//         tama??o: "Estandar",
//         precio: 400,
//     };
//      producto2 = 
//       {
//         nombre: "Jabon Artesanal",
//         color: "rosa",
//         tama??o: "Grande",
//         precio: 300,
//     };
//      producto3 = 
//      {
//         nombre: "cepillo de dientes",
//         color: negro,
//         tama??o: peque??o,
//         precio: 240,
//     };
//      producto4 = 
//      {
//         nombre: "Agua de Rosas",
//         color: "verde",
//         tama??o: "Grande",
//         precio: 600
//     };  
//     const nombres = Disponibles.map((el) => el.nombre)
//     console.log(nombres)

//     const actualizado = Disponibles.map((el) => {
//         return {
//             nombre: el.nombre,
//             precio: producto.sumarIva,
//         }
//     })

//     console.log(actualizado)


// console.log(producto1);
// console.log(producto2);
// console.log(producto3);
// console.log(producto4);

// //array de unidades a comprar
// let unidades = []

//     compraProducto1 = 
//     prompt(
//     "Por favor seleccione cuantas unidades quiere: " +
//     producto1.nombre +
//     producto1.color +
//     producto1.tama??o
// );
// let compraProducto2 = prompt(
//     "Por favor seleccione cuantas unidades quiere: " +
//     producto2.nombre +
//     producto2.color +
//     producto2.tama??o
// );
// let compraProducto3 = prompt(
//     "Por favor seleccione cuantas unidades quiere: " +
//     producto3.nombre +
//     producto3.color +
//     producto3.tama??o
// );
// let compraProducto4 = prompt(
//     "Por favor seleccione cuantas unidades quiere: " +
//     producto4.nombre +
//     producto4.color +
//     producto4.tama??o
// );
// console.log(
//     "Tu eleccion para " +
//     producto1.nombre +
//     producto1.color +
//     producto1.tama??o +
//     " fue " +
//     compraProducto1 +
//     " unidades. Subtotal=" +
//     producto1.precio * compraProducto1
// );
// console.log(
//     "Tu eleccion para " +
//     producto2.nombre +
//     producto2.color +
//     producto2.tama??o +
//     " fue " +
//     compraProducto2 +
//     " unidades. Subtotal=" +
//     producto2.precio * compraProducto2
// );
// console.log(
//     "Tu elecci??n para " +
//     producto3.nombre +
//     producto3.color +
//     producto3.tama??o +
//     " fue " +
//     compraProducto3 +
//     " unidades. Subtotal=" +
//     producto3.precio * compraProducto3
// );
// console.log(
//     "Tu eleccion para " +
//     producto4.nombre +
//     producto4.color +
//     producto4.tama??o +
//     " fue " +
//     compraProducto4 +
//     " unidades. Subtotal=" +
//     producto4.precio * compraProducto4
// );
// //Array para subtotal
// let Subtotal = [] 
//     {subtotal1 = compraProducto1 * producto1.precio};
//     {subtotal2 = compraProducto2 * producto2.precio};
//     {subtotal3 = compraProducto3 * producto3.precio};
//     {subtotal4 = compraProducto4 * producto4.precio};
//     {subtotal = subtotal1 + subtotal2 + subtotal3 + subtotal4};

// let envio = prompt(
//     "Selecciona metodo de envio" +
//     " 1-Casco Urbano gratis" +
//     " 2-Fuera de La Plata $700 " +
//     " 3-Correo $1000 " +
//     " 4-Envio rapido $4000"
// );
// let precioEnvio = 0;
// switch (envio) {
//     case "1":
//         console.log("El envio es gratis");
//         if ((envio = 1)) {
//             precioEnvio = precioEnvio + 0;
//         }
//         break;

//     case "2":
//         console.log("El costo de envio es de $700");
//         if ((envio = 2)) {
//             precioEnvio = precioEnvio + 700;
//         }
//         break;

//     case "3":
//         console.log("El costo de envio es de 1000");
//         if ((envio = 3)) {
//             precioEnvio = precioEnvio + 1000;
//         }
//         break;

//     case "4":
//         console.log("El costo de envio es de 4000");
//         if ((envio = 4)) {
//             precioEnvio = precioEnvio + 4000;
//         }
//         break;

//     default:
//         alert("Valor no valido");
//         break;
// }

// let total = parseInt(subtotal + precioEnvio);
// console.log("El total es de " + total);

// alert("El monto a abonar es " + total);

// function destinatario(
//     nombre,
//     calle,
//     localidad,
//     provincia,
//     celular,
//     cp
// ) {
//     this.nombre = nombre;
//     this.calle = calle;
//     this.localidad = localidad;
//     this.provincia = provincia;
//     this.celular = celular;
//     this.cp = cp;
// }

// const destinatario1 = new destinatario(
//     "Destinatario",
//     prompt("Por favor ingresa el nombre de la persona que recibe el pedido"),
//     prompt("Por favor ingresa el domicilio"),
//     prompt("Por favor ingresa la localidad"),
//     prompt("Por favor ingresa la provincia"),
//     prompt("Por favor ingresa un numero de contacto"),
//     prompt("Por favor ingresa el codigo postal")
// );

// console.log(destinatario1);

// function tarjeta(numero, vencimiento, nombre, codigo, dni) {
//     this.numero = numero;
//     this.vencimiento = vencimiento;
//     this.nombre = nombre;
//     this.codigo = codigo;
//     this.dni = dni;
// }

// const tarjeta1 = new tarjeta(
//     "Tarjeta",
//     prompt("Por favor ingresa los digitos de tu tarjeta"),
//     prompt("Por favor ingresa la fecha de vencimiento de tu tarjeta"),
//     prompt("Por favor ingresa tu nombre completo como figura en tu tarjeta"),
//     prompt("Por favor ingresa el codigo de seguridad de tu tarjeta"),
//     prompt("Por favor ingresa tu dni")
// );

// console.log(tarjeta1);
// console.log("Tu pago fue realizado correctamente.");
// console.log("En las proximas horas estaremos despachando tu pedido.");
// console.log("Muchas gracias por tu compra!");