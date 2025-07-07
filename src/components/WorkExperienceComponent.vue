<template>
  <div>
    <h1 style="text-align: center;">Experiencia Laboral</h1>
    <span v-for="experience in dataExperience">
      <ExperienceComponent :data="experience" />
    </span>
    <el-button type="primary" @click="addExperience">Agregar nueva experiencia</el-button>
    <el-button type="primary" @click="next">Siguiente</el-button>
  </div>
</template>

<script lang="ts" setup>
import ExperienceComponent from './ExperienceComponent.vue';
import { useSimpleCvStore } from '../stores/store';
import { storeToRefs } from 'pinia';
import { v4 as uuid } from 'uuid';

const store = useSimpleCvStore();
const { workExperienceStore: dataExperience } = storeToRefs(store);

console.log("Data experience: ", dataExperience.value);

const addExperience = () => {
  store.$patch((state) => {
    state.workExperienceStore.push({
      id: uuid(),
      company: "",
      dateEnd: "",
      dateStart: "",
      description: "",
      isActuallyWork: false,
      position: ""
    })
  })
}

const next = () => {
  store.updateStep();
}

</script>

<style scoped></style>