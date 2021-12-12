<template>
  <div class="reservas">

    <div class="container_reservas">
      <form v-on:submit.prevent="processReservas">
        <div class="form-group">
          <label>fechaReserva:</label>
          <input
            type="date"
            v-model="createReservas.fechaReserva"
            placeholder="Fecha de Reserva"
          />
        </div>
        <br />
        <div class="form-group">
          <label>fechaInicio:</label>
          <input
            type="date"
            v-model="createReservas.fechaInicio"
            placeholder="Fecha de Inicio"
          />
        </div>

        <br />
        <div class="form-group">
          <label>fechaFin:</label>
          <input
            type="date"
            v-model="createReservas.fechaFin"
            placeholder="Fecha de Fin"
          />
        </div>
        <br />
        <div class="form-group">
          <label> Número de personas:</label>
          <input
            type="number"
            v-model="createReservas.personas"
            placeholder="personas"
          />
        </div>
        <br />
        <div class="form-group">
          <label>habitacion:</label>
          <input
            type="text"
            v-model="createReservas.habitacion"
            placeholder="Habitacion"
          />
        </div>
        <br />
        <div class="form-group">
          <label>estado:</label>
          <input type="text" v-model="createReservas.estado" placeholder="Estado" />
        </div>
        <br />
        <div class="form-group">
          <label>Medio de pago:</label>
          <input
            type="text"
            v-model="createReservas.medioPago"
            placeholder="Medio de Pago"
          />
        </div>
<br>
        <button type="submit">Reservar</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "createReserva",
  data: function () {
    return {
      createReservas: {
        idReserva: 18,
        nombrecuentaUsuario: 1,
        fechaReserva: null,
        fechaInicio: null,
        fechaFin: null,
        personas: 2,
        idHotel: 1,
        habitacion: "presidencial",
        estado: "reserva inicial",
        medioPago: "Tarjeta",
      },
    };
  },
  methods: {
    processReservas: async function () {
      if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null
      ) {
        this.$emit("logOut");
        return;
      }

      localStorage.setItem("token_access", "");
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($refresh: String!) {
              refreshToken(refresh: $refresh) {
                access
              }
            }
          `,
          variables: {
            refresh: localStorage.getItem("token_refresh"),
          },
        })
        .then((result) => {
          localStorage.setItem("token_access", result.data.refreshToken.access);
        })
        .catch((error) => {
          this.$emit("logOut");
          return;
        });

      await this.$apollo
        .mutate({
          mutation: gql`
            mutation Mutation($reserva: ReservaInput) {
              crearReserva(reserva: $reserva) {
                idReserva
                nombrecuentaUsuario
                fechaReserva
                fechaInicio
                fechaFin
                personas
                idHotel
                habitacion
                estado
                medioPago
              }
            }
          `,
          variables: {
            reserva: this.createReservas,
          },
        })
        .then((reserva) => {
          let reservaDetail = {
            idReserva: reserva.idReserva,
            nombrecuentaUsuario: reserva.nombrecuentaUsuario,
            fechaReserva:reserva.fechaReserva,
            fechaInicio: reserva.fechaInicio,
            fechaFin: reserva.fechaFin,
            personas: reserva.personas,
            idHotel: reserva.idHotel,
            habitacion: reserva.habitacion,
            estado: reserva.estado,
            medioPago: reserva.medioPago,
          };
          alert("Reservación exitosa", reservaDetail);
        })
        .catch((error) => {
          alert("ERROR: Fallo en el registro. " + error);
        });
    },
  },
};
</script>

<style>


.container_reservas button {
  color: rgb(143, 13, 13);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  font-size: 20px;
  box-shadow: 2px 2px 2px 1px rgba(197, 23, 23, 0.2);
  border-radius: 50px;
  margin-left: 50px;
  margin-right: 50px;
  width: 80%;
  height: 80%;
  align-items: right;
}
.container_reservas button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
  align-items: center;
}
.container_reservas input {
  padding: 10px;
  background-color: rgba(0, 255, 255, 0.075);
  width: 45%;
  margin-right: 100px;
  border-radius: 15px;
}
.container_reservas {
  width: 100%;
  height: 450px;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  background-image: url("./imagenes/hot6.jpg"); 
}
.container_reservas {
  vertical-align: super 
}
</style>