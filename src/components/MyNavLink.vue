<template>
  <router-link class="p-2 hover:bg-blue-800 hover:text-white hover:shadow-lg" :to="to">
    <i class="pr-1 text-blue-300" :class="classObject"></i>
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    classObject() {
      return {
        fa: true,
        [`fa-${this.icon}`]: true
      };
    }
  },
  props: ["to", "icon"]
});
</script>