const url=window.location.href

var idproducto=url.split("=")[1];


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