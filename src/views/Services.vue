<template>
  <div>
    <div class="p-4 bg-gray-200 text-black items-center border-b-2 shadow-md">
      <h1 class="w-full font-semibold shadow-sm">Services</h1>
    </div>
    <div class="m-2 p-2">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr>
            <th class="p-2 uppercase bg-gray-200 font-bold border-gray-300 border-b">Name</th>
            <th class="p-2 uppercase bg-gray-200 font-bold border-gray-300 border-b">Type</th>
            <th class="p-2 uppercase bg-gray-200 font-bold border-gray-300 border-b">Ports</th>
            <th class="p-2 uppercase bg-gray-200 font-bold border-gray-300 border-b">Selector</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in services.items" :key="item.metadata.name">
            <td class="p-2 border">{{item.metadata.name}}</td>
            <td class="p-2 border">{{item.spec.type}}</td>
            <td class="p-2 border">{{item.spec.ports}}</td>
            <td class="p-2 border">{{item.spec.selector}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { KClient, ServiceList } from "@/client/kclient";

interface Data {
  services: ServiceList;
}

export default Vue.extend({
  data(): Data {
    return {
      services: { items: [] }
    };
  },
  async created() {
    this.services = await this.fetchData();
  },
  methods: {
    async fetchData() {
      const client = new KClient();
      return client.getServices();
    }
  }
});
</script>