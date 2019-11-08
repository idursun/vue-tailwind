<template>
  <div
    id="nav"
    class="flex items-center m-0 p-2 bg-blue-900 text-gray-100 font-semibold hover:text-gray-300 shadow-lg"
  >
    <MyNavLink to="/namespaces" icon="check">Namespaces</MyNavLink>
    <MyNavLink to="/deployments" icon="cross">Deployments</MyNavLink>
    <MyNavLink to="/services" icon="address-book">Services</MyNavLink>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyNavLink from "@/components/MyNavLink.vue";

export default {
  components: { MyNavLink }
};
</script>