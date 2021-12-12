<template>
  <div class="container">
    <div class="create-route">
      <h1><center>Habitaciones</center></h1>
     </div>

  <div class="cuadro_contenedor1"> 
           <div class="create-route">
             <img src="./imagenes/Habitacion1.jpeg" width="400" height="200" alt="1" />

         <p><strong>Id:</strong> <br />{{ HabitacionesDetailById.Id}}</p>
         <p>
           <strong>Tipo de habitacion:</strong> <span> {{ HabitacionesDetailById.Tipo_Habitacion}}</span>
         </p>
         <p>
           <strong>Capacidad:</strong><span>{{ HabitacionesDetailById.Capacidad_Habitacion }}</span>
         </p>
         <p>
           <strong>Costo:</strong
           ><span>{{ HabitacionesDetailById.Costo_Habitacion }}</span>
        </p>
         <p>
           <strong>Descripcion:</strong
           ><span>{{ HabitacionesDetailById.Descripcion_Habitacion }}</span>
         </p>
         <div>
           <button type="container_reservas">
            <router-link to="./reservas">Reserva aqui</router-link>
          </button>
          </div>
        </div>

  <div class="cuadro_contenedor2"> 
             <div class="create-route">
               <img src="./imagenes/Habitacion2.jpeg" width="400" height="200" alt="1" />

         <p><strong>Id:</strong> <br />{{ HabitacionesDetailById.Id}}</p>
         <p>
           <strong>Tipo de habitacion:</strong> <span> {{ HabitacionesDetailById.Tipo_Habitacion}}</span>
         </p>
         <p>
           <strong>Capacidad:</strong><span>{{ HabitacionesDetailById.Capacidad_Habitacion }}</span>
         </p>
         <p>
           <strong>Costo:</strong
           ><span>{{ HabitacionesDetailById.Costo_Habitacion }}</span>
        </p>
         <p>
           <strong>Descripcion:</strong
           ><span>{{ HabitacionesDetailById.Descripcion_Habitacion }}</span>
         </p>
         <div>
           <button type="container_reservas">
            <router-link to="./reservas">Reserva aqui</router-link>
          </button>
          </div>
    
    
        </div>

  <div class="cuadro_contenedor3"> 
             <div class="create-route">
               <img src="./imagenes/Habitacion3.jpeg" width="400" height="200" alt="1" />

         <p><strong>Id:</strong> <br />{{ HabitacionesDetailById.Id}}</p>
         <p>
           <strong>Tipo de habitacion:</strong> <span> {{ HabitacionesDetailById.Tipo_Habitacion}}</span>
         </p>
         <p>
           <strong>Capacidad:</strong><span>{{ HabitacionesDetailById.Capacidad_Habitacion }}</span>
         </p>
         <p>
           <strong>Costo:</strong
           ><span>{{ HabitacionesDetailById.Costo_Habitacion }}</span>
        </p>
         <p>
           <strong>Descripcion:</strong
           ><span>{{ HabitacionesDetailById.Descripcion_Habitacion }}</span>
         </p>
         <div>
           <button type="container_reservas">
            <router-link to="./reservas">Reserva aqui</router-link>
          </button>
          </div>
    
    
        </div>    
        
        </div>
        </div> 
        </div> 
 </div>  
    <br />
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
        Id:12,
        Tipo_Habitacion: "Cama doble grande",
        Capacidad_Habitacion: 3,
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
.create-route {
  border-radius: 10px;
  text-align: center;
  margin: 10px;
  padding: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.cuadro_contenedor1 {
  display: grid;
  grid-template-columns: 35% 35% 35%;
  height: 500px;
  width: auto;
}
.cuadro_contenedor2 {
  display: grid;
  grid-template-columns: 70% 70% 70%;
  height: 500px;
  width: auto;
}
.cuadro_contenedor3 {
  display: grid;
  grid-template-columns: 170% 170% 170%;
  height: 500px;
  width: auto;
}
.information1 {
  margin: 0;
  padding: 0%;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: left;
  justify-content: left;
  align-items: center;
}

.information1 h1 {
  font-size: 60px;
  color: #283747;
}
.information1 h2 {
  font-size: 40px;
  color: #283747;
}
.information1 span {
  color: rgb(26, 20, 21);
  font-family: Verdana, Geneva, Tahoma, sans-serif, bold;
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