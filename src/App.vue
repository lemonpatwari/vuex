<template>
  <div id="app">
    <div class="container">
      <Header/>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Header from "@/components/Include/Header";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
