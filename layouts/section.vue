<script setup>
import Base from './base.vue'
import SectionImg from '../assets/section-img.png'
import Slogon from '../assets/slogon.svg'
</script>

<template>
  <Base>
    <div :class="$style.slideSection">
      <slot />
    </div>
    <img class="absolute top-[40%] right-[5.5%] w-[48%]" :src="SectionImg" alt="Section Cover">
  </Base>
</template>

<style module lang="postcss">
.slideSection {
  @apply absolute top-[21%] left-[7%] w-[86%] h-[65%] z-2
}

.slideSection h1:first-of-type *,
.slideSection h2:first-of-type * {
  @apply block
}

.slideSection h1 {
  @apply pl-[6rem] pt-[1.3rem]
}

.slideSection h2 {
  @apply pl-[12rem] pt-[0.4rem] text-[2.6rem]
}
</style>
