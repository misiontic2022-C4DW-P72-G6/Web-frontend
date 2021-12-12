<template>
  <div class="containerCat">
    <div class="create-route2">
      <h1>Nuestros Hoteles Asociados</h1>
    </div>

    <div class="cuadro_contenedor">
      <div class="create-route">
        <img src="./imagenes/hot1.jpeg" width="400" height="200" alt="1" />

        <p><strong>Nombre:</strong> <br />{{ catalogoDetailById.Nombre }}</p>
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
        <div>
          <button type="container_reservas">
            <router-link to="./habitacion">habitacion</router-link>
          </button>
        </div>
      </div>
    </div>

    <br />

    <div class="cuadro_contenedor">
      <div class="create-route">
        <img src="./imagenes/hot2.jpeg" width="400" height="200" alt="1" />

        <p><strong>Nombre:</strong> <br />{{ catalogoDetailById.Nombre }}</p>
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
        <div>
          <button type="container_reservas">
            <router-link to="./habitacion">habitacion</router-link>
          </button>
        </div>
      </div>
    </div>

    <br />

    <div class="cuadro_contenedor">
      <div class="create-route">
        <img src="./imagenes/hot3.jpeg" width="400" height="200" alt="1" />

        <p><strong>Nombre:</strong> <br />{{ catalogoDetailById.Nombre }}</p>
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
        <div>
          <button type="container_reservas">
            <router-link to="./habitacion">habitacion</router-link>
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
          catalogoId: this.catalogoId,
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
.cuadro_contenedor {
  padding: 10px;
  margin-bottom: 10px;
  background-color: rgba(213, 216, 216, 0.329);
  border: solid 1px rgb(124, 115, 46);
  display: grid;
  grid-template-columns: 33% 33% 33%;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 2px rgba(171, 172, 103, 0.2);
  width: auto;
  height: 500px;
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
  margin: 0;
  padding: 0%;
  height: auto;
  width: auto;
  display: flex;
  justify-content: right;
  overflow: hidden;
  background-image: url("./imagenes/catalogo.jpg");
  background-position: center center;
}
</style>