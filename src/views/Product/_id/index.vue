<template>
  <h1>working......... {{ this.$route.params.id }}</h1>


</template>

<script>
export default {
  name: "index",
  data() {
    return {
      id: this.$route.params.id
    }
  },

  mounted() {
    // return this.$store.dispatch('getProduct',this.id)
  }
}
</script>

<style scoped>

</style>