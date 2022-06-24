/* Obtener productos de fichero JSON*/
function cargardatos() {
    fetch("datos/productos.json")
        .then(respuesta=>respuesta.json()) //Indicamos el formato en que se desea obtner la informacion
        .then(productos=> {
            var templatehtml=``;
            productos.forEach(producto => {
                var template=``;
                template+=`
                    <div class="producto">
                    <div class="image__container">
                    <img src="${producto.image}" alt="">
                    </div>
                    <div class="producto__footer">
                    <h1>${producto.title}</h1>
                    <div class="rating">
                        <span>
                `;

                for (let i = 0; i < parseInt(producto.qualification); i++) {
                    template+=`
                        <span>
                            <i class="bx bxs-star"></i>
                        </span>
                    `;
                }

                for (let i = 0; i < (5-parseInt(producto.qualification)); i++) {
                    template+=`
                        <span>
                            <i class="bx bx-star"></i>
                        </span>
                    `;
                }
                    
                template+=`
                        </span>
                    </div>
                    <div class="price">$${producto.price}.00</div>
                    </div>
                    <div class="bottom">
                    <div class="btn__group">
                        <a href="#" class="btn addToCart">Añadir carrito</a>
                        <a href="producto-detalles.html?id=${producto.id}" class="btn view">Vista</a>
                    </div>
                    </div>
                </div>
                `;

                templatehtml+=template;
            });
            document.getElementById("productos_panel").innerHTML=templatehtml;
        }) //Mostramos dicha informacion
}
cargardatos();

/* Obtener productos por busqueda de fichero JSON */
function busquedadatos(valor) {
    fetch("datos/productos.json")
        .then(respuesta=>respuesta.json()) //Indicamos el formato en que se desea obtner la informacion
        .then(productos=> {
            var templatehtml=``;

            productos.forEach(producto => {
                var nombre= producto.title;
                if (nombre.slice(0,valor.length)==valor) {
                    var template=``;
                    template+=`
                        <div class="producto">
                        <div class="image__container">
                        <img src="${producto.image}" alt="">
                        </div>
                        <div class="producto__footer">
                        <h1>${producto.title}</h1>
                        <div class="rating">
                            <span>
                    `;
    
                    for (let i = 0; i < parseInt(producto.qualification); i++) {
                        template+=`
                            <span>
                                <i class="bx bxs-star"></i>
                            </span>
                        `;
                    }
    
                    for (let i = 0; i < (5-parseInt(producto.qualification)); i++) {
                        template+=`
                            <span>
                                <i class="bx bx-star"></i>
                            </span>
                        `;
                    }
                        
                    template+=`
                            </span>
                        </div>
                        <div class="price">$${producto.price}.00</div>
                        </div>
                        <div class="bottom">
                        <div class="btn__group">
                            <a href="#" class="btn addToCart">Añadir carrito</a>
                            <a href="producto-detalles.html?id=${producto.id}" class="btn view">Vista</a>
                        </div>
                        </div>
                    </div>
                    `;
    
                    templatehtml+=template;
                }
            });

            document.getElementById("productos_panel").innerHTML=templatehtml;
        }) //Mostramos dicha informacion
}

/* Obtener productos por busqueda de categoria de fichero JSON */
function busquedadatoscategoria(categoriafiltro) {
    fetch("datos/productos.json")
        .then(respuesta=>respuesta.json()) //Indicamos el formato en que se desea obtner la informacion
        .then(productos=> {
            var templatehtml=``;

            productos.forEach(producto => {
                var categoria= producto.category;
                if (categoriafiltro==categoria) {
                    var template=``;
                    template+=`
                        <div class="producto">
                        <div class="image__container">
                        <img src="${producto.image}" alt="">
                        </div>
                        <div class="producto__footer">
                        <h1>${producto.title}</h1>
                        <div class="rating">
                            <span>
                    `;
    
                    for (let i = 0; i < parseInt(producto.qualification); i++) {
                        template+=`
                            <span>
                                <i class="bx bxs-star"></i>
                            </span>
                        `;
                    }
    
                    for (let i = 0; i < (5-parseInt(producto.qualification)); i++) {
                        template+=`
                            <span>
                                <i class="bx bx-star"></i>
                            </span>
                        `;
                    }
                        
                    template+=`
                            </span>
                        </div>
                        <div class="price">$${producto.price}.00</div>
                        </div>
                        <div class="bottom">
                        <div class="btn__group">
                            <a href="#" class="btn addToCart">Añadir carrito</a>
                            <a href="producto-detalles.html?id=${producto.id}" class="btn view">Vista</a>
                        </div>
                        </div>
                    </div>
                    `;
    
                    templatehtml+=template;
                }
            });

            document.getElementById("productos_panel").innerHTML=templatehtml;
        }) //Mostramos dicha informacion
}

function buscar() {
    var busqueda=document.getElementById("buscar").value;
    busquedadatos(busqueda);
    /* busqueda.length */
    /* texto.slice(0,4) */
}

var selection = document.getElementById("category");
function select() {
    var valor=selection.options[selection.selectedIndex].value;
    if (valor!="select") {
        busquedadatoscategoria(valor);
    } else {
        cargardatos();
    }
}