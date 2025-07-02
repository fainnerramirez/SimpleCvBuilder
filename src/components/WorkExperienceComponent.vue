<template>
  <div>
    <h1 style="text-align: center;">Experiencia Laboral</h1>
    <span v-for="experience in dataExperience">
      <ExperienceComponent :data="experience" />
    </span>
    <el-button type="primary" @click="addExperience">Agregar nueva experiencia</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ExperienceComponent from './ExperienceComponent.vue';

export interface Experience {
  company: string,
  position: string,
  rangeDate: Date | string
}

const dataExperience = ref<Experience[]>([{
  company: "",
  position: "",
  rangeDate: ""
}]);

const addExperience = () => {
  const experience: Experience = {
    company: "",
    position: "",
    rangeDate: ""
  };
  dataExperience.value.push(experience);
}

</script>

<style scoped></style>