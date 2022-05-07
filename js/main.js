let nombre = prompt("Hola! ¿Como te llamas?");
console.log("Bienvenido " + nombre + " a Buscando florecer");

function producto(nombre, color, tamaño, precio) {
    this.nombre = nombre;
    this.color = color;
    this.tamaño = tamaño;
    this.precio = precio;
}
const producto1 = new producto(
    " Shampoo,",
    " Blanco,",
    " Standard,",
    400
);
const producto2 = new producto(
    " Jabon artesanal,",
    " Rosa,",
    " Grande,",
    300
);
const producto3 = new producto(
    " Cepilo de Dientes,",
    " Negro,",
    " Pequeño,",
    240
);
const producto4 = new producto(
    " Agua de Rosas,",
    " verde,",
    " Grande,",
    23600
);
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);

let compraProducto1 = prompt(
    "Por favor seleccione cuantas unidades quiere: " +
    producto1.nombre +
    producto1.color +
    producto1.tamaño
);
let compraProducto2 = prompt(
    "Por favor seleccione cuantas unidades quiere: " +
    producto2.nombre +
    producto2.color +
    producto2.tamaño
);
let compraProducto3 = prompt(
    "Por favor seleccione cuantas unidades quiere: " +
    producto3.nombre +
    producto3.color +
    producto3.tamaño
);
let compraProducto4 = prompt(
    "Por favor seleccione cuantas unidades quiere: " +
    producto4.nombre +
    producto4.color +
    producto4.tamaño
);
console.log(
    "Tu eleccion para " +
    producto1.nombre +
    producto1.color +
    producto1.tamaño +
    " fue " +
    compraProducto1 +
    " unidades. Subtotal=" +
    producto1.precio * compraProducto1
);
console.log(
    "Tu eleccion para " +
    producto2.nombre +
    producto2.color +
    producto2.tamaño +
    " fue " +
    compraProducto2 +
    " unidades. Subtotal=" +
    producto2.precio * compraProducto2
);
console.log(
    "Tu elección para " +
    producto3.nombre +
    producto3.color +
    producto3.tamaño +
    " fue " +
    compraProducto3 +
    " unidades. Subtotal=" +
    producto3.precio * compraProducto3
);
console.log(
    "Tu eleccion para " +
    producto4.nombre +
    producto4.color +
    producto4.tamaño +
    " fue " +
    compraProducto4 +
    " unidades. Subtotal=" +
    producto4.precio * compraProducto4
);

let subtotal1 = compraProducto1 * producto1.precio;
let subtotal2 = compraProducto2 * producto2.precio;
let subtotal3 = compraProducto3 * producto3.precio;
let subtotal4 = compraProducto4 * producto4.precio;
let subtotal = subtotal1 + subtotal2 + subtotal3 + subtotal4;

let envio = prompt(
    "Selecciona metodo de envio" +
    " 1-Casco Urbano gratis" +
    " 2-Fuera de La Plata $700 " +
    " 3-Correo $1000 " +
    " 4-Envio rapido $4000"
);
let precioEnvio = 0;
switch (envio) {
    case "1":
        console.log("El envio es gratis");
        if ((envio = 1)) {
            precioEnvio = precioEnvio + 0;
        }
        break;

    case "2":
        console.log("El costo de envio es de $700");
        if ((envio = 2)) {
            precioEnvio = precioEnvio + 700;
        }
        break;

    case "3":
        console.log("El costo de envio es de 1000");
        if ((envio = 3)) {
            precioEnvio = precioEnvio + 1000;
        }
        break;

    case "4":
        console.log("El costo de envio es de 4000");
        if ((envio = 4)) {
            precioEnvio = precioEnvio + 4000;
        }
        break;

    default:
        alert("Valor no valido");
        break;
}

let total = parseInt(subtotal + precioEnvio);
console.log("El total es de " + total);

alert("El monto a abonar es " + total);

function destinatario(
    nombre,
    calle,
    localidad,
    provincia,
    celular,
    cp
) {
    this.nombre = nombre;
    this.calle = calle;
    this.localidad = localidad;
    this.provincia = provincia;
    this.celular = celular;
    this.cp = cp;
}

const destinatario1 = new destinatario(
    "Destinatario",
    prompt("Por favor ingresa el nombre de la persona que recibe el pedido"),
    prompt("Por favor ingresa el domicilio"),
    prompt("Por favor ingresa la localidad"),
    prompt("Por favor ingresa la provincia"),
    prompt("Por favor ingresa un numero de contacto"),
    prompt("Por favor ingresa el codigo postal")
);

console.log(destinatario1);

function tarjeta(numero, vencimiento, nombre, codigo, dni) {
    this.numero = numero;
    this.vencimiento = vencimiento;
    this.nombre = nombre;
    this.codigo = codigo;
    this.dni = dni;
}

const tarjeta1 = new tarjeta(
    "Tarjeta",
    prompt("Por favor ingresa los digitos de tu tarjeta"),
    prompt("Por favor ingresa la fecha de vencimiento de tu tarjeta"),
    prompt("Por favor ingresa tu nombre completo como figura en tu tarjeta"),
    prompt("Por favor ingresa el codigo de seguridad de tu tarjeta"),
    prompt("Por favor ingresa tu dni")
);

console.log(tarjeta1);
console.log("Tu pago fue realizado correctamente.");
console.log("En las proximas horas estaremos despachando tu pedido.");
console.log("Muchas gracias por tu compra!");