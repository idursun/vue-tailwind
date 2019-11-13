<template>
  <div class="flex flex-wrap m-4">
    <div
      v-for="i in items"
      :key="i"
      class="m-2 p-4 w-1/6 bg-gray-100 border-gray-200 rounded-sm shadow border-l-4 relative"
      :class="{'border-blue-600': i % 3 == 0, 'border-green-600': i % 3 == 1, 'border-red-600' : i % 3 == 2}"
    >
      <i class="p-2 text-lg fa fa-times top-0 right-0 absolute" @click="hide(i)"></i>
      <p class="text-center text-5xl">{{i}}</p>
      <p class="text-center uppercase">pods</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "@/components/Button.vue";

export default Vue.extend({
  data() {
    return {
      items: [1, 2, 3, 4, 11, 21, 9, 32]
    };
  },
  methods: {
    hide(index: number) {
      this.items = this.items.filter(i => i != index);
    }
  }
});
</script>
