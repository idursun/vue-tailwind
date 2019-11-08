<template>
  <div id="app">
    <Navbar />
    <ActionBar />
    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import ActionBar from "@/components/ActionBar.vue";

export default {
  components: { Navbar, ActionBar }
};
</script>

<style src="./assets/tailwind.css" />
