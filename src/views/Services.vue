<template>
  <div>
    <div class="p-2 px-4 text-black items-center border-b-2 border-indigo-300">
      <h1 class="w-full font-semibold tracking-widest text-xl">Services</h1>
    </div>
    <div class="m-2">
      <div
        class="p-2 m-2 my-4 shadow bg-gray-100 border-l-4 border-blue-400 rounded-sm flex"
        v-for="item in services.items"
        :key="item.metadata.name"
      >
        <div class="items-center w-1/5">
          <span class="text-xl font-semibold tracking-wider">{{item.metadata.name}}</span>
          <span class="pl-1 text-sm font-semibold text-gray-600 tracking-wider">{{item.spec.type}}</span>
          <div
            class="text-sm font-semibold text-gray-600 tracking-wider"
          >{{item.metadata.namespace}}</div>
        </div>

        <div class="pl-2 items-center border-l-2 w-1/5">
          <span class="block pl-1 text-gray-700 font-bold">Labels</span>
          <div>
            <div
              class="inline-block p-1 m-1 rounded bg-indigo-600 text-gray-100 text-xs font-semibold tracking-wider whitespace-no-wrap cursor-pointer"
              v-for="(value,label) in item.metadata.labels"
              :key="label + value"
              @click="filterByLabel(label, value)"
            >
              <span class="text-xs text-gray-100 font-normal">{{label}}</span>:
              <span class="text-xs text-gray-100 font-semibold">{{value}}</span>
            </div>
          </div>
        </div>

        <div class="pl-2 items-center border-l-2 w-1/5">
          <span class="block pl-1 text-gray-700 font-semibold">Selectors</span>
          <div>
            <div
              class="inline-block p-1 m-1 rounded bg-indigo-600 text-gray-100 text-xs font-semibold tracking-wider whitespace-no-wrap"
              v-for="(value, selector) in item.spec.selector"
              :key="selector + value"
            >
              <span class="text-xs text-gray-100 font-normal">{{selector}}</span>:
              <span class="text-xs text-gray-100 font-semibold">{{value}}</span>
            </div>
          </div>
        </div>

        <div class="pl-2 items-center border-l-2 w-1/5">
          <span class="block pl-1 text-gray-700 font-semibold">Ports</span>
          <div>
            <span
              class="inline-block p-1 m-1 px-2 rounded bg-indigo-600 text-gray-100 text-xs tracking-wider whitespace-no-wrap"
              v-for="port in item.spec.ports"
              :key="port.name"
            >{{port.name}}: {{port.port}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { KClient, ServiceList } from "@/client/kclient";
import router from "../router";

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
    this.fetchData(this.$router.currentRoute.query as Record<string, string>);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(to.query as Record<string, string>);
    next();
  },
  methods: {
    async filterByLabel(label: string, value: string) {
      let filter: Record<string, string> = {};
      filter[label] = value;
      console.log(filter)
      this.$router.push({ query: filter });
    },
    async fetchData(filter: Record<string, string>) {
      const client = new KClient();
      this.services = await client.getServices(filter);
    }
  }
});
</script>