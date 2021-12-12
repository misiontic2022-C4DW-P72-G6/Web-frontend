<template>
  <div id="app" class="app">
    <div class="header">
      
      <h1>Hoteles</h1>
      
<nav>
        <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar </button>
        <button v-if="is_auth"  v-on:click="loadHome">Home</button>
        <button v-if="is_auth" v-on:click="loadcatalogo">Catalogo</button>
        <button v-if="is_auth"  v-on:click="loadReservas">reserva</button>
        <button v-if="is_auth"  v-on:click="loadHabitacion">Habitación</button>
        <button v-if="!is_auth" v-on:click="loadSignUp">SignUp</button>
        <button v-if="is_auth"  v-on:click="logOut">LogOut</button>
        
       </nav>
      
    </div>

    
    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>
    <div class="footer">
      <h3>Confort y la mejor atención.</h3>
    </div>
  </div>
</template>



<script>
export default {
  name: "App",
  data: function () {
    return {
      is_auth: false,
    };
  },
  components: {},
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false) this.$router.push({ name: "logIn" });
      else this.$router.push({ name: "home" });
    },
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
    loadHome: function () {
      this.$router.push({ name: "home" });
    },
    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
    loadcatalogo: function () {
      this.$router.push({ name: "catalogo" });
    },
    loadReservas: function (){
      this.$router.push({name: "reservas"});
    },
    loadHabitacion: function (){
      this.$router.push({name: "habitacion"});
    },
    
    completedReservas: function (data) {
      alert("Reserva Exitosa");
      this.completedReservas(data);
    },
  },
  created: function () {
    this.verifyAuth();
  },
};
</script>

<style>
body {
  margin: 0 0 0 0;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #b89a39;;
  color: #443412;
  display: flex;
  justify-content: space-between;
  align-items: left;
}
.header h1 {
  width: auto;
  text-align: left;
  font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.header nav {
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 10px;
  
}
.header nav button {
  color: #e5e7e9;
  background: #5a4b1ccb;
  border: 1px solid #e5e7e9;
  border-radius: 50px;
  padding: 10px ;
}
.header nav button:hover {
  color: #744b6998;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 2vh;
  min-height: 50px;
  background-color: #b89a39e7;
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: right; 
}

.Bienvenido {
  border-radius: 5px;
  text-align: left;
  margin: 1px;
  padding: 0px;
  font-size: 30px;
  font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>