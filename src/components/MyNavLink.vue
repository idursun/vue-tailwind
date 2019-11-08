<template>
  <router-link class="p-2 hover:bg-blue-700 hover:text-white hover:shadow" :to="to">
    <i :class="classObject"></i>
    {{prefix}}
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