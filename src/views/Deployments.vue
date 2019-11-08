<template>
  <div>
    <h1>Deployments</h1>
    <ul class="list">
      <li v-for="item in deployments.items" :key="item.name">{{item.metadata.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { KClient, DeploymentList } from "@/client/kclient";

@Component
export default class Deployments extends Vue {
  deployments: DeploymentList = { items: [] };

  async created() {
    this.deployments = await this.fetchData();
  }

  async fetchData() {
    const client = new KClient();
    return client.getDeployments();
  }
}
</script>