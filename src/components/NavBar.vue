<template>
  <b-navbar class="">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
          <a class="button is-light" @click="logout">
            Log Out
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<style scoped>

nav {
  padding: 1rem 1.5rem !important;
}

</style>
<script>
export default {
  name: 'NavBar',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>