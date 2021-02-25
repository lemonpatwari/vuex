<template>
  <div class="card">
    <img class="card-img-top" src="https://via.placeholder.com/100C/O https://placeholder.com/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ row.course_code }}</h5>
      <p class="card-text">{{ row.course_name }}</p>
      <button type="button" @click="addToCard" class="btn btn-primary">Add to card</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    row: {
      type: Object
    }
  },
  methods: {
    addToCard() {
      this.$store.dispatch('addToCard', {
        product: this.row,
        quantity: 1
      })
    }
  }
}
</script>

<style scoped>

</style>