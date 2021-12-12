<template>
<div class="containerlogin">

  <div class="logIn_user">
 
   <div class="container_logIn_user">
      <h2>Iniciar sesión</h2>
      <form v-on:submit.prevent="processLogInUser">
        <input type="text" v-model="user.username" placeholder="Usuario" />
        <br /><br />
        <input
          type="password"
          v-model="user.password"
          placeholder="Contraseña"
        />
        <br /><br />
        <button type="submit">Iniciar Sesión</button>
       
 
      </form>
      
    </div>
   </div>    
  </div>

</template>

<script>
import gql from "graphql-tag";
export default {
  name: "LogIn",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    processLogInUser: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($credentials: CredentialsInput!) {
              logIn(credentials: $credentials) {
                refresh
                access
              }
            }
          `,
          variables: {
            credentials: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.logIn.access,
            token_refresh: result.data.logIn.refresh,
          };
          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>

<style>

.containerlogin {
  margin: 0;
  padding: 1%;
  height: 110%;
  width: 98%;
  display: flex;
  justify-content: center;
  background-position: center;
  background-image: url("./imagenes/hot5.jpg");
  

}
.logIn_user {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-position: center center;
  display: flex;
  justify-content: right;
  align-items: center;
  float: right;
}


.container_logIn_user {
  border: 3px solid #044488;
  border-radius: 10px;
  width: 25%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logIn_user h2 {
  color: #291818;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.logIn_user form {
  width: 70%;
}
.logIn_user input {
  padding: 10px;
  background-color: rgba(0, 255, 255, 0.075);
  width: 80%;
  margin-right: 100px;
  border-radius: 15px;
  
}

.logIn_user button {
  color: rgb(20, 20, 19);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  font-size: 10px;
  box-shadow: 2px 2px 2px 1px rgba(163, 120, 120, 0.2);
  border-radius: 15px;
  margin-left: 50px;
  margin-right: 50px;
  width: 70%;
  height: 30%;
  align-items: center;
 
}
.logIn_user button:hover {
  color: #b3b030;
  background: rgb(66, 66, 32);
  border: 1px solid #04283f;
  justify-content: center;
  align-items: center;
  
}






</style>