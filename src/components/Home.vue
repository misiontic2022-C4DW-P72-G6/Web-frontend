<template>
    <div class="Bienvenido">
      ¡Bienvenido!
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
            <img src="./imagenes/vista.jpeg" width="800" height="400" alt="1" >
           

 

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
  font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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


</style>