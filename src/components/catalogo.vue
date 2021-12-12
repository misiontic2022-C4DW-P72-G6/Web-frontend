<template>
  <div class="containerCat">
    
      <div class="texto-vertical-1">
      <h1>Nuestros Hoteles Asociados</h1>
     
    </div>

    <div class="cuadro_contenedor">
      <div class="create-route">
        <p><strong>{{ catalogoDetailById.Nombre }}</strong> <br /></p>
        
        <img src="./imagenes/hot2.jpeg" width="400" height="200" alt="1" />
        
        <p>
          <strong>Ubicación:</strong> <span> {{ catalogoDetailById.Ubicacion }}</span>
        </p>
        <p>
          <strong>Calificación:</strong><span>{{ catalogoDetailById.Calificacion }}</span>
        </p>
        <p>
          <strong>Descripción:</strong
          ><span>{{ catalogoDetailById.Descripcion }}</span>
        </p>
        <p>
          <strong>Ubicación:</strong
          ><span>{{ catalogoDetailById.Correo }}</span>
        </p>
        <div class="boton">
          <button type="container_reservas">
            <router-link to="./habitacion">Ver habitaciones</router-link>
          </button>
        </div>
      </div>
    </div>

    <br />

    <div class="cuadro_contenedor">
      <div class="create-route">
        <p><strong>{{ catalogoDetailById.Nombre }}</strong> <br /></p>
        
        <img src="./imagenes/hot1.jpeg" width="400" height="200" alt="1" />
        
        <p>
          <strong>Ubicación:</strong
          ><span> {{ catalogoDetailById2.Ubicacion }}</span>
        </p>
        <p>
          <strong>Calificación:</strong
          ><span>{{ catalogoDetailById2.Calificacion }}</span>
        </p>
        <p>
          <strong>Descripción:</strong
          ><span>{{ catalogoDetailById2.Descripcion }}</span>
        </p>
        <p>
          <strong>Ubicación:</strong
          ><span>{{ catalogoDetailById2.Correo }}</span>
        </p>
        
          <div class="boton">
          <button type="container_reservas">
            <router-link to="./habitacion">Ver habitaciones</router-link>
          </button>
        </div>
        
      </div>
    </div>

    <br />

    <div class="cuadro_contenedor">
      <div class="create-route">
        <p><strong>{{ catalogoDetailById.Nombre }}</strong> <br /></p>
        
        <img src="./imagenes/hot3.jpeg" width="400" height="200" alt="1" />
        
        <p>
          <strong>Ubicación:</strong
          ><span> {{ catalogoDetailById.Ubicacion }}</span>
        </p>
        <p>
          <strong>Calificación:</strong
          ><span>{{ catalogoDetailById.Calificacion }}</span>
        </p>
        <p>
          <strong>Descripción:</strong
          ><span>{{ catalogoDetailById.Descripcion }}</span>
        </p>
        <p>
          <strong>Ubicación:</strong
          ><span>{{ catalogoDetailById.Correo }}</span>
        </p>
        <div class="boton">
          <button type="container_reservas">
            <router-link to="./habitacion">Ver habitaciones</router-link>
          </button>
        </div>
      </div>

      <br />

      <br />

      <br />
    </div>

    <br />
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "catalogo",
  data () {
    return {
     catalogoId:1,
     
      catalogoDetailById: {
        Nombre: "",
        Ubicacion: "",
        Calificacion: "",
        Direccion: "",
        Descripcion: "",
        Correo: "",    


      },
catalogoId2:2,
     
      catalogoDetailById2: {
        Nombre: "",
        Ubicacion: "",
        Calificacion: "",
        Direccion: "",
        Descripcion: "",
        Correo: "",    


      }
    };
  },
  apollo: {
    catalogoDetailById: {
      query: gql`
        query Query($catalogoId: Int!) {
          catalogoDetailById(catalogoId: $catalogoId) {
            Nombre
            Ubicacion
            Calificacion
            Direccion
            Descripcion
            Correo
          }
        }
      `,
      variables() {
        return {
          catalogoId: 6,
        };
      },
    },
  },
  
    catalogoDetailById2: {
      query: gql`
        query Query($catalogoId: Int!) {
          catalogoDetailById(catalogoId2: $catalogoId) {
            Nombre
            Ubicacion
            Calificacion
            Direccion
            Descripcion
            Correo
          }
        }
      `,
      variables() {
        return {
          catalogoId: this.catalogoId2,
        };
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
.img {
 opacity:0.4;
 filter:alpha(opacity=40); /* For IE8 and earlier */
}
.cuadro_contenedor {
  padding: 10px;
  margin-bottom: 10px;
  background-color: rgba(213, 216, 216, 0.466);
  border: solid 1px rgb(124, 115, 46);
  display: grid;
  
  border-radius: 10px;
  box-shadow: 3px 3px 3px 2px rgba(171, 172, 103, 0.2);
  width: auto;
  height: 480px;
}
.boton{
color: #e5e7e9;
}
.boton button:hover {
  color: #e5e7e9;
  background: rgb(144, 146, 14);
  border: 1px solid #283747;
  align-items: center;
}
.boton button {
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
.containerCat {
  margin: 0%;
  padding: 0%;
  height: 600px;
  width: auto;
  display: flex;
  justify-content: right;
  overflow: hidden;
  
  background-image: url("./imagenes/catalogo.jpg"); 
  
  background-position: center center;
}
.texto-vertical-1 {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    padding: 10px;
  margin-bottom: 10px;
  background-color: rgba(106, 109, 109, 0.781);
  border: solid 1px rgb(124, 115, 46);
  display: grid;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 2px rgba(171, 172, 103, 0.2);
  width: auto;
  height: 480px;
  
  justify-content: center;
}
</style>