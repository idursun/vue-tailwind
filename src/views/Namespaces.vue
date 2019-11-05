<template>
  <div>
    <h1>Namespaces</h1>
    <ul class="list-none">
      <li
        class="p-2 border-b-4 border-gray-200 hover:bg-gray-400"
        v-for="item in namespaces.items"
        :key="item.name"
      >{{item.metadata.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { KClient, NamespaceList } from "../client/kclient";

@Component
export default class Namespaces extends Vue {
  namespaces: NamespaceList = { items: [] };

  async mounted() {
    const client = new KClient();
    this.namespaces = await client.getNamespaces();
  }
}
</script>