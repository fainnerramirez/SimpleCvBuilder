<template>
  <el-row style="margin-top: 2rem; margin-bottom: 2rem; display: flex; justify-content: center;">
    <el-col :span="6">
      <el-statistic title="Usuarios Activos" :value="145" />
    </el-col>
    <el-col :span="6">
      <el-statistic title="Total de CVs Construidos" :value="outputValue" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'

const source = ref(0)
const outputValue = useTransition(source, {
  duration: 1500,
})
source.value = 250
</script>

<style scoped>
.el-col {
  text-align: center;
}
</style>