/* Variables locales */
var carrito=[];

/* Funcion para poder abir ventana */
function abrirpopup(url,ancho,alto){
	
	//Ajustar horizontalmente
	var x=(screen.width/2)-(ancho/2);
	//Ajustar verticalmente
	var y=(screen.height/2)-(alto/2);
	window.open(url, 'popup', 'width=' + ancho + ', height=' + alto + ', left=' + x + ', top=' + y +'');
}
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
                        <a href="#" class="btn addToCart" onclick="añadir_carrito('${producto.id}','${producto.title}','${producto.price}')">${carrito[producto.id] ? "En el carrito" : "Añadir carrito"}</a>
                        <a href="#" class="btn view" onclick="abrirpopup('producto-detalles.html?id=${producto.id}',1500,800)">Vista</a>
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
                nombre= nombre.toLowerCase();
                if (nombre.slice(0,valor.length)==valor.toLowerCase()) {
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
                            <a href="#" class="btn view" onclick="abrirpopup('producto-detalles.html?id=${producto.id}',1500,800)">Vista</a>
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
                            <a href="#" class="btn view" onclick="abrirpopup('producto-detalles.html?id=${producto.id}',1500,800)">Vista</a>
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

/* Buscar productos INPUT */
function buscar() {
    var busqueda=document.getElementById("buscar").value;
    busquedadatos(busqueda);
    /* busqueda.length */
    /* texto.slice(0,4) */
}

/* Buscar productos SELECT */
var selection = document.getElementById("category");
function select() {
    var valor=selection.options[selection.selectedIndex].value;
    if (valor!="select") {
        busquedadatoscategoria(valor);
    } else {
        cargardatos();
    }
    document.getElementById("buscar").value="";
}


/* Agregar al carrito */
function añadir_carrito(id,nombre,precio) {
    carrito[id]={id,nombre,precio};
    console.log(carrito[2]);
    cargardatos();
}


/* Mostrar modaol de carrito */
function mostrar_carrito() {
    document.getElementById("carrito__overlay").classList.add("show");
    document.getElementById("carrito").classList.add("show");
}

/* Oculatamos modaol de carrito */
function ocultar_carrito() {
    document.getElementById("carrito__overlay").classList.remove("show");
    document.getElementById("carrito").classList.remove("show");
}

