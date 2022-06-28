/* Agregar al carrito */
function añadir_carrito(id,nombre,precio,imagen) {
    
    if (carrito[id]) {
        alert("Ya se encuentra agregado en el carrito")
    }else{
        carrito[id]={id,nombre,precio,imagen,cantidad:1};
        var contador=0;
        carrito.forEach(element => {
            contador++;/* Contar el numero de elemntos agregados al carrito */
        });
        document.querySelector(".item__total").textContent=contador;
        if (document.getElementById("category").value!="select") {
            busquedadatoscategoria(document.getElementById("category").value);
        }else if (document.getElementById("buscar").value!="") {
            busquedadatos(document.getElementById("buscar").value);
        }else{
            cargardatos();
        }
    }

}

/* Mostrar modaol de carrito */
function mostrar_carrito() {
    document.getElementById("carrito__overlay").classList.add("show");
    document.getElementById("carrito").classList.add("show");
    mostrar_productos_carrito();
}

/* Oculatamos modaol de carrito */
function ocultar_carrito() {
    document.getElementById("carrito__overlay").classList.remove("show");
    document.getElementById("carrito").classList.remove("show");
}

/* Visualizar productos agregados */

function mostrar_productos_carrito() {
    var precioTotal=0,
        template=``;
    carrito.forEach(producto => {
        template+=`
            <div class="carrito__item">
                <img src="${producto.imagen}" alt="reloj">
                <div>
                <h3>${producto.nombre}</h3>
                <p class="price">$${producto.precio}.00</p>
                </div>
                <div>
                <span>
                    <i class="bx bxs-up-arrow" onclick="aumentarcantidad(${producto.id})"></i>
                </span>
                <p id="cantp${producto.id}">${producto.cantidad}</p>
                <span>
                    <i class="bx bxs-down-arrow" onclick="reducircantidad(${producto.id})"></i>
                </span>
                </div>
                <span class="remove__item">
                <i class="bx bx-trash" onclick="eliminarproducto(${producto.id})"></i>
                </span>           
            </div>
        `;
        precioTotal+=(parseFloat(producto.precio)*parseInt(producto.cantidad));
    });

    document.querySelector(".carrito_total").innerHTML=precioTotal;
    document.getElementById("productoscarrito").innerHTML=template;
}

/* Opciones del modal de carrito */
function eliminarproducto(id) {
    carrito.splice(id, 1);
    mostrar_productos_carrito();
}
function aumentarcantidad(id) {
    carrito[id].cantidad+=1;
    document.querySelector("#cantp"+id).innerHTML=carrito[id].cantidad;
    mostrar_productos_carrito();
}

function reducircantidad(id) {
    cantidadDec=carrito[id].cantidad-1;
    if (cantidadDec>0) {
        carrito[id].cantidad=cantidadDec;
        document.querySelector("#cantp"+id).innerHTML=cantidadDec;
        mostrar_productos_carrito();
    }
}

function eliminartodoslosproductos() {
    carrito.splice(0);
    mostrar_productos_carrito();
}