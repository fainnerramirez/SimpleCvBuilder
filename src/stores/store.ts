import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore('simpleCVBuilderStore', () => {

    interface PersonalInformationStoreProps {
        username: string,
        email: string,
        phone: string,
        location: string,
        url_web: string,
        summary: string
    }

    interface WorkExperienceStoreProps {
        company: string,
        position: string,
        dateStart: string,
        dateEnd: string,
        isActuallyWork: boolean,
        description: string
    }

    interface EducationStoreProps {
        institution: string,
        titleGraduation: string,
        fieldStudy: string,
        dateStart: string,
        dateEnd: string
    }

    interface HabilityStoreProps {
        name: string,
        level: number, //1 a 3, 1 = básico, 2 = intermedio, 3 = avanzado
    }

    const personalInformationStore = ref<PersonalInformationStoreProps | null>(null);
    const workExperienceStore = ref<WorkExperienceStoreProps[]>([]);
    const educationStore = ref<EducationStoreProps[]>([]);
    const habilitiesStore = ref<HabilityStoreProps[]>([]);

    return { personalInformationStore, workExperienceStore, educationStore, habilitiesStore };
});