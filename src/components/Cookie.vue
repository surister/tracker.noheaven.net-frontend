<template>
  <transition name="slide">
    <section class="cookie p-5" v-if="showCookie">
      <div class="columns is-vcentered">
        <div class="column has-text-left">
          <h1 class="title is-5 has-text-white"> This website uses cookies to ensure you get the best experience on our
            website.
            <b-icon icon="cookie"></b-icon>
          </h1>
        </div>
        <div class="column">
          <p class="buttons is-justify-content-flex-end">
            <b-button type="is-success" icon-right="cookie-check" size="is-medium" @click="acceptCookies">
              Aceptar
            </b-button>
            <b-button type="is-warning" icon-right="cookie-check" size="is-medium">Leer más</b-button>
          </p>
        </div>
      </div>
    </section>
  </transition>
</template>

<style scoped>
.cookie {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  right: 0;
  background: #424851;
}

.slide-leave-active,
.slide-enter-active {
  transition: .8s;
}
.slide-enter {
  transform: translateY(100%);
}
.slide-leave-to {
  transform: translateY(100%);
}

</style>
<script>
export default {
  name: 'Cookie',
  data: function () {
    return {
      showCookie: false
    }
  },
  methods: {
    acceptCookies() {
      this.$store.commit('accept_cookies')
      this.showCookie = false

    },
  },
  async mounted() {
    await new Promise(r => setTimeout(r, 500));
    this.showCookie = !this.$store.getters.cookiesAccepted
  }
}
</script>