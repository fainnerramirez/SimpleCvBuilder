<template>
    <el-tree style="max-width: 600px" :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FieldAddComponent from "./FieldAdd.component.vue";

export default defineComponent({
    name: 'TreeSectionsComponent',
    components: {
        FieldAddComponent
    },
    data() {
        return {
            personalInformation: []
        };
    },
    methods: {

    },
});
</script>

<script lang="ts" setup>
interface childrenProps {
    label: string,
    action?: Function
}

interface Children {
    label: string,
    children: childrenProps[]
}
interface Tree {
    label: string
    children?: Children[],
}

const handleNodeClick = (data: Tree) => {
    console.log(data)
}

const data: Tree[] = [
    {
        label: 'Información Personal',
        children: [
            {
                label: 'Campos a usar',
                children: [
                    {
                        label: 'Nombre Completo',
                    },
                    {
                        label: 'Teléfono o Celular',
                    },
                    {
                        label: 'Dirección',
                    },
                    {
                        label: 'Correo electrónico',
                    },
                    {
                        label: "Agregar nuevo campo",
                        action: () => {
                            console.log("Hola");
                        }
                    }
                ],
            },
        ],
    },
    {
        label: 'Level one 2',
        children: [
            {
                label: 'Level two 2-1',
                children: [
                    {
                        label: 'Level three 2-1-1',
                    },
                ],
            },
            {
                label: 'Level two 2-2',
                children: [
                    {
                        label: 'Level three 2-2-1',
                    },
                ],
            },
        ],
    },
    {
        label: 'Level one 3',
        children: [
            {
                label: 'Level two 3-1',
                children: [
                    {
                        label: 'Level three 3-1-1',
                    },
                ],
            },
            {
                label: 'Level two 3-2',
                children: [
                    {
                        label: 'Level three 3-2-1',
                    },
                ],
            },
        ],
    },
]

const defaultProps = {
    children: 'children',
    label: 'label',
}
</script>