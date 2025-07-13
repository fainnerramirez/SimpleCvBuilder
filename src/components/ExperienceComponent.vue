<template>
    <el-card class="container__work">
        <div class="container__work__app">
            <div class="experience__delete">
                <el-button type="danger" class="button" @click="deleteExperience(idExperience)">
                    <el-icon size="20">
                        <component :is="Delete" />
                    </el-icon>
                </el-button>
            </div>
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
import type { WorkExperienceStoreProps } from '../types/types';
import { Delete } from "@element-plus/icons-vue";
import { useSimpleCvStore } from '../stores/store';

interface Props { data: WorkExperienceStoreProps }
const props = defineProps<Props>();
const { data } = props;

const store = useSimpleCvStore();
const idExperience = ref<string>(data.id);
const inputCompany = ref<string>(data.company);
const inputPosition = ref<string>(data.position);
const inputDateStart = ref<string>(data.dateStart);
const inputDateEnd = ref<string>(data.dateEnd);
const checkActuallyWork = ref<boolean>(data.isActuallyWork);
const inputDescription = ref<string>(data.description);

const deleteExperience = (id: string) => {
    console.log("Id work: ", id);
    store.$patch((state) => {
        state.workExperienceStore = state.workExperienceStore.filter(e => e.id !== id)
    });
    console.log("Nuevo state: ", store.workExperienceStore);
}

</script>

<style scoped>
.container__work {
    padding: 2em;
    margin-top: 0.5em;
}

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
    justify-content: start;
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

.experience__delete {
    display: flex;
    justify-content: end !important;
    width: 100%;
}
</style>