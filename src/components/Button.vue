<template>
  <button class="bg-blue-400">
    <slot></slot>clicker
  </button>
</template>

<script lang="ts">
import Vue from "vue";

import { Prop, Component } from "vue-property-decorator";

@Component
export default class Button extends Vue {}
</script>

<style lang="postcss" scoped>
button {
  @apply p-2 rounded shadow bg-red-300;
}
button:hover {
  @apply bg-blue-400 text-gray-800;
}
button:active {
  @apply bg-blue-500;
}
</style>