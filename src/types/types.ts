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

export interface workExperienceProps {
    position: string,
    company: string,
    dateStart: string,
    dateEnd?: string,
    responsabilities: string
}

export interface educationProps {
    university: string,
    title: string,
    dateStart: Date,
    dateEnd?: Date
}

export interface habilitiesProps {
    hability: string
}