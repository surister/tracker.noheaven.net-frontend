<template>
  <main>
    <nav-bar class="section"></nav-bar>
    <section class="section" style="border-top: 2px solid #f5f5f5;">
      <router-view></router-view>
    </section>
    <cookie></cookie>
  </main>
</template>
<script>
import NavBar from "../components/NavBar";
import Cookie from "../components/Cookie";

export default {
  components: {NavBar, Cookie}
}
</script>