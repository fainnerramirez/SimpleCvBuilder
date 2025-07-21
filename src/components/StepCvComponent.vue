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
    </div>
</template>

<script lang="ts" setup>
import { useSimpleCvStore } from '@/stores/store';
import EducationComponent from '@components/EducationComponent.vue';
import HabilityComponent from '@components/HabilityComponent.vue';
import PersonalInformationComponent from "@components/PersonalInformationComponent.vue";
import ViewPreviewComponent from '@components/ViewPreviewComponent.vue';
import WorkExperienceComponent from '@components/WorkExperienceComponent.vue';
import { storeToRefs } from "pinia";
import { optionsStep as options } from "../data/data";

const store = useSimpleCvStore();
const { currentStep: step } = storeToRefs(store);
</script>