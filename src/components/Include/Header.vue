<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">

          <router-link class="nav-link" to="/">Home</router-link>

        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>

        <MiniCard/>

      </ul>
    </div>
  </nav>
</template>

<script>
import MiniCard from "@/components/Include/MiniCard";

export default {
  name: "Header",
  components: {
    MiniCard
  }
}
</script>

<style scoped>

</style>