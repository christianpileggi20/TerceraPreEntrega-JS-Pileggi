let contenidoCarrito = document.getElementById("contenidoCarrito")
let verCarrito = document.getElementById("verCarrito")
let ventanaContenedor = document.getElementById("ventana-contenedor")
let productos = [
    {id: 1, nombre:"Cremoso Punta del Agua" , precioPorKg: 1500, img: "https://d22fxaf9t8d39k.cloudfront.net/15f05ea900edf5d10aafad2e49f0070534328afe451eacd1d73307b80d95df0568416.jpeg"},
    {id: 2, nombre:"Cocido San Jose" , precioPorKg: 2000, img: "https://alimentossanjose.com.ar/wp-content/uploads/2021/12/Natural-reducido-en-sodio.png"},
    {id: 3, nombre:"Jamon Cocido" , precioPorKg: 2500, img: "https://maricre.com.ar/wp-content/uploads/2020/07/149.jpg"},
    {id: 4, nombre:"Jamon Crudo" , precioPorKg: 3500, img:"https://www.frigorificorecreo.com/wp-content/uploads/2018/08/Jamo%CC%81n-Crudo-Recreo-para-web.png"},
    {id: 5, nombre:"Barra de queso Cremigal", precioPorKg: 2000, img:"https://i0.wp.com/cremigal.com/wp-content/uploads/2020/05/queso-tybo-1.png?fit=2500%2C2500&ssl=1"},
    {id: 6, nombre:"Jamon Natural San Jose" , precioPorKg: 3000, img: "https://www.clarin.com/img/2020/11/09/g-Xutf_ux_720x0__1.jpg"},
    {id: 7, nombre:"Bondiola" , precioPorKg: 1800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmx-Jh0EbauHjFaEb6Zcldzk-yv-oib3QPYovscopvdl6oDMIFgnFGhECBfOZJWIjfY&usqp=CAU"},
    {id: 8, nombre:"Salame Tipo Milan Bierzo" , precioPorKg: 2500, img: "https://distribuidorasabatini.com/app/files/company_23/products/161843_salamemilanelbierzo.jpg"},
    ]


let carrito =  JSON.parse(localStorage.getItem("carrito")) || []

productos.forEach((producto) => {
    let contenido = document.createElement("div")
    contenido.className = "card"
    contenido.innerHTML = `
    <img src="${producto.img}">
    <h2>${producto.nombre}</h3>
    <p class="precio">${producto.precioPorKg}$</p3>
    `

    contenidoCarrito.append(contenido)

    let comprar = document.createElement("button")
    comprar.innerText = "Agregar al carrito"
    comprar.className = "comprar"

    contenido.append(comprar)

    comprar.addEventListener("click", () => {
        carrito.push({
            id: producto.id,
            img: producto.img,
            precioPorKg: producto.precioPorKg,
            nombre: producto.nombre,
         })
         guardarLocal ()
    })
})


verCarrito.addEventListener("click", () => {
    ventanaContenedor.innerHTML = ""
    ventanaContenedor.style.display = "flex"
    let ventanaHeader = document.createElement("div")
    ventanaHeader.className = "ventana-header"
    ventanaHeader.innerHTML = `
    <h1 class="ventana-header-item"> Carrito </h1>
    `
    ventanaContenedor.append(ventanaHeader)
    let ventanaBoton = document.createElement("h1")
    ventanaBoton.className = "ventana-header-boton"

    ventanaBoton.addEventListener("click", () => {
        ventanaContenedor.style.display = "none"
    },

    ventanaHeader.append(ventanaBoton));


    carrito.forEach((producto) => {
    let carritoContenido = document.createElement("div")
    carritoContenido.className = "ventana-contenedor"
    carritoContenido.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p>${producto.precioPorKg} $</p>
    `

    ventanaContenedor.append(carritoContenido)
    })

    let total = carrito.reduce((acc, el) => acc + el.precioPorKg, 0)
    
    let totalCompra = document.createElement("div")
    totalCompra.className = "total-contenido"
    totalCompra.innerHTML = `Total a pagar: ${total} $`
    totalCompra.className = "totalCompra"
    ventanaContenedor.append(totalCompra)

    
})



let guardarLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


JSON.parse(localStorage.getItem("carrito"))


