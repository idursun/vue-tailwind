<template>
  <div id="app">
    <Navbar />
    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar }
};
</script>

<style src="./assets/tailwind.css" />
