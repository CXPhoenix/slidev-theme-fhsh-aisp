<script setup>
import Base from './base.vue'
import Slogon from '../assets/slogon.svg'
</script>

<template>
  <Base>
    <div class="absolute" :class="$style.content">
      <slot />
    </div>
    <img class="absolute bottom-[4%] right-[2%] w-[12%]" :src="Slogon" alt="Section Cover">
  </Base>
</template>

<style module lang="postcss">
.content {
  @apply absolute top-[21%] left-[7%] w-[86%] h-[65%]
}

.content h1 {
  @apply hidden
}

.content h1:first-child {
  @apply absolute -top-[18%] w-full h-[4rem] block text-center;
}
</style>