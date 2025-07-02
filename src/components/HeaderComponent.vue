<script lang="ts" setup>
import type { MaybeElement } from '@vueuse/core'
import { reactify, useAnimate } from '@vueuse/core'
import { reactive, useTemplateRef } from 'vue'
import YAML from 'yaml'

const stringify = reactify(
  (input: any) => YAML.stringify(input, (k, v) => {
    if (typeof v === 'function') {
      return undefined
    }
    return v
  }, {
    singleQuote: true,
    flowCollectionPadding: false,
  }),
)

const el = useTemplateRef<MaybeElement>('el')

const {
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
} = useAnimate(
  el,
  [
    { clipPath: 'circle(20% at 0% 30%)' },
    { clipPath: 'circle(20% at 50% 80%)' },
    { clipPath: 'circle(20% at 100% 30%)' },
  ],
  {
    duration: 3000,
    iterations: 3,
    direction: 'alternate',
    easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
  },
)

const text = stringify(reactive({
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
}))
</script>

<template>
    <div class="builder__header__app">
        <h1 ref="el">SIMPLE CV BUILDER</h1>
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

.builder__header__app > h1 {
    font-size: 2rem;
    font-weight: bolder;
}

p {
    padding: 0;
    margin: 0;
}
</style>