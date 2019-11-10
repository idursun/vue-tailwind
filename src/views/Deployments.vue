<template>
  <div>
    <div class="p-4 bg-gray-200 text-black items-center border-b-2 shadow-md">
      <h1 class="w-full font-semibold shadow-sm">Deployments</h1>
    </div>
    <div class="m-2 p-2">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr>
            <th class="p-2 uppercase bg-gray-200 font-bold border-gray-300 border-b">Name</th>
            <th class="p-2 uppercase bg-gray-200 font-bold border-gray-300 border-b">Ready</th>
            <th class="p-2 uppercase bg-gray-200 font-bold border-gray-300 border-b">Up to date</th>
            <th class="p-2 uppercase bg-gray-200 font-bold border-gray-300 border-b">Available</th>
            <th class="p-2 uppercase bg-gray-200 font-bold border-gray-300 border-b">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in deployments.items" :key="item.metadata.name">
            <td class="p-2 border">{{item.metadata.name}}</td>
            <td class="p-2 border">{{item.status.readyReplicas}} / {{item.status.replicas}}</td>
            <td class="p-2 border">{{item.status.readyReplicas}}</td>
            <td class="p-2 border">{{item.status.availableReplicas}}</td>
            <td class="p-2 border"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { KClient, DeploymentList } from "@/client/kclient";

interface Data {
  deployments: DeploymentList;
}

export default Vue.extend({
  data(): Data {
    return {
      deployments: { items: [] }
    };
  },
  async created() {
    this.deployments = await this.fetchData();
  },
  methods: {
    async fetchData() {
      const client = new KClient();
      return client.getDeployments();
    }
  }
});
</script>