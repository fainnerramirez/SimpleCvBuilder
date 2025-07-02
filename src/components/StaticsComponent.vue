<template>
  <el-row style="margin-top: 1rem; margin-bottom: 0.5rem; display: flex; justify-content: center;">
    <el-col :span="6">
      <el-statistic title="Usuarios Activos" :value="userOutput" />
    </el-col>
    <el-col :span="6">
      <el-statistic title="Total de CVs Construidos" :value="projectOutput" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'

const usersValue = ref<number>(0);
const projectsValue = ref<number>(0);
const projectOutput = useTransition(projectsValue, {
  duration: 1500,
});
const userOutput = useTransition(usersValue, {
  duration: 1500
});
projectsValue.value = 250;
usersValue.value = 150;
</script>

<style scoped>
.el-col {
  text-align: center;
}
</style>