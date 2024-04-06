let totalCarrito = 0
let arrayCategorias = ["Novela Literaria", "Novela Contemporánea", "Poesia", "Juvenil", "Fantasia", "Empresa"]
class Producto {
    constructor(titulo, autor, categoria, precio) {
        this.titulo = titulo
        this.autor = autor
        this.categoria = categoria
        this.precio = precio
    }
}
let odisea = new Producto("Odisea", "Homero", arrayCategorias[2], 5000)
let donQuijoteDeLaMancha = new Producto("Don Quijote de la Mancha", "Miguel de Cervantes", arrayCategorias[0], 7400)
let elCodigoDaVinci = new Producto("El código Da Vinci", "Dan Brown", arrayCategorias[1], 8200)
let aliciaEnElPaisDeLasMaravillas = new Producto("Alicia en el pais de las maravilas", "Lewis Carroll", arrayCategorias[3], 7600)
let elHobbit = new Producto("El Hobbit", "J.R.R Tolkien", arrayCategorias[4], 22000)
let elAlquimista = new Producto("El Alquimista", "Paulo Coelho", arrayCategorias[1], 14000)
let orgulloYPrejuicio = new Producto("Orgullo y prejuicio", "Jane Austen", arrayCategorias[0], 8400)
let elGranGatsby = new Producto("El gran Gatsby", "Francis Scott Fitzgerald", arrayCategorias[0], 3100)
let lasAventurasDePinocho = new Producto("Las aventuras de pinocho", "Carlo Collodi", arrayCategorias[3], 12000)
let los7HabitosDeLaGenteAltamenteEfectiva = new Producto("Los 7 habitos de la gente altamente efectiva", "Stephen R. Covey", arrayCategorias[5], 24000)

let arrayLibros = [odisea, donQuijoteDeLaMancha, elCodigoDaVinci, aliciaEnElPaisDeLasMaravillas, elHobbit, elAlquimista, orgulloYPrejuicio, elGranGatsby, lasAventurasDePinocho, los7HabitosDeLaGenteAltamenteEfectiva]

console.log(arrayLibros);

let librosFiltrados

function filtrarPorCategoria() {
    for (let i = 0; i < arrayCategorias.length; i++) {
        librosFiltrados = arrayLibros.filter ((el)=>el.categoria == arrayCategorias [i]);
        console.log(librosFiltrados);
    }
}
filtrarPorCategoria()

