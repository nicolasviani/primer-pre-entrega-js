
let selectedProduct = "";
let selectedModel = "";
let selectedPrice = 0;
let selectedSize = "";
let quantity = 0;
let addProduct = "";
let selectedDetail = "";



const products = [
    {
        name: "Remeras de hombres",
        models: ["Remera Adidas", "Remera Nike"],
        price: [15000, 14000],
        size: ["S", "M", "L", "XL"],
    },
    {
        name: "Remeras de mujeres",
        models: ["Remera Reebok", "Remera Fila"],
        price: [13000, 15000],
        size: ["S", "M", "L", "XL"],
    },
    {
        name: "Pantalones de hombres",
        models: ["Pantalon Adidas", "Pantalon Nike"],
        price: [24000, 26000],
        size: ["S", "M", "L", "XL"],
    },
    {
        name: "Pantalones de mujeres",
        models: ["Calza Deportiva Fila", "Calza Nike"],
        price: [26000, 24000],
        size: ["S", "M", "L", "XL"],
    },
]

alert("Bienvenidos al carrito de Mamba Design.");

let userName = prompt("Ingrese su nombre de usuario para entrar al login por favor.");

let userLastName = prompt("Ingrese su apellido de usuario para entrar al login por favor.");

alert("Bienvenido " + userName + " " + userLastName);

const shoppingCart = [];

do{

    const productsMenu = products.map((product, index) => {
        return "\n" + (index + 1) + "." + product.name;
    }).join(" ");

    selectedProduct = prompt(`¿Que producto deseas llevar?\n${productsMenu}`);

    const product = products[selectedProduct - 1];

    const modelsMenu = product.models.map((model, index) => {
        return "\n" + (index + 1) + "." + model + ":$" + product.price[index];
    }).join(" ");

    selectedModel = prompt(`¿Que modelo deseas llevar?\n${modelsMenu}`);

    const model = product.models[selectedModel - 1];
    selectedPrice = product.price[selectedModel - 1];

        while(quantity <= 0 || isNaN(quantity)){

            quantity = parseInt(prompt("¿Que cantidad deseas llevar?"));
        }
    alert("elejiste " + quantity + " unidad/es.");

    const sizeMenu = product.size.map((size, index) => {
        return "\n" + (index + 1) + "." + size;
    }).join(" ");

    selectedSize = prompt(`¿Que talles estabas buscando?\n${sizeMenu}`);

    const size = product.size[selectedSize - 1];

    const selectedProductObj = {

        productName: product.name,
        model: model,
        price: selectedPrice,
        quantity: quantity,
        size: size
    };
    shoppingCart.push(selectedProductObj);
    
    addProduct = prompt("¿Deseas agregar otro producto al carrito?");
    quantity = 0;

}while(addProduct === "si");

    selectedDetail=`El detalle de tu compra ` + userName + " " + userLastName;
    for(const item of shoppingCart){
        selectedDetail += `\nProducto: ${item.productName} \nModelo: ${item.model} \nPrecio: $${item.price} \nCantidad: ${item.quantity} \nTalle: ${item.size}\n`;
    }
    alert(selectedDetail);
    
    const total = shoppingCart.reduce((accumulator, product) => accumulator + (product.price * product.quantity),0)
    alert("El total de tu compra es: $" + total);




































































































