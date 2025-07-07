import { defineStore } from "pinia";
import { ref } from "vue";
import type { EducationStoreProps, HabilityStoreProps, PersonalInformationStoreProps, WorkExperienceStoreProps } from "../types/types";
import { optionsStep } from "../data/data";
import { v4 as uuid } from "uuid";

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
    const updateStep = () => {
        const current = Number(currentStep.value);
        const maxSteps = optionsStep.value.length;
        const next = current + 1;

        const nextStepValue = next <= maxSteps ? next.toString() : '1';
        currentStep.value = nextStepValue;

        if (next <= maxSteps) {
            enableStep(nextStepValue);
        }

        console.log(`Navegando de paso ${current} a ${nextStepValue}`);
    };
    const enableStep = (stepValue: string) => {
        const step = optionsStep.value.find(s => s.value === stepValue);
        if (step?.disabled) {
            step.disabled = false;
            console.log(`Paso ${stepValue} habilitado`);
        }
    };
    const disableStep = (stepValue: string) => {
        const step = optionsStep.value.find(s => s.value === stepValue);
        if (step?.disabled) {
            step.disabled = true;
            console.log(`Paso ${stepValue} Inhabilitado`);
        }
    };

    return {
        personalInformationStore,
        workExperienceStore,
        educationStore,
        habilitiesStore,
        currentStep,
        updateStep,
        enableStep,
        disableStep
    };

}, { persist: true });