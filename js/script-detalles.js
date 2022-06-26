const url=window.location.href/* Obtener la url de la pagina */

var idproducto=url.split("=")[1];/* Obtener el valor del POST */

/* Consultar y buscar producto seleccionado para la vista */
fetch("datos/productos.json")
        .then(respuesta=>respuesta.json()) //Indicamos el formato en que se desea obtner la informacion
        .then(productos=> {
            var productoMostrar=null;
            productos.forEach(producto => {
                if (producto.id==idproducto) {
                    productoMostrar=producto;
                }
            });
            console.log(productoMostrar);
            document.getElementById("nombreproducto").innerHTML=productoMostrar.title;
            document.getElementById("precio").innerHTML=productoMostrar.price;
            document.getElementById("imagen").setAttribute("src",productoMostrar.image);
            let template=``;
            for (let i = 0; i < parseInt(productoMostrar.qualification); i++) {
                template+=`
                    <span>
                        <i class="bx bxs-star"></i>
                    </span>
                `;   
            }

            for (let i = 0; i < (5-parseInt(productoMostrar.qualification)); i++) {
                template+=`
                    <span>
                        <i class="bx bx-star"></i>
                    </span>
                `;
            }
            document.getElementById("descripcion1").innerHTML=productoMostrar.description1;
            document.getElementById("descripcion2").innerHTML=productoMostrar.description2;
        }) //Mostramos dicha informacion




        function mostrar_carrito() {
            document.getElementById("carrito__overlay").classList.add("show");
            document.getElementById("carrito").classList.add("show");
        }
        
        function ocultar_carrito() {
            document.getElementById("carrito__overlay").classList.remove("show");
            document.getElementById("carrito").classList.remove("show");
        }