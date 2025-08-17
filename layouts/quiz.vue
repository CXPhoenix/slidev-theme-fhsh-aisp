<script setup>
import Default from "./default.vue";
import MultiChoice from "../components/MultiChoice.vue";
import { useSlideContext } from "@slidev/client";
import { ref } from "vue";

const { $frontmatter } = useSlideContext();
</script>

<template>
  <Default>
    <div :class="$style.quiz">
      <MultiChoice :is-offline="$frontmatter.isOffline ?? true" :ws-url="$frontmatter.wsUrl ?? 'ws://localhost:8000'" :ans="$frontmatter.ans ?? 0"><slot></slot></MultiChoice>
    </div>
  </Default>
</template>

<style module lang="postcss">
.quiz {
  @apply w-full h-full relative p-2;
}
</style>
