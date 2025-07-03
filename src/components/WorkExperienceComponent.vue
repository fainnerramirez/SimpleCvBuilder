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
import { ref } from 'vue';
import ExperienceComponent from './ExperienceComponent.vue';
import { useSimpleCvStore } from '../stores/store';
import type { WorkExperienceStoreProps } from '../types/types';


const store = useSimpleCvStore();                    
const data = store.workExperienceStore;
const dataExperience = ref<WorkExperienceStoreProps[]>(data);

const addExperience = () => {}
const next = () => {}

</script>

<style scoped></style>