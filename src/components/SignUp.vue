<template>

    <div class="Bienvenido">
      ¡Registrate!
      </div>

  <div class="signUp_user1">
   
       

      <form v-on:submit.prevent="processSignUp">
        <div class="form-group">
        <label>Username:</label>
        <input type="text" v-model="user.username" placeholder="Usuario" />
        </div>
        <br /> 
        <div class="form-group">
        <label>Password:</label>
        <input type="password" v-model="user.password" placeholder="Contraseña"/>
        </div>
        <br /> 
        <div class="form-group">
        <label>Nombres:</label>
        <input type="text" v-model="user.Nombres" placeholder="Nombres" />
        </div>
        <br /> 
        <div class="form-group">
        <label>Apellidos:</label>
        <input type="text" v-model="user.Apellidos" placeholder="Apellidos" />
        </div>
            <br /> 
        <div class="form-group">
        <label>No_documento:</label>
         <input type="number" v-model="user.No_documento" placeholder="No_documento" />
         </div>
        <br /> 
        <div class="form-group">
        <label>Direccion:</label>
        <input type="text" v-model="user.Direccion" placeholder="Dirección" />
        </div>
        <br /> 
        <div class="form-group">
        <label>Telefono:</label>
        <input type="number" v-model="user.Telefono" placeholder="Télefono" />
        </div>
        <br /> 
        <div class="form-group">
        <label>Correo:</label>
         <input type="text" v-model="user.Correo" placeholder="Correo" />
         </div>
        <br />
        <div class="form-group">
         <label>Ciudad:</label>
        <input type="text" v-model="user.Ciudad" placeholder="Ciudad"   >
        </div>
                
        <button type="submit">Registrarse</button>
      </form>
    </div>
  
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "SignUp",
  data: function () {
    return {
      user: {
        Nombres: "",
        Apellidos: "",
        No_documento: 0,
        Direccion: "",
        Telefono: 0,
        Correo: "",
        Ciudad: "Bogota",
      },
    };
  },
  methods: {
    processSignUp: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($userInput: SignUpInput!) {
              signUpUser(userInput: $userInput) {
                refresh
                access
              }
            }
          `,
          variables: {
            userInput: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.signUpUser.access,
            token_refresh: result.data.signUpUser.refresh,
          };
          this.$emit("completedSignUp", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
</script>

<style>
form {
  padding: 20px 15%;
}
.form-group label {
  width: 35%;
  text-align: center;
  font-size: 17px;
  border-radius:50px;
}
label {
  display: inline-block;
  width: 80px;
  font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.signUp_user {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signUp_user h2 {
  color: #283747;
}
.signUp_user form {
  width: 5%;
}
.signUp_user input {
  padding: 10px;
  background-color: rgba(131, 161, 161, 0.075);
  width: 10%;
  margin-right: 100px;
  border-radius: 15px;
  flex-direction: column;
 
}
.signUp_user1 button {
  color: rgb(143, 13, 13);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  font-size: 20px;
  box-shadow: 2px 2px 2px 1px rgba(197, 23, 23, 0.2);
  border-radius: 50px;
  margin-left: 50px;
  margin-right: 50px;
  width: 25%;
  height: 80%;
  align-items: center;
  
}
.signUp_user1 button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
  align-items: center;
}
</style>