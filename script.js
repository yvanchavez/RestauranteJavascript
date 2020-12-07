/**
 * Lógica para crear pedidos y cobrar pedidos de los usuarios   
 */

const usuario = {
    nombre: "Beto",
    edad: 30,
    deuda:0
}

let pedido = []
let costoPedido = 0
let ventasRealizadas = 0;


const mostrarMenu = () => { 
    console.log("CODIGO - NOMBRE PRODUCTO - COSTO");
    productos.forEach(producto => console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}`))

}

const pedirProducto = cod => {
    if (!cod) return "Ingrese un código valido"
    
    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    if(!productoEncontrado) return "El producto no existe"

    pedido.push(productoEncontrado)
    console.log("El producto ha sido agregado a su pedido. Su pedido es:");
    return verPedido()
}

const verPedido = () => pedido

const calcularCosto = () => {
    let costo = 0

    pedido.forEach(producto => {
         costo += producto.costo
    });
    costoPedido = costo
    return costoPedido
}
 
const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return `${usuario.nombre}, debes pagar ${usuario.deuda} soles`
}

const pagarPedido = montoEntregado => {
    if(typeof montoEntregado === "number"){
        if(montoEntregado< usuario.deuda){
            return `No te alcanza para pagar tu pedido`
        } else if (montoEntregado === usuario.deuda){
            ventasRealizadas += usuario.deuda;
            usuario.deuda = 0
            return `Tu pedido ha sido pagado`
        } else {
            ventasRealizadas += usuario.deuda;
            let cambio = montoEntregado - usuario.deuda
            usuario.deuda=0
            
            return `Tu pedido ha sido pagado y tu cambio es de ${cambio}`
        }
    }else{
        return "Dato incorrecto"
    }
}


const verVentas = () => `Monto total ventas realizadas: ${ventasRealizadas}`;