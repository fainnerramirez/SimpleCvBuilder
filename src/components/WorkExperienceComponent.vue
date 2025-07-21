<template>
  <div class="work">
    <h1 style="text-align: center;">Experiencia Laboral</h1>
    <span v-for="experience in dataExperience" class="work-item">
      <ExperienceComponent :data="experience" />
    </span>
    <div class="buttons">
      <el-button type="primary" @click="addExperience">
        Agregar nueva experiencia<el-icon class="el-icon--right"></el-icon>
        <Plus />
      </el-button>
      <el-button-group class="buttons-actions">
        <el-button type="primary" :icon="ArrowLeft" @click="previous">Anterior</el-button>
        <el-button type="primary" @click="next">
          Siguiente<el-icon class="el-icon--right">
            <ArrowRight />
          </el-icon>
        </el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSimpleCvStore } from '@/stores/store';
import ExperienceComponent from '@components/ExperienceComponent.vue';
import { ArrowLeft, ArrowRight, Plus } from "@element-plus/icons-vue";
import { storeToRefs } from 'pinia';
import { v4 as uuid } from 'uuid';

const store = useSimpleCvStore();
const { workExperienceStore: dataExperience } = storeToRefs(store);

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

const next = () => store.nextStep();
const previous = () => store.previousStep();

</script>

<style scoped>
.work>.buttons {
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
}

.work>.buttons>.buttons-actions {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
}
</style>