<template>
  <div>
    <h1>Namespaces</h1>
    <ul class="list-none">
      <li
        class="p-2 border-b-4 border-gray-200 hover:bg-gray-400"
        v-for="item in namespaces.items"
        :key="item.name"
      >
        <router-link
          :to="{name: 'namespace', params: {namespace: item.metadata.name}}"
        >{{item.metadata.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { KClient, NamespaceList } from "../client/kclient";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
Component.registerHooks(["beforeRouteUpdate"]);

@Component
export default class Namespaces extends Vue {
  namespaces: NamespaceList = { items: [] };
  @Prop(String) namespace?: string;

  async created() {
    this.namespaces = await this.fetchData();
    console.log(this.namespace);
  }

  async beforeRouteUpdate(to: any, from: any, next: any) {
    console.log(to);
    next();
  }

  async mounted() {
    console.log(this.namespace);
  }

  async fetchData() {
    const client = new KClient();
    return client.getNamespaces();
  }
}
</script>