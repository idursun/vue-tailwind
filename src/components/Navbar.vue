<template>
  <div id="nav" class="flex items-center bg-white m-0 p-2 shadow-lg">
    <router-link class="p-2 hover:bg-blue-100 border-gray-100 hover:shadow" to="/namespaces">
      <i class="fa fa-check text-green-300"></i> Namespaces
    </router-link>
    <router-link class="p-2 hover:bg-blue-100 border-gray-100 hover:shadow" to="/pods">Pods</router-link>
    <router-link
      class="p-2 hover:bg-blue-100 border-gray-100 hover:shadow"
      to="/deployments"
    >Deployments</router-link>
    <router-link class="p-2 hover:bg-blue-100 border-gray-100 hover:shadow" to="/services">Services</router-link>
  </div>
</template>

<script>
export default {};
</script>