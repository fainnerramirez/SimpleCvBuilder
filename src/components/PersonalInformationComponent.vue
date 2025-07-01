<template>
  <div style="padding: 1rem;">
    <div>
      <h1 style="text-align: center;">Información Personal</h1>
    </div>
    <div class="information__container__app">
      <div>
        <el-input size="large" class="input-field" v-model="inputName" placeholder="Ingresa tu nombre completo" />
        <el-input size="large" class="input-field" v-model="inputEmail" placeholder="Ingresa tu correo electrónico" />
      </div>
      <div>
        <el-input size="large" class="input-field" v-model="inputDirection" placeholder="Ingresa tu ubicación" />
        <el-input size="large" class="input-field" v-model="inputPhone" placeholder="Ingresa tu teléfono o celular" />
      </div>
      <el-input size="large" class="input-field-large" v-model="inputLinkedin" placeholder="Ingresa url LinkedIn" />
      <el-input class="input-field-large" type="textarea" v-model="inputResume" size="large"
        :autosize="{ minRows: 2, maxRows: 4 }" placeholder="Ingresa tu resumen profesional" />
      <div>
        <el-button size="large" type="primary" @click="next()" style="width: 76.5%;">
          siguiente
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const inputName = ref("");
const inputEmail = ref("");
const inputDirection = ref("");
const inputPhone = ref("");
const inputLinkedin = ref("");
const inputResume = ref("");

const props = defineProps({
  step: {
    type: String,
    required: true
  }
});

const emit = defineEmits<{
  (event: 'update-step', newStep: string): void
}>()

const next = () => {
  emit('update-step', props.step);
}

</script>

<style scoped>
.information__container__app {
  display: flex;
  gap: 10px;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
}

.information__container__app>div {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.input-field {
  width: 48%;
  min-width: 320px;
  max-width: 400px;
}

.input-field-large {
  width: 100%;
  min-width: 320px;
  max-width: 810px;
}
</style>