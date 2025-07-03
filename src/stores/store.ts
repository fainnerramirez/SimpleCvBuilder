import { defineStore } from "pinia";
import { ref } from "vue";
import type { EducationStoreProps, HabilityStoreProps, PersonalInformationStoreProps, WorkExperienceStoreProps } from "../types/types";

export const useSimpleCvStore = defineStore('simpleCVBuilderStore', () => {

    const personalInformationStore = ref<PersonalInformationStoreProps | null>(null);
    const workExperienceStore = ref<WorkExperienceStoreProps[]>([]);
    const educationStore = ref<EducationStoreProps[]>([]);
    const habilitiesStore = ref<HabilityStoreProps[]>([]);

    return { personalInformationStore, workExperienceStore, educationStore, habilitiesStore };
}, { persist: true });