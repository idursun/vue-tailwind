<template>
  <div id="app">
    <Navbar />
    <div class="flex">
      <Sidebar />
      <div class="flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import ActionBar from "@/components/ActionBar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Navbar, ActionBar, Sidebar }
};
</script>

<style src="./assets/tailwind.css" />
