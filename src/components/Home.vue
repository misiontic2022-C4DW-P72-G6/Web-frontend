<template>
      <div class="containerhome">
  
  <div class="cuadro_contenedor">
    <div class="create-route">
      <h2>
        Hola! <span>{{ userDetailById.Nombres }}</span>
        </h2>
        <br />
        <h3>
        Correo electrónico: <span>{{ userDetailById.Correo }}</span
        ><br />
        </h3>
        <p>Planea con nosotros tus próximas vacaciones...</p>
        <p>Ven y conoce los diferentes lugares que tenemos pensados para que disfrutes de un servicio expectacular en los mejores hoteles</p>
        <br/>
        <p> Toda nuestra oferta a un solo clic.</p>
        <br/>
        <br/>
    <div class=boton>
        <button>
          <router-link to="./catalogo"><h1>Reserva tu Hotel Ideal Aquí</h1></router-link>
        </button>
    </div>
        <div class="texto2"></div>
      </div>

         <div class="texto1">
          <h2>Hola!  <span>{{userDetailById.Nombres }}</span><br />
            Correo electrónico:  <span>{{userDetailById.Correo }}</span><br />
            Planea con nosotros tus próximas vacaciones...</h2>
             <br /> <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
            <button >  <router-link to="./catalogo">Reserva tu Hotel Ideal Aquí</router-link> </button>
            <div class="texto2"></div>
            </div>
                 <div class="detailsimg">
            <img src="./imagenes/vista.jpg" width="800" height="400" alt="1" >
           

 
  <div class="cuadro_contenedor">
    <div class="create-route">
        <img src="./imagenes/vista.jpeg" width="800" height="470" alt="1" />
        </div>
         </div>
         </div>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";
export default {
  name: "Home",
  data: function () {
    return {
      userId: jwt_decode(localStorage.getItem("token_refresh")).user_id,
      userDetailById: {
        Nombres: "",
        Correo: "",
      },
    };
  },
  apollo: {
    userDetailById: {
      query: gql`
        query ($userId: Int!) {
          userDetailById(userId: $userId) {
            Nombres
            Correo
          }
        }
      `,
      variables() {
        return {
          userId: this.userId,
        };
      },
    },
  },
};
</script>

<style>
.texto1 {
  border-radius: 5px;
  text-align: left;
  margin: 1px;
  padding: 0px;
  font-size: 15px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  height: 420px;
  width: 400;
  float: left;
}

.texto1 button {
  color: rgb(22, 17, 17);
  padding: 10px;
  font-size: 40px;
  box-shadow: 2px 2px 2px 1px rgba(197, 23, 23, 0.2);
  border-radius: 50px;
  align-items: center;
}

.texto1 button:hover {
  color: #e5e7e9;
  background: rgb(123, 131, 16);
  border: 1px solid #283747;
  align-items: center;
}
.containerhome {
  margin: 0%;
  padding: 0%;
  height: 120%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;

  background-image: url("./imagenes/home.jpg");
  
  background-position: center center;
}
</style>