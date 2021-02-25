<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
       aria-haspopup="true" aria-expanded="false">
      Card <span class="badge badge-info">{{ cartItemCount }}</span>
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <ul>
        <li v-for="(n,i) in cart" :key="i">{{ n.product.course_code }} / {{ n.quantity }} <a href="#">remove</a></li>
      </ul>


      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Clear</a>
    </div>
  </li>
</template>

<script>
export default {
  name: "MiniCard",

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    }
  }
}
</script>

<style scoped>

</style>