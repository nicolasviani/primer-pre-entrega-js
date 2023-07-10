
let respuesta = "";
let producto = "";
let modelos = ``;
let remerasDeHombres = ``;
let remerasDeMujeres = ``;
let pantalonesDeHombres = ``;
let pantalonesDeMujeres = ``;
let remeraSmile = "$14000";
let remeraAdidas = "$15000";
let remeraReebok = "$14000";
let remeraNike = "$15000";
let pantalonNike = "$30000";
let pantalonAdidas = "$25000";
let calzaDeportiva = "$18000";
let calzaAdidas = "23000";
let cantidad = 0;
let eleccion = 0;
let talle = "";
let agregarProducto = "";
let total = 0;
let detalleDeCompra = "";
let precio = "";

alert("Bienvenidos al carrito de compras de Mamba Design");

let nombreUsuario = prompt("Ingrese su nombre de usuario para ingresar al login por favor.");

let apellidoUsuario = prompt("Ingrese su apellido de usuario para ingresar al login por favor.");

alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario + ".");


do{
    producto = parseInt(prompt(`¿Que producto deseas llevar?\n \n1 Remeras de hombres ${remerasDeHombres} \n2 Remeras de mujeres ${remerasDeMujeres} \n3 Pantalones de hombres ${pantalonesDeHombres} \n4 Pantalones de mujeres ${pantalonesDeMujeres}`));
    
        while(producto != 1 && producto != 2 && producto != 3 && producto != 4){
}

alert("Seleccionaste la opcion: " + producto + ".");

if(producto == 1){
    eleccion = parseInt(prompt(`Eleji un modelo de remeras:\n \nRemeras smile \nRemeras adidas`));
    alert("El modelo que elijiste es el: " + eleccion)
        if(eleccion == 1){
            alert("El " + precio + "es de:" + remeraSmile);
        }if(eleccion == 2){
            alert("El precio es de: " + remeraAdidas);
        }
        cantidad = parseInt(prompt("¿Que cantidad deseas llevar?"));
        alert("elejiste " + cantidad );
            
}if(producto == 2){
    eleccion = parseInt(prompt(`Eleji un modelo de remeras:\n \nRemeras reebok \nRemeras nike`));
    alert("El modelo que elijiste es el: " + eleccion)
    if(eleccion == 1){
        alert("El precio es de: " + remeraReebok);
    }if(eleccion == 2){
        alert("El precio es de: " + remeraNike);
    }
    cantidad = parseInt(prompt("¿Que cantidad deseas llevar?"));
    alert("elejiste " + cantidad);

}if(producto == 3){
    eleccion = parseInt(prompt(`Eleji un modelo de Pantalones:\n \nPantalon nike \nPantalon adidas`));
    alert("El modelo que elijiste es el: " + eleccion)
    if(eleccion == 1){
        alert("El " + precio + "es de:" + pantalonNike);
    }if(eleccion == 2){
        alert("El precio es de: " + pantalonAdidas);
    }
    cantidad = parseInt(prompt("¿Que cantidad deseas llevar?"));
    alert("elejiste " + cantidad );

}if(producto == 4){
    eleccion = parseInt(prompt(`Eleji un modelo de Calzas:\n \nCalza deportiva \nCalza adidas`));
    alert("El modelo que elijiste es el: " + eleccion)
    if(eleccion == 1){
        alert("El precio es de: " + calzaDeportiva);
    }if(eleccion == 2){
        alert("El precio es de: " + calzaAdidas);
    }
    cantidad = parseInt(prompt("¿Que cantidad deseas llevar?"));
    alert("elejiste " + cantidad );
}

function mostrarTalles(talle){
    
    talle = (prompt("¿Que talles estabas buscando? ingresa el talle en mayusculas por favor."));
    
    switch(talle){

        case "S":
            alert("El talle que elejistes es: " + talle);
            break;
        case "M":
            alert("El talle que elejistes es: " + talle);
            break;
        case "L":
            alert("El talle que elejistes es: " + talle);
            break;
        case "XL":
            alert("El talle que elejistes es: " + talle);
            break;
        default:
            alert("Debes ingresar el talle, no olvides de ingresarlo en mayuscula por favor.");
    }
}
mostrarTalles(talle);

agregarProducto = prompt("¿Deseas agregar otro producto? si/no");

}while(agregarProducto == "si");

detalleDeCompra = alert(`Detalle de tu compra ` + nombreUsuario + " " + apellidoUsuario + `\nProducto: ${producto} \nmodelo: ${eleccion} \nCantidad: ${cantidad} \nPrecio: ${precio} \nTalle: ${talle} \n\n`);

total = alert(total + cantidad * precio);

alert(`${detalleDeCompra} El total de tu compra es de: $${total}`);



