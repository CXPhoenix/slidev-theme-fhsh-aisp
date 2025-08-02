<script setup>
import Default from "./default.vue";
</script>

<template>
  <Default>
    <div :class="$style.image">
      <slot />
    </div>
  </Default>
</template>

<style module lang="postcss">
.image {
  @apply w-full h-full;
}

.image * {
  @apply hidden;
}

.image p:first-of-type {
  @apply flex justify-center item-center h-full text-[0px];
}

.image p img:first-child {
  @apply block object-cover;
}
</style>
