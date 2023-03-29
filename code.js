// Acá se elige el destino
const destinos = [
    {destino:"francia",precio:"120000"},
    {destino:"españa",precio:"125000"},
    {destino:"italia",precio:"115000"},
    {destino:"amsterdam",precio:"145000"}
]

const paises = buscarPaises(destinos)

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
    const destinoElegido = e.target.value
    console.log(destinoElegido)
}

elegirPais()

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
    const diasElegidos = e.target.value
    console.log(diasElegidos)
}

elegirDias()



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
    const personasElegidas = e.target.value
    console.log(personasElegidas)
}

elegirPasajeros()



// Acá se selecciona la categoría del hotel

const hoteles = [
    {categoria:"basica",precio:30000},
    {categoria:"intermedia",precio:45000},
    {categoria:"superior",precio:55000}
]

const categorias = buscarCategorias(hoteles)

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
    const hotelElegido = e.target.value
    console.log(hotelElegido)
}

elegirHotel()

// Acá se selecciona la cantidad de excursiones

const excursiones = [
    {excursion:"Relax",precio:50000},
    {excursion:"Medium",precio:75000},
    {excursion:"Full",precio:120000}
]

const tipoExcursion = buscarExcursiones(excursiones)

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
    const excElegida = e.target.value
    console.log(excElegida)
}

elegirExcursion()












// function confirmarViaje(){
//     let botonConfirmar = document.getElementById("confirmar")
//     botonConfirmar.addEventListener(`click`,mostrarPrecio)
// }



// function elegirDias (){
//     const selectDias = document.getElementById("selectDias")
//     selectDias.addEventListener("change",elegirEstadia)
// }

// function elegirEstadia(e){
//     const diasElegidos = e.target.value
//     console.log(diasElegidos)
// }

// elegirDias()






// const viajeTotal = []

// for (let viaje = 0; viaje < 2; viaje++){
//     if (destino1[viaje] === "francia"){
//         let multiplica = cantidadPasajeros * destino1[1] * cantidadDias
//         viajeTotal.push(multiplica)
//         alert("su viaje sin estadía costará: " + multiplica);
//     } else if (destino2[viaje] === "españa"){
//             let multiplica = cantidadPasajeros * destino2[1] * cantidadDias
//             viajeTotal.push(multiplica)
//             alert("su viaje sin estadía costará: " + multiplica);
//     }else if (destino3[viaje] === "italia"){
//         let multiplica = cantidadPasajeros * destino3[1] * cantidadDias
//         viajeTotal.push(multiplica)
//         alert("su viaje sin estadía costará: " + multiplica);
//     }else if (destino4[viaje] === "amsterdam"){
//         let multiplica = cantidadPasajeros * destino4[1] * cantidadDias
//         viajeTotal.push(multiplica)
//         alert("su viaje sin estadía costará: " + multiplica);
// }
// }
// // fin 


// // Acá se elige el tipo de hotel 

// let elegirHotel = prompt("Elija el tipo de hotel: basico, intermedio o superior");

// let hotel1 = [ "basico", 15000];
// let hotel2 = ["intermedio", 25000];
// let hotel3 = ["superior", 35000];

// const hotelValor = []

// for (let hotel = 0; hotel < 2; hotel++){
//     if (hotel1[hotel] === "basico"){
//         let multiplica = hotel1[1] * cantidadPasajeros * cantidadDias
//         hotelValor.push(multiplica)
//         alert("La estadía costará " + multiplica);
//     }else if (hotel2[hotel] === "intermedio"){
//         let multiplica = hotel2[1] * cantidadPasajeros * cantidadDias
//         hotelValor.push(multiplica)
//         alert("La estadía costará " + multiplica);
//     } else if (hotel3[hotel] === "superior"){
//         let multiplica = hotel3[1] * cantidadPasajeros * cantidadDias
//         hotelValor.push(multiplica)
//         alert("La estadía costará " + multiplica);
// }
// }
// // fin tipo de hotel 

// // Acá se calcula el valor total del viaje 

// const totalFinal = [viajeTotal, hotelValor];

// function sumar(array){
//     for (const totales of array){
//         let sumaFinal = parseInt(viajeTotal) + parseInt(hotelValor)
//         alert("El total de su viaje es: "+ sumaFinal);
//     }
// }

// sumar(totalFinal)



// // Acá hace un resumen del viaje 

// let nombresDePasajeros = prompt("Ingrese los nombres de los pasajeros:");
// let nombresPasajeros = [nombresDePasajeros];

// function resumen (nombres){
//     for (const nombresAAgregar of nombres){
//         alert("Felicitaciones " + nombres + " , ha reservado exitosamente su viaje!")
//     } 
// }

// resumen(nombresDePasajeros)