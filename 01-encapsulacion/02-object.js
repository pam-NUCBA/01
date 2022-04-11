let producto = {
    precio: 2000,
    descuento: 15,
    cantidad: 10,
    //los parametros ya son propiedades del objeto, así que no necesitamos pasarlos
    precioTotal: function() {
        console.log(((this.precio * this.descuento) / 100) * this.cantidad);
    },
};

producto.precioTotal();