function comprar() {
    let opciones = parseInt(prompt(`¡Buenas noticias! Esta semana tenemos un 15% de descuento en todos nuestros libros (El descuento se aplicará al calcular el total del carrito). Esperamos que disfrute su compra :)\nPulse 1 si desea comprar el libro: ${arrayLibros[0].titulo} Autor: ${arrayLibros[0].autor} Precio: $${arrayLibros[0].precio}\nPulse 2 si desea comprar el libro: ${arrayLibros[1].titulo} Autor: ${arrayLibros[1].autor} Precio: $${arrayLibros[1].precio}\nPulse 3 si desea comprar el libro: ${arrayLibros[2].titulo} Autor: ${arrayLibros[2].autor} Precio: $${arrayLibros[2].precio}\nPulse 4 si desea comprar el libro: ${arrayLibros[3].titulo} Autor: ${arrayLibros[3].autor} Precio: $${arrayLibros[3].precio}\nPulse 5 si desea comprar el libro: ${arrayLibros[4].titulo} Autor: ${arrayLibros[4].autor} Precio: $${arrayLibros[4].precio}\nPulse 6 si desea comprar el libro: ${arrayLibros[5].titulo} Autor: ${arrayLibros[5].autor} Precio: $${arrayLibros[5].precio}\nPulse 7 si desea comprar el libro: ${arrayLibros[6].titulo} Autor: ${arrayLibros[6].autor} Precio: $${arrayLibros[6].precio}\nPulse 8 si desea comprar el libro: ${arrayLibros[7].titulo} Autor: ${arrayLibros[7].autor} Precio: $${arrayLibros[7].precio}\nPulse 9 si desea comprar el libro: ${arrayLibros[8].titulo} Autor: ${arrayLibros[8].autor} Precio: $${arrayLibros[8].precio}\nPulse 10 si desea comprar el libro: ${arrayLibros[9].titulo} Autor: ${arrayLibros[9].autor} Precio: ${arrayLibros[9].precio}\nPulse 11 si desea ordenar la lista en orden alfabetico de la A a la Z`))

    while (opciones < 1 || opciones > 11) {
        opciones = parseInt(prompt(`¡Buenas noticias! Esta semana tenemos un 15% de descuento en todos nuestros libros (El descuento se aplicará al calcular el total del carrito). Esperamos que disfrute su compra :)\nPulse 1 si desea comprar el libro: ${arrayLibros[0].titulo} Autor: ${arrayLibros[0].autor} Precio: $${arrayLibros[0].precio}\nPulse 2 si desea comprar el libro: ${arrayLibros[1].titulo} Autor: ${arrayLibros[1].autor} Precio: $${arrayLibros[1].precio}\nPulse 3 si desea comprar el libro: ${arrayLibros[2].titulo} Autor: ${arrayLibros[2].autor} Precio: $${arrayLibros[2].precio}\nPulse 4 si desea comprar el libro: ${arrayLibros[3].titulo} Autor: ${arrayLibros[3].autor} Precio: $${arrayLibros[3].precio}\nPulse 5 si desea comprar el libro: ${arrayLibros[4].titulo} Autor: ${arrayLibros[4].autor} Precio: $${arrayLibros[4].precio}\nPulse 6 si desea comprar el libro: ${arrayLibros[5].titulo} Autor: ${arrayLibros[5].autor} Precio: $${arrayLibros[5].precio}\nPulse 7 si desea comprar el libro: ${arrayLibros[6].titulo} Autor: ${arrayLibros[6].autor} Precio: $${arrayLibros[6].precio}\nPulse 8 si desea comprar el libro: ${arrayLibros[7].titulo} Autor: ${arrayLibros[7].autor} Precio: $${arrayLibros[7].precio}\nPulse 9 si desea comprar el libro: ${arrayLibros[8].titulo} Autor: ${arrayLibros[8].autor} Precio: $${arrayLibros[8].precio}\nPulse 10 si desea comprar el libro: ${arrayLibros[9].titulo} Autor: ${arrayLibros[9].autor} Precio: ${arrayLibros[9].precio}\nPulse 11 si desea ordenar la lista en orden alfabetico de la A a la Z`))
    }
    let productoElegido;
    let productoPrecioFinal = arrayLibros.map((producto) => {
        return {
            titulo: producto.titulo,
            precio: producto.precio - (producto.precio * 0.25)
        }
    })
    if (opciones == 1) {
        productoElegido = productoPrecioFinal[0]
        totalCarrito += productoPrecioFinal[0].precio
    }
    else if (opciones == 2) {
        productoElegido = productoPrecioFinal[1]
        totalCarrito += productoPrecioFinal[1].precio
    }
    else if (opciones == 3) {
        productoElegido = productoPrecioFinal[2]
        totalCarrito += productoPrecioFinal[2].precio
    }
    else if (opciones == 4) {
        productoElegido = productoPrecioFinal[3]
        totalCarrito += productoPrecioFinal[3].precio
    }
    else if (opciones == 5) {
        productoElegido = productoPrecioFinal[4]
        totalCarrito += productoPrecioFinal[4].precio
    }
    else if (opciones == 6) {
        productoElegido = productoPrecioFinal[5]
        totalCarrito += productoPrecioFinal[5].precio
    }
    else if (opciones == 7) {
        productoElegido = productoPrecioFinal[6]
        totalCarrito += productoPrecioFinal[6].precio
    }
    else if (opciones == 8) {
        productoElegido = productoPrecioFinal[7]
        totalCarrito += productoPrecioFinal[7].precio
    }
    else if (opciones == 9) {
        productoElegido = productoPrecioFinal[8]
        totalCarrito += productoPrecioFinal[8].precio
    }
    else if (opciones == 10) {
        productoElegido = productoPrecioFinal[9]
        totalCarrito += productoPrecioFinal[9].precio
    }
    else if (opciones == 11) {
        arrayLibros.sort((a, b) => {
            if (a.titulo > b.titulo) {
                return 1;
            }
            else if (a.titulo < b.titulo) {
                return -1;
            }
            return 0;
        })
        opciones = parseInt(prompt(`¡Buenas noticias! Esta semana tenemos un 15% de descuento en todos nuestros libros (El descuento se aplicara al calcular el total del carrito). Esperamos que disfrute su compra :)\nPulse 1 si desea comprar el libro: ${arrayLibros[0].titulo} Autor: ${arrayLibros[0].autor} Precio: $${arrayLibros[0].precio}\nPulse 2 si desea comprar el libro: ${arrayLibros[1].titulo} Autor: ${arrayLibros[1].autor} Precio: $${arrayLibros[1].precio}\nPulse 3 si desea comprar el libro: ${arrayLibros[2].titulo} Autor: ${arrayLibros[2].autor} Precio: $${arrayLibros[2].precio}\nPulse 4 si desea comprar el libro: ${arrayLibros[3].titulo} Autor: ${arrayLibros[3].autor} Precio: $${arrayLibros[3].precio}\nPulse 5 si desea comprar el libro: ${arrayLibros[4].titulo} Autor: ${arrayLibros[4].autor} Precio: $${arrayLibros[4].precio}\nPulse 6 si desea comprar el libro: ${arrayLibros[5].titulo} Autor: ${arrayLibros[5].autor} Precio: $${arrayLibros[5].precio}\nPulse 7 si desea comprar el libro: ${arrayLibros[6].titulo} Autor: ${arrayLibros[6].autor} Precio: $${arrayLibros[6].precio}\nPulse 8 si desea comprar el libro: ${arrayLibros[7].titulo} Autor: ${arrayLibros[7].autor} Precio: $${arrayLibros[7].precio}\nPulse 9 si desea comprar el libro: ${arrayLibros[8].titulo} Autor: ${arrayLibros[8].autor} Precio: $${arrayLibros[8].precio}\nPulse 10 si desea comprar el libro: ${arrayLibros[9].titulo} Autor: ${arrayLibros[9].autor} Precio: ${arrayLibros[9].precio}`))

        while (opciones < 1 || opciones > 10) {
            opciones = parseInt(prompt(`¡Buenas noticias! Esta semana tenemos un 15% de descuento en todos nuestros libros (El descuento se aplicara al calcular el total del carrito). Esperamos que disfrute su compra :)\nPulse 1 si desea comprar el libro: ${arrayLibros[0].titulo} Autor: ${arrayLibros[0].autor} Precio: $${arrayLibros[0].precio}\nPulse 2 si desea comprar el libro: ${arrayLibros[1].titulo} Autor: ${arrayLibros[1].autor} Precio: $${arrayLibros[1].precio}\nPulse 3 si desea comprar el libro: ${arrayLibros[2].titulo} Autor: ${arrayLibros[2].autor} Precio: $${arrayLibros[2].precio}\nPulse 4 si desea comprar el libro: ${arrayLibros[3].titulo} Autor: ${arrayLibros[3].autor} Precio: $${arrayLibros[3].precio}\nPulse 5 si desea comprar el libro: ${arrayLibros[4].titulo} Autor: ${arrayLibros[4].autor} Precio: $${arrayLibros[4].precio}\nPulse 6 si desea comprar el libro: ${arrayLibros[5].titulo} Autor: ${arrayLibros[5].autor} Precio: $${arrayLibros[5].precio}\nPulse 7 si desea comprar el libro: ${arrayLibros[6].titulo} Autor: ${arrayLibros[6].autor} Precio: $${arrayLibros[6].precio}\nPulse 8 si desea comprar el libro: ${arrayLibros[7].titulo} Autor: ${arrayLibros[7].autor} Precio: $${arrayLibros[7].precio}\nPulse 9 si desea comprar el libro: ${arrayLibros[8].titulo} Autor: ${arrayLibros[8].autor} Precio: $${arrayLibros[8].precio}\nPulse 10 si desea comprar el libro: ${arrayLibros[9].titulo} Autor: ${arrayLibros[9].autor} Precio: ${arrayLibros[9].precio}`))
        }

        productoPrecioFinal = arrayLibros.map((producto) => {
            return {
                titulo: producto.titulo,
                precio: producto.precio - (producto.precio * 0.25)
            }
        })

        if (opciones == 1) {
            productoElegido = productoPrecioFinal[0]
            totalCarrito += productoPrecioFinal[0].precio
        }
        else if (opciones == 2) {
            productoElegido = productoPrecioFinal[1]
            totalCarrito += productoPrecioFinal[1].precio
        }
        else if (opciones == 3) {
            productoElegido = productoPrecioFinal[2]
            totalCarrito += productoPrecioFinal[2].precio
        }
        else if (opciones == 4) {
            productoElegido = productoPrecioFinal[3]
            totalCarrito += productoPrecioFinal[3].precio
        }
        else if (opciones == 5) {
            productoElegido = productoPrecioFinal[4]
            totalCarrito += productoPrecioFinal[4].precio
        }
        else if (opciones == 6) {
            productoElegido = productoPrecioFinal[5]
            totalCarrito += productoPrecioFinal[5].precio
        }
        else if (opciones == 7) {
            productoElegido = productoPrecioFinal[6]
            totalCarrito += productoPrecioFinal[6].precio
        }
        else if (opciones == 8) {
            productoElegido = productoPrecioFinal[7]
            totalCarrito += productoPrecioFinal[7].precio
        }
        else if (opciones == 9) {
            productoElegido = productoPrecioFinal[8]
            totalCarrito += productoPrecioFinal[8].precio
        }
        else if (opciones == 10) {
            productoElegido = productoPrecioFinal[9]
            totalCarrito += productoPrecioFinal[9].precio
        }
    }
    let confirmacion = confirm(`Usted eligió ${productoElegido.titulo} y su precio final con el descuento aplicado es de $${productoElegido.precio} ¿Desea agregarlo al carrito?`)
    if (confirmacion == true) {
        let confirmacion2 = confirm("El producto se agregó al carrito ¿Desea comprar algo más?")
        if (confirmacion2 == true) {
            comprar()
        } else {
            let confirmacion3 = confirm(`El total es de ${totalCarrito} ¿Desea pagar?`)
            if (confirmacion3 == true) {
                alert("¡Muchas gracias por su compra!")
            } else {
                alert("De acuerdo ¡Nos vemos pronto!")
            }
        }
    } else {
        let confirmacion4 = confirm("¿Va a seguir comprando?")
        if (confirmacion4 == true) {
            comprar()
        } else {
            alert("De acuerdo ¡Nos vemos pronto!")
        }
    }
}
comprar()
