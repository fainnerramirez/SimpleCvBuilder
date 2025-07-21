<template>
  <div style="padding: 1rem;">
    <div>
      <h1 style="text-align: center;">Información Personal</h1>
    </div>
    <div class="information__container__app">
      <div>
        <el-input type="text" size="large" class="input-field" v-model="inputName"
          placeholder="Ingresa tu nombre completo" />
        <el-input type="email" size="large" class="input-field" v-model="inputEmail"
          placeholder="Ingresa tu correo electrónico" />
      </div>
      <div>
        <el-input type="text" size="large" class="input-field" v-model="inputLocation"
          placeholder="Ingresa tu ubicación" />
        <el-input type="number" size="large" class="input-field" v-model="inputPhone"
          placeholder="Ingresa tu teléfono o celular" />
      </div>
      <el-input type="text" size="large" class="input-field-large" v-model="inputLinkedin"
        placeholder="Ingresa url LinkedIn" />
      <el-input type="textarea" class="input-field-large" v-model="inputResume" size="large"
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
import { useSimpleCvStore } from "@/stores/store";
import { ref } from "vue";

const store = useSimpleCvStore();
const data = store.personalInformationStore;

const inputName = ref<string>(data?.username ?? "");
const inputEmail = ref<string>(data?.email ?? "");
const inputLocation = ref<string>(data?.location ?? "");
const inputPhone = ref<string>(data?.phone ?? "");
const inputLinkedin = ref<string>(data?.url_web ?? "");
const inputResume = ref<string>(data?.summary ?? "");

const updatePersonalInformationData = () => {
  store.$patch((state) => {
    state.personalInformationStore = {
      email: inputEmail.value,
      location: inputLocation.value,
      phone: inputPhone.value,
      summary: inputResume.value,
      url_web: inputLinkedin.value,
      username: inputName.value
    }
  });
}

const next = () => {
  console.log("Click next");
  updatePersonalInformationData();
  store.nextStep();
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