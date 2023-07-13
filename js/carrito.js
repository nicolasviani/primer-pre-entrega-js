
let selectedProduct = "";
let selectedModel = "";
let selectedPrice = 0;
let quantity = 0;
let addProduct = "";
let size = "";
let total = 0;

const products = [
    {
        name: "Remeras de hombres",
        models: ["Remera Adidas", "Remera Nike"],
        price: [15000, 14000],
    },
    {
        name: "Remeras de mujeres",
        models: ["Remera Reebok", "Remera Fila"],
        price: [13000, 15000],
    },
    {
        name: "Pantalones de hombres",
        models: ["Pantalon Adidas", "Pantalon Nike"],
        price: [24000, 26000],
    },
    {
        name: "Pantalones de mujeres",
        models: ["Calza Deportiva Fila", "Calza Nike"],
        price: [26000, 24000],
    },
]

alert("Bienvenidos al carrito de Mamba Design.");

let userName = prompt("Ingrese su nombre de usuario para entrar al login por favor.");

let userLastName = prompt("Ingrese su apellido de usuario para entrar al login por favor.");

alert("Bienvenido " + userName + " " + userLastName);



const productsMenu = products.map((product, index) => {
    return "\n" + (index + 1) + "." + product.name;
}).join(" ");


    selectedProduct = prompt(`¿Que producto deseas llevar?\n${productsMenu}`);

    const product = products[selectedProduct - 1];

    const modelsMenu = product.models.map((model, index) => {
        return "\n" + (index + 1) + "." + model + ":$" + product.price[index];
    }).join(" ");

    selectedModel = prompt(`¿Que modelo deseas llevar?\n${modelsMenu}`);

        while(quantity <= 0 || isNaN(quantity)){

            quantity = parseInt(prompt("¿Que cantidad deseas llevar?"));
        }
    alert("elejiste " + quantity + " unidad/es.");

    function mostrarTalles(){
    
        while(size != "S" && size != "M" && size != "L" && size != "XL"){

            size = prompt("¿Que talles estabas buscando? ingresa el talle en mayusculas por favor.");

        }
    }
    mostrarTalles();

const model = product.models[selectedModel - 1];
const price = product.price[selectedModel - 1];

alert(`El detalle de tu compra ` + userName + " " + userLastName + `\nProducto: ${product.name} \nModelo: ${model} \nprecio: ${price} \nCantidad: ${quantity} \nTalle: ${size}`);

total = total + quantity * price;
alert(userName + " " + userLastName + " " + "el total de tu compra es: $" + total);