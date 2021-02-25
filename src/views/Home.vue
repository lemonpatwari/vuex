<template>
  <div class="mt-5">

    <div class="row">
      <div v-for="(n,i) in productData" :key="i" class="col-lg-4 col-md-4 col-sm-6 mb-3">
        <Product :row="n"/>
      </div>
    </div>

  </div>
</template>

<script>
import Product from '@/components/Product'
// import {products} from "@/data/products";
export default {
  name: "Home",
  components:{
    Product
  },
  computed: {
    productData() {
      return this.$store.state.products;
    }
  },

  mounted() {
    this.$store.dispatch('getProducts');
  }
}
</script>

<style scoped>

</style>