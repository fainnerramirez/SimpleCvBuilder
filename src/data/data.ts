import { v4 as uuid } from "uuid"
import type { Sections } from "../types/types"

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