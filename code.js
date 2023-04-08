// Acá se elige el destino, el valor del vuelo
const destinos = [
    {destino:"francia",precio:300000},
    {destino:"españa",precio:350000},
    {destino:"italia",precio:400000},
    {destino:"amsterdam",precio:450000}
]

const paises = buscarPaises(destinos)

let destinoSeleccionado


function buscarPaises(destinos){
    const paisesEncontrados = []
    for (pais of destinos){
        paisesEncontrados.push(pais.destino)
    }
    return paisesEncontrados
}

console.log(paises)

let contenedorPais = document.getElementById("pais")
crearSelect("su destino", contenedorPais,paises,"selectDestino")

function elegirPais (){
    const selectDestino = document.getElementById("selectDestino")
    selectDestino.addEventListener("change",elegirDestino)
}


function elegirDestino(e){
    let destinoElegido = e.target.value
    destinoSeleccionado = destinos.find((destinos)=>destinos.destino === destinoElegido)
    console.log(destinoSeleccionado);

}

// Acá se selecciona la estadia
const estadia = [
    {dias:10},
    {dias:15},
    {dias:20},
    {dias:30},
    {dias:40},
    {dias:50},
    {dias:60}
]

const cantidadDias = buscarDias(estadia)

let diasElegidos

function buscarDias(estadia){
    const diasEncontrados = []
    for(dia of estadia){
        diasEncontrados.push(dia.dias)
    }
    return diasEncontrados
}
console.log(cantidadDias)

let contenedorDias = document.getElementById("cantidad-dias")
crearSelect("la cantidad de dias",contenedorDias,cantidadDias,"selectDias")

function elegirDias (){
    const Dias = document.getElementById("selectDias")
    selectDias.addEventListener("change",elegirEstadia)
}

function elegirEstadia(e){
    diasElegidos = parseInt(e.target.value)
    console.log(diasElegidos)
}


// Aca se selecciona la cantidad de pasajeros
const pasajeros = [
    {pasajero:1},
    {pasajero:2},
    {pasajero:3},
    {pasajero:4},
    {pasajero:5},
    {pasajero:6},
    {pasajero:7},
    {pasajero:8},
    {pasajero:9},
    {pasajero:10},
]

const cantidadPasajeros = buscarPasajeros(pasajeros)

let personasElegidas

function buscarPasajeros(pasajeros){
    const pasajerosEncontrados = []
    for(viajeros of pasajeros){
        pasajerosEncontrados.push(viajeros.pasajero)
    }
    return pasajerosEncontrados
}

console.log(cantidadPasajeros)

let contenedorPasajeros = document.getElementById("cantidad-pasajeros")
crearSelect("la cantidad de pasajeros",contenedorPasajeros,cantidadPasajeros,"selectPasajeros")

function elegirPasajeros (){
    const selectPasajeros = document.getElementById("selectPasajeros")
    selectPasajeros.addEventListener("change",elegirPersonas)
}

function elegirPersonas(e){
    personasElegidas = parseInt(e.target.value)
    console.log(personasElegidas)
}


// Acá se selecciona la categoría del hotel

const hoteles = [
    {categoria:"basica",precio:10000},
    {categoria:"intermedia",precio:20000},
    {categoria:"superior",precio:30000}
]

const categorias = buscarCategorias(hoteles)

let hotelSeleccionado

function buscarCategorias(hoteles){
    const categoriasEncontradas = []
    for(nivel of hoteles){
        categoriasEncontradas.push(nivel.categoria)
    }
    return categoriasEncontradas
}
console.log(categorias)

let contenedorCategorias = document.getElementById("categoria-hotel")
crearSelect("la categoria",contenedorCategorias,categorias,"selectHotel")

function elegirHotel (){
    const selectHotel = document.getElementById("selectHotel")
    selectHotel.addEventListener("change",elegirHoteles)
}

function elegirHoteles(e){
    hotelElegido = e.target.value
    hotelSeleccionado = hoteles.find((hoteles)=>hoteles.categoria === hotelElegido)
    console.log(hotelSeleccionado)
}



