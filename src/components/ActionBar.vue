<template>
  <div class="flex m-0 bg-gray-200 p-2 border-0 border-b-2 h-12 items-center shadow-lg">
    <div class="px-2">
      <span class="pr-2">Namespaces: ({{currentSelection}})</span>
      <select class="border-0" v-model="currentSelection">
        <option v-for="ns in ">default</option>
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