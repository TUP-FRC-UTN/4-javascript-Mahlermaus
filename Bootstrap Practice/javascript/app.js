//clases
function Jugador(nombre, posicion, camiseta, estadoFisico, partidos, plantel) {
  this.nombre = nombre;
  this.posicion = posicion;
  this.camiseta = camiseta;
  this.estadoFisico = estadoFisico;
  this.partidos = partidos;
  this.plantel = plantel;
}

function Equipo(nombre, cantidad) {
  this.nombre = nombre;
  this.cantidad = cantidad;
}

function UI() {}

// Funciones de UI

// Agregar Equipos
UI.prototype.agregarEquipo = function (equipo) {
  // Agregar a la tabla el equipo
  const tabla = document.getElementById("dtListaEquipos");
  const fila = document.createElement("tr");
  fila.innerHTML = `
        <td>${equipo.nombre}</td>
        <td>${equipo.cantidad}</td>
        <td><a href="#jugadores" class="listaJugadores"><i class="fa-solid fa-table-list"></i></a></td>
        <td><a href="#" class="listaJugadores"><i class="fa-solid fa-trash-can"></i></a></td>
    `;
  tabla.appendChild(fila);

  // Agregar al select -cbo
  const cboEquipos = document.getElementById("cboEquipos");
  const option = document.createElement("option");
  const value = `${equipo.nombre}`;
  option.value = value;
  option.text = value;
  cboEquipos.appendChild(option);
};

UI.prototype.limpiarCamposEquipo = function () {
  const txtNombreEquipo = (document.getElementById("txtNombreEquipo").value =
    "");
  const txtCantidadJugadores = (document.getElementById(
    "txtCantidadJugadores"
  ).value = "");
};
UI.prototype.limpiarCamposJugador = function () {
  const cboEquipos = (document.getElementById("cboEquipos").value = 0);
  const txtNombreJugador = document.getElementById("txtNombreJugador"),
    value = "";
  const cboPosicion = (document.getElementById("cboPosicion").value = 0);
  const txtNroCamiseta = (document.getElementById("txtNroCamiseta").value = "");
  const txtEstadoFisico = (document.getElementById("txtEstadoFisico").value =
    "");
  const txtPartidosJugados = (document.getElementById(
    "txtPartidosJugados"
  ).value = "");
};
// Dar funcionalidad a boton Crear Equipo
document
  .getElementById("btnCrearEquipo")
  .addEventListener("click", function (e) {
    const txtNombreEquipo = document.getElementById("txtNombreEquipo").value;
    const txtCantidadJugadores = document.getElementById(
      "txtCantidadJugadores"
    ).value;

    const ui = new UI();
    if (validarEquipo()) {
      const equipo = new Equipo(txtNombreEquipo, txtCantidadJugadores);
      ui.agregarEquipo(equipo);
      ui.limpiarCamposEquipo();
    }

    // window.localStorage.setItem("equipo", JSON.stringify(equipo));

    // const store = new Store();
    // store.agregarEquipo(equipo);

    e.preventDefault();
  });

Jugador.prototype.agregarJugador = function (jugador) {
  const cboEquipos = document.getElementById("cboEquipos");
  const txtNombreJugador = document.getElementById("txtNombreJugador");
  const cboPosicion = document.getElementById("cboPosicion");
  const txtNroCamiseta = document.getElementById("txtNroCamiseta");
  const txtEstadoFisico = document.getElementById("txtEstadoFisico");
  const txtPartidosJugados = document.getElementById("txtPartidosJugados");
  const btnAgregarJugador = document.getElementById("btnAgregarJugador");
};

function validarEquipo() {
  const txtNombreEquipo = document.getElementById("txtNombreEquipo");
  const txtCantidadJugadores = document.getElementById("txtCantidadJugadores");

  if (txtNombreEquipo.value === "" /* o si ya existe */) {
    swal("Ingrese el nombre del EQUIPO");
    txtNombreEquipo.focus();
    return false;
  }
  if (
    txtCantidadJugadores.value === "" ||
    txtCantidadJugadores.value < 3 ||
    txtCantidadJugadores.value > 20
  ) {
    swal("Cuantos jugadores va a tener el equipo? Minimo: 3 y Maximo : 20");
    txtCantidadJugadores.focus();
    return false;
  }
  return true;
}

function validarJugador() {
  const cboEquipos = document.getElementById("cboEquipos");
  const txtNombreJugador = document.getElementById("txtNombreJugador");
  const cboPosicion = document.getElementById("cboPosicion");
  const txtNroCamiseta = document.getElementById("txtNroCamiseta");
  const txtEstadoFisico = document.getElementById("txtEstadoFisico");
  const txtPartidosJugados = document.getElementById("txtPartidosJugados");

  // if (cboEquipos.value === 0) {
  //     alert("Elija un equipo!");
  //     cboEquipos.focus();
  //     return false;
  // }
  if (txtNombreJugador.value === "" || !isNaN(txtNombreJugador)) {
    swal("Ingrese un nombre");
    txtNombreJugador.focus();
    return false;
  }
  if (cboPosicion.value === "") {
    swal("En que posicion juega?");
    cboPosicion.focus();
    return false;
  }
  if (
    txtNroCamiseta.value === "" ||
    txtNroCamiseta.value < 1 ||
    txtNroCamiseta.value > 99
  ) {
    swal("Que numero de camiseta lleva el jugador? Valores entre 01 y 99");
    txtNroCamiseta.focus();
    return false;
  }
  if (txtEstadoFisico.value === "") {
    swal("Ingrese el porcentaje de estado fisico del jugador");
    txtEstadoFisico.focus();
    return false;
  }
  if (txtPartidosJugados.value === "") {
    swal("Cuantos Partidos Jugo? si no jugo ninguno ingrese 0");
    txtPartidosJugados.focus();
    return false;
  }
  return true;
}

// function Store() {}

// // Funciones de Store
// Store.getEquipos = function() {
//     let equipos;
//     if (window.localStorage.getItem("equipos") === null) {
//         equipos = [];
//     } else {
//         equipos = JSON.parse(window.localStorage.getItem("equipos"));
//     }
//     return equipos;
// };
// Store.prototype.mostrarEquipos = function() {
//     const equipos = Store.getEquipos();
//     // equipos.forEach(function(equipo) {
//     //     const ui = new UI();
//     //     ui.agregarEquipo(equipo);
//     // });
//     const ui = new UI();
//     for (let i = 0; i < equipos.length; i++) {
//         ui.agregarEquipo(equipos[i]);
//     }
// };
// Store.prototype.agregarEquipo = function(equipo) {
//     const equipos = Store.getEquipos();

//     equipos.push(equipo);

//     window.localStorage.setItem("equipos", JSON.stringify(equipos));
// };

//DOM Cargar Equipos
//document.addEventListener("DOMContentLoaded", Store.mostrarEquipos);
