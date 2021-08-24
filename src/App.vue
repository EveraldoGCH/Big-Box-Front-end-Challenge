<template>
  <div id="app">
    <div class="navbar">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Books from "./components/Books.vue";
import Categories from "./components/Categories.vue";

export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.navbar {
  background-color: #333;
  width: 100%;
  height: 96px;
  position: absolute;
  z-index: 0;
}

</style>
