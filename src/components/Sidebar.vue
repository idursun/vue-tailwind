<template>
  <div class="sidebar flex-shrink-0 h-screen bg-gray-100 shadow-lg">
    <router-link
      class="m-2 p-2 flex items-center justify-between hover:bg-coldblue-200 hover:shadow-md rounded-sm text-blue-900"
      v-for="item in items"
      :key="item.name"
      :to="item.to"
    >
      <i v-if="item.icon" class="fa w-6 font-semibold text-blue-800" :class="item.icon"></i>
      <div class="flex-1 leading-relaxed font-semibold">{{item.name}}</div>
      <span
        class="p-1 px-2 font-bold text-xs rounded-full bg-coldblue-200"
        v-if="item.badge"
      >{{item.badge}}</span>
    </router-link>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      items: [
        {
          name: "Deployments",
          icon: "fa-server",
          to: "/deployments"
        },
        { name: "Pods", icon: "fa-address-book", to: "/pods", badge: 2 },
        { name: "Jobs", icon: "fa-clock-o", to: "/jobs", badge: 3 },
        { name: "Services", icon: "fa-cogs", to: "/services", badge: 1 }
      ]
    };
  }
});
</script>

<style scoped>
.sidebar {
    width: 200px;
}
</style>
