<template>
    <div style="display: flex; gap: 5px; align-items: start;">
        <div>
            <el-segmented v-model="step" :options="store.optionsStep" direction="vertical" size="default">
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
                <PersonalInformationComponent />
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
        <p>{{ step }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PersonalInformationComponent from "./PersonalInformationComponent.vue";
import WorkExperienceComponent from './WorkExperienceComponent.vue';
import EducationComponent from './EducationComponent.vue';
import HabilityComponent from './HabilityComponent.vue';
import ViewPreviewComponent from './ViewPreviewComponent.vue';
import { useSimpleCvStore } from '../stores/store';

const store = useSimpleCvStore();
const step = ref<string>(store.currentStep);
</script>