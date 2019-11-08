<template>
  <div class="flex bg-blue-800 w-full h-10 p-2">
    <div class="px-2">
      <span class="pr-2 text-white">Namespaces: ({{currentSelection}})</span>
      <select class="border-0" v-model="currentSelection">
        <option>default</option>
        <option>default2</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      currentSelection: ""
    };
  },
  watch: {
    currentSelection: function(old) {
      console.log(old);
    }
  }
});
</script>