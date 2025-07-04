export interface childrenAction {
    label: string,
    action?: () => void
}

export interface SectionChildrenProps {
    id: string,
    children: any[]
}

export interface Sections {
    id: string,
    label: string
    children?: SectionChildrenProps[],
}

export interface PersonalInformationStoreProps {
    username: string,
    email: string,
    phone: string,
    location: string,
    url_web: string,
    summary: string
}

export interface WorkExperienceStoreProps {
    id: string,
    company: string,
    position: string,
    dateStart: string,
    dateEnd: string,
    isActuallyWork: boolean,
    description: string
}

export interface EducationStoreProps {
    institution: string,
    titleGraduation: string,
    fieldStudy: string,
    dateStart: string,
    dateEnd: string
}

export interface HabilityStoreProps {
    name: string,
    level: number, //1 a 3, 1 = básico, 2 = intermedio, 3 = avanzado
}

export type OptionsSteps = {
    label: string,
    value: string,
    icon: any,
    disabled: boolean
}