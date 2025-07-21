<template>
  <div>
    <AvatarComponent />
  </div>
  <div class="header__app">
    <h1>CV Rápido, Impactante <br />y Listo para Reclutadores</h1>
    <p class="header__description">Genera un CV impresionante con nuestro generador fácil de usar. <br /> Diseños
      elegantes y optimizados para captar la
      atención de los reclutadores en segundos</p>
  </div>
  <div class="header__start">
    <el-input v-model="valueEmail" class="input" type="email" size="large" />
    <el-button type="primary" size="large">Construye tu cv</el-button>
  </div>
</template>

<script lang="ts" setup>
import AvatarComponent from '@components/AvatarComponent.vue';
import { ref } from 'vue';
const valueEmail = ref<string>();

</script>

<style scoped>
.header__app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.header__app>h1 {
  font-size: 2rem;
  font-weight: bolder;
}

p {
  padding: 0;
  margin: 0;
}

.header__description {
  color: gray;
  text-align: center;
}

.header__start {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.header__start>.input {
  width: 400px;
}
</style>