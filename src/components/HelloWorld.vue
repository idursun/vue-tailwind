<template>
  <div class="flex flex-column">
    <input class="p-2 m-2" v-model="message" />
    <p>{{message}}</p>
    <Button @click="say_hello">my stuff goes here</Button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/Button.vue";

@Component({ components: { Button } })
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  message: string = "";

  say_hello() {
    window.alert(this.message);
  }
}
</script>
