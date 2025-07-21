import { optionsStep } from "@/data/data";
import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import { ref } from "vue";
import type { EducationStoreProps, HabilityStoreProps, PersonalInformationStoreProps, WorkExperienceStoreProps } from "../types/types";

export const useSimpleCvStore = defineStore('simpleCVBuilderStore', () => {

    const elementDefaultWork: WorkExperienceStoreProps = {
        id: uuid(),
        company: "",
        dateEnd: "",
        dateStart: "",
        description: "",
        isActuallyWork: false,
        position: ""
    }

    const personalInformationStore = ref<Partial<PersonalInformationStoreProps>>({});
    const workExperienceStore = ref<WorkExperienceStoreProps[]>([elementDefaultWork]);
    const educationStore = ref<EducationStoreProps[]>([]);
    const habilitiesStore = ref<HabilityStoreProps[]>([]);

    const currentStep = ref<string>("1");
    const MAXSTEP = optionsStep.value.length; // 5

    const nextStep = () => {
        const CURRENT = Number(currentStep.value);
        const next = CURRENT + 1;
        const nextStepValue = next <= MAXSTEP ? next.toString() : '1';
        currentStep.value = nextStepValue;
        if (next <= MAXSTEP) {
            enableStep(nextStepValue);
        }
    };

    const previousStep = () => {
        const CURRENT = Number(currentStep.value);
        const previous = CURRENT - 1; //4
        const previousStepValue = (previous <= MAXSTEP && previous !== 0) ? previous.toString() : '1';
        currentStep.value = previousStepValue;
    }

    const enableStep = (stepValue: string) => {
        const step = optionsStep.value.find(s => s.value === stepValue);
        if (step?.disabled) {
            step.disabled = false;
        }
    };
    const disableStep = (stepValue: string) => {
        const step = optionsStep.value.find(s => s.value === stepValue);
        if (step?.disabled) {
            step.disabled = true;
        }
    };

    return {
        personalInformationStore,
        workExperienceStore,
        educationStore,
        habilitiesStore,
        currentStep,
        nextStep,
        previousStep,
        enableStep,
        disableStep
    };

}, { persist: true });