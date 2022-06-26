/* Agregar al carrito */
function añadir_carrito(id,nombre,precio,imagen) {
    
    if (carrito[id]) {
        alert("Ya se encuentra agregado en el carrito")
    }else{
        carrito[id]={id,nombre,precio,imagen};
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
                    <i class="bx bxs-up-arrow"></i>
                </span>
                <p>1</p>
                <span>
                    <i class="bx bxs-down-arrow"></i>
                </span>
                </div>
                <span class="remove__item">
                <i class="bx bx-trash"></i>
                </span>           
            </div>
        `;
        precioTotal+=parseFloat(producto.precio);
    });

    document.querySelector(".carrito_total").innerHTML=precioTotal;
    document.getElementById("productoscarrito").innerHTML=template;
}