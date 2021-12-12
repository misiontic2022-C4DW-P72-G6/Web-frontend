<template>
  <div class="habitacion">
      
    <div class="create-route">
      <h1>Habitaciones</h1>
    </div>

  
      <div class="cuadro_contenedor1">
        <div class="create-route">
        <br> <span> ID:
          {{ HabitacionesDetailById.Id}}</span>
          Tipo de habitacion:
    {{ HabitacionesDetailById.Tipo_habitacion }}
        </div>
        <br />

        

        <div class="create-route">
          Capacidad:
        <span>{{ HabitacionesDetailById.Capacidad_Habitacion }}</span>
        </div>
        <br />

        <div class="create-route">
          Costo:
        <span>{{ HabitacionesDetailById.Costo_Habitacion }}</span>
        </div>
        <br />

        <div class="create-route">
          Descripcion:
          <span>{{ HabitacionesDetailById.Descripcion_Habitacion}}</span>
        </div>
        <br />

      </div>
        
      <div class="cuadro_contenedor">
        <div class="create-route">
          Id:
        <span>{{ HabitacionesDetailById.Id }}</span>
        </div>
        <br />

        <div class="create-route">
          Tipo de habitacion:
        <span>{{ HabitacionesDetailById.Tipo_Habitacion }}</span>
        </div>
        <br />

        <div class="create-route">
          Capacidad:
        <span>{{ HabitacionesDetailById.Capacidad_Habitacion }}</span>
        </div>
        <br />

        <div class="create-route">
          Costo:
          <span>{{ HabitacionesDetailById.Costo_Habitacion }}</span>
        </div>
        <br />

        <div class="create-route">
          Descripcion:
        <span>{{ HabitacionesDetailById.Descripcion_Habitacion }}</span>
        </div>
        <br />

      </div>

      <div class="cuadro_contenedor">
        <div class="create-route">
          Id:
        <span>{{ HabitacionesDetailById.Id }}</span>
        </div>
        <br />

        <div class="create-route">
          Tipo de habitacion:
        <span>{{ HabitacionesDetailById.Tipo_Habitacion }}</span>
        </div>
        <br />

        <div class="create-route">
          Capacidad:
        <span>{{ HabitacionesDetailById.Capacidad_Habitacion }}</span>
        </div>
        <br />

        <div class="create-route">
          Costo:
        <span>{{ HabitacionesDetailById.Costo_Habitacion }}</span>
        </div>
        <br />

        <div class="create-route">
          Descripcion:
        <span>{{ HabitacionesDetailById.Descripcion_Habitacion }}</span>
        </div>
        <br />

      </div>
        
  </div>
  

</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";
export default {
  name: "Habitaciones",
  data: function () {
    return {
      HabitacionId: jwt_decode(localStorage.getItem("token_refresh")).Habitacion_id, 
      
      HabitacionesDetailById: {
        Id: 12,
        Tipo_Habitacion: "Cama doble grande",
        Capacidad_Habitacion:"3",
        Costo_Habitacion:1000000,
        Descripcion_Habitacion:"Una cama con vista al mar",
      }
    };
  },
  apollo: {
    HabitacionesDetailById: {
      query: gql`
        query Query($HabitacionId: Int!) {
          catalogoDetailById(HabitacionId: $HabitacionId) {
            Id
            Tipo de habitacion
            Capacidad
            Costo
            Descripcion
          }
        }
      `,
      variables() {
        return {
          HabitacionId: this.HabitacionId,
        };
      },
    },
  },
};
</script>

<style>
.cuadro_contenedor1 {
  padding: 10px;
  margin-bottom: 10px;
  background-color: rgba(213, 216, 216, 0.329);
  border: solid 1px rgb(124, 115, 46);
  display: grid;
  grid-template-columns: 33% 33% 33%;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 2px rgba(171, 172, 103, 0.2);
  width: auto;
  height: auto;
}

.create-route {
  border-radius: 5px;
  text-align: left;
  margin: 1px;
  padding: 0px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.information {
  margin: 0;
  padding: 0%;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
}
.information h1 {
  font-size: 60px;
  color: #283747;
}
.information h2 {
  font-size: 40px;
  color: #283747;
}
.information span {
  color: crimson;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.details h3 {
  font-size: 35px;
  color: #283747;
  text-align: center;
}
.details h2 {
  font-size: 35px;
  color: #283747;
}
.details {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: right;
}
</style>