// Acá se selecciona la cantidad de excursiones

const excursiones = [
    {excursion:"Relax",precio:50000},
    {excursion:"Medium",precio:75000},
    {excursion:"Full",precio:120000}
]

const tipoExcursion = buscarExcursiones(excursiones)

let excSeleccionada

function buscarExcursiones(excursiones){
    const excursionesEncontradas = []
    for(tipo of excursiones){
        excursionesEncontradas.push(tipo.excursion)
    }
    return excursionesEncontradas
}
console.log(tipoExcursion)

let contenedorExcursiones = document.getElementById("categoria-exc")
crearSelect("el tipo de excursion",contenedorExcursiones,tipoExcursion,"selectExc")


function elegirExcursion (){
    const selectExc = document.getElementById("selectExc")
    selectExc.addEventListener("change",elegirExc)
}


function elegirExc(e){
    excElegida = e.target.value
    excSeleccionada = excursiones.find((excursiones)=>excursiones.excursion === excElegida)
    console.log(excSeleccionada)
}


let botonEnviar = document.getElementById("cotizar")
botonEnviar.addEventListener("click",mostrarPrecio)



function mostrarPrecio(){
    localStorage.setItem("destino", JSON.stringify(destinoSeleccionado))
    localStorage.setItem("dias", JSON.stringify(diasElegidos))
    localStorage.setItem("pasajeros", JSON.stringify(personasElegidas))
    localStorage.setItem("hotel", JSON.stringify(hotelSeleccionado))
    localStorage.setItem("excursion", JSON.stringify(excSeleccionada))
    if(destinoSeleccionado){
        let timerInterval
        Swal.fire({
            title: 'Estamos cotizando su viaje!',
            html: 'Solo nos tomará unos segundos',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
          setTimeout(() => {
        let multiplica = destinoSeleccionado.precio + (diasElegidos * personasElegidas * hotelSeleccionado.precio) + excSeleccionada.precio
        let contenedorCotizar = document.getElementById("resultado")
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = `
        el precio de su viaje a ${destinoSeleccionado.destino} por ${diasElegidos} días, para ${personasElegidas} personas, con una estadía 
       ${hotelSeleccionado.categoria} y una excursión ${excSeleccionada.excursion} es de: ${multiplica} `
        contenedorCotizar.append(cotizacion);
        console.log (multiplica)
        }, 2000);
        let confirmar = document.getElementById("confirmar")
        confirmar.addEventListener("click",mensajeConfirmar)
        
        function mensajeConfirmar(){
            Swal.fire({
                icon: 'success',
                title: 'Viaje confirmado!',
                text: 'Te llegará un mail con toda la información',
            })
        }

        let cancelar = document.getElementById("cancelar")
        cancelar.addEventListener("click",cancelacion)

        function cancelacion(){
            Swal.fire({
                title: 'Estás seguro que quieres cancelar este viaje?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar viaje'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Cancelado!',
                    'Su viaje ha sido cancelado.',
                    'success'
                  )
                }
              })
        }
    }
    
}

// let destinoLocal = JSON.parse(localStorage.getItem("destino"));
// let diasLocal = JSON.parse(localStorage.getItem("dias"));
// let pasajeroLocal = JSON.parse(localStorage.getItem("pasajeros"));
// let hoteLocal = JSON.parse(localStorage.getItem("hotel"));
// let excLocal = JSON.parse(localStorage.getItem("excursion"));


function crearSelect(tipoSelect,contenedor,array,idSelect){
    let select = document.createElement("select")
    select.innerHTML = `
    <option value="">Seleccione ${tipoSelect} </option>
    ${
        array.map((element)=>{
            return(
            `<option value=${element}>${element}</option>`
            )
        })

    }
    `
    select.setAttribute("id",idSelect)
    contenedor.append(select)
}

elegirPais()

elegirDias()

elegirPasajeros()

elegirHotel()

elegirExcursion()

mostrarPrecio()