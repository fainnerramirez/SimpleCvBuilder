<template>
    <el-card style="margin: 10px;">
        <div class="container__work__app">
            <div>
                <el-input class="input-field" v-model="inputCompany" type="text" size="large"
                    placeholder="Empresa"></el-input>
                <el-input class="input-field" v-model="inputPosition" type="text" size="large"
                    placeholder="Cargo"></el-input>
            </div>
            <div>
                <el-date-picker class="input-field" v-model="inputDateStart" type="date" size="large"
                    placeholder="Fecha Inicio" />
                <el-date-picker class="input-field" v-model="inputDateEnd" type="date" size="large"
                    placeholder="Fecha Fin" :disabled="checkActuallyWork" />
                <el-checkbox v-model="checkActuallyWork" label="Trabajo Actual" />
            </div>
            <div>
                <el-input class="textarea-field" v-model="inputDescription" type="textarea"
                    :autosize="{ minRows: 3, maxRows: 5 }" placeholder="Descripción"></el-input>
            </div>
        </div>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Experience } from './WorkExperienceComponent.vue';

const inputCompany = ref<string>("");
const inputPosition = ref<string>("");
const inputDateStart = ref<string>("");
const inputDateEnd = ref<string>("");
const checkActuallyWork = ref<boolean>(false);
const inputDescription = ref<string>("");

interface Props {
    data: Experience
}

defineProps<Props>();

</script>

<style scoped>
.container__work__app {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.container__work__app>div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.container__work__app .input-field {
    min-width: 320px;
    max-width: 400px;
}

.container__work__app .check-input {
    display: flex;
    align-items: center;
    gap: 3px;
    align-self: self-start;
}

.container__work__app .textarea-field {
    width: 80%;
    min-width: 320px;
    max-width: 800px;
}
</style>