<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {}
    },
    methods: {},
});
</script>

<template>
    <div class="builder__header__app">
        <h1>SIMPLE CV BUILDER</h1>
        <p>Crea tu CV fácilmente con un diseño minimalista y optimizado para reclutadores</p>
    </div>
</template>

<style scoped>
.builder__header__app {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
}

p {
    padding: 0;
    margin: 0;
}
</style>