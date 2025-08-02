<script setup>
import { useSlideContext } from '@slidev/client';

const { $slidev } = useSlideContext();
const skipPageNumber = () => {
  return $slidev?.configs.skipPageNumberLayouts.includes($slidev.nav.currentLayout)
}
</script>

<template>
  <div class="slidev-layout relative">
    <slot />
    <div v-if="!skipPageNumber()" class="absolute bottom-[5%] left-[7%] w-[86%]">
      <p class="text-[1rem] text-center">
        {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
      </p>
    </div>
  </div>
</template>
