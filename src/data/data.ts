import { v4 as uuid } from "uuid"
import type { OptionsSteps, Sections } from "../types/types"
import { ref } from "vue";
import {
    User,
    School,
    Star,
    Document,
    Suitcase
} from '@element-plus/icons-vue';

export const data: Sections[] = [
    {
        id: uuid(),
        label: 'Información Personal',
    },
    {
        id: uuid(),
        label: 'Experiencia Laboral',
    },
    {
        id: uuid(),
        label: 'Educación',
    },
    {
        id: uuid(),
        label: 'Habilidades',
    }
]

export const defaultProps = {
    children: 'children',
    label: 'label',
}

export const optionsStep = ref<OptionsSteps[]>([
    { label: 'Información Personal', value: '1', icon: User, disabled: false },
    { label: 'Experiencia Laboral', value: '2', icon: Suitcase, disabled: true },
    { label: 'Educación', value: '3', icon: School, disabled: true },
    { label: 'Habilidades', value: '4', icon: Star, disabled: true },
    { label: 'Vista Previa', value: '5', icon: Document, disabled: true }
]);