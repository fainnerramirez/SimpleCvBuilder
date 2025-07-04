import { defineStore } from "pinia";
import { ref } from "vue";
import type { EducationStoreProps, HabilityStoreProps, OptionsSteps, PersonalInformationStoreProps, WorkExperienceStoreProps } from "../types/types";
import {
    User,
    School,
    Star,
    Document,
    Suitcase
} from '@element-plus/icons-vue';

export const useSimpleCvStore = defineStore('simpleCVBuilderStore', () => {

    const personalInformationStore = ref<Partial<PersonalInformationStoreProps>>({});
    const workExperienceStore = ref<WorkExperienceStoreProps[]>([]);
    const educationStore = ref<EducationStoreProps[]>([]);
    const habilitiesStore = ref<HabilityStoreProps[]>([]);

    //variables globales
    const currentStep = ref<string>("1");
    const optionsStep = ref<OptionsSteps[]>([
        { label: 'Información Personal', value: '1', icon: User, disabled: false },
        { label: 'Experiencia Laboral', value: '2', icon: Suitcase, disabled: true },
        { label: 'Educación', value: '3', icon: School, disabled: true },
        { label: 'Habilidades', value: '4', icon: Star, disabled: true },
        { label: 'Vista Previa', value: '5', icon: Document, disabled: true }
    ]);

    const updateStep = () => {
        const stepDefault = '1';
        const stepNumber = Number(currentStep.value);
        console.log("Se ejecuto el chaneg Step: ", currentStep.value);
        const newStep = (stepNumber + 1);
        if (newStep <= optionsStep.value.length) {
            currentStep.value = newStep.toString();
        }
        else {
            currentStep.value = stepDefault;
        }

        const element = optionsStep.value.find(e => e.value === newStep.toString());
        console.log("Elemento a actualizar: ", element);

        if (element) {
            element.disabled = false;
            console.log("Elemento actualizado: ", element);
        }
    }

    return {
        personalInformationStore,
        workExperienceStore,
        educationStore,
        habilitiesStore,
        currentStep,
        optionsStep,
        updateStep
    };

}, { persist: true });