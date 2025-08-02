<script setup>
import Section from "./section.vue";
import Slogon from "../assets/slogon.svg";
</script>

<template>
  <Section>
    <div :class="$style.slideCover">
      <slot />
    </div>
  </Section>
  <img
    :src="Slogon"
    alt="FHSH AiSP title"
    class="absolute top-[56%] left-[8%] w-[42%]"
  />
</template>

<style module lang="postcss">
.slideCover {
  @apply block;
}

.slideCover h1,
.slideCover h2 {
  @apply pl-0 text-center;
}
</style>
