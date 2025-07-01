<template>
    <div style="display: flex; gap: 5px; align-items: start;">
        <div>
            <el-segmented v-model="step" :options="options" direction="vertical" size="default">
                <template #default="scope">
                    <div :class="[
                        'flex',
                        'items-center',
                        'gap-2',
                        'flex-col',
                    ]">
                        <el-icon size="20">
                            <component :is="scope.item.icon" />
                        </el-icon>
                        <div>{{ scope.item.label }}</div>
                    </div>
                </template>
            </el-segmented>
        </div>
        <div style="width: 100%;">
            <div v-if="step === '1'">
                <PersonalInformationComponent :step="step" @update-step="updateStep" />
            </div>
            <div v-else-if="step === '2'">
                <WorkExperienceComponent />
            </div>
            <div v-else-if="step === '3'">
                <EducationComponent />
            </div>
            <div v-else-if="step === '4'">
                <HabilityComponent />
            </div>
            <div v-else-if="step === '5'">
                <ViewPreviewComponent />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
    User,
    School,
    Star,
    Document,
    Suitcase
} from '@element-plus/icons-vue';
import PersonalInformationComponent from "./PersonalInformationComponent.vue";
import WorkExperienceComponent from './WorkExperienceComponent.vue';
import EducationComponent from './EducationComponent.vue';
import HabilityComponent from './HabilityComponent.vue';
import ViewPreviewComponent from './ViewPreviewComponent.vue';

const step = ref('1')
const options = [
    {
        label: 'Información Personal',
        value: '1',
        icon: User,
    },
    {
        label: 'Experiencia Laboral',
        value: '2',
        icon: Suitcase,
    },
    {
        label: 'Educación',
        value: '3',
        icon: School,
    },
    {
        label: 'Habilidades',
        value: '4',
        icon: Star,
    },
    {
        label: 'Vista Previa',
        value: '5',
        icon: Document,
        disabled: false,
    }
]

const updateStep = (currentStep: string) => {
    const stepDefault = '1';
    const stepNumber = Number(currentStep);
    const newStep = (stepNumber + 1);

    if (newStep <= options.length) {
        step.value = newStep.toString();
    }
    else {
        step.value = stepDefault;
    }

}

</script>