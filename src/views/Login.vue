<template>
  <section>
    <div class="container pt-6">
      <transition name="slide-fade" mode="out-in">
        <div v-if="show" :key="login">
          <h1 class="title">Login</h1>
          <div class="columns is-centered">
            <div class="column is-two-fifths box">
              <div class="p-3">
                <b-field label="Username" label-position="on-border">
                  <b-input placeholder="Username" v-model="username"></b-input>
                </b-field>
                <div style="height: 20px"></div>
                <b-field label="Password" label-position="on-border">
                  <b-input placeholder="Password" type="password" v-model="password"></b-input>
                </b-field>
                <div class="content p-3">
                  <b-button type="is-dark" @click="login">Login</b-button>
                  <br>
                  <hr>
                  <p>Still not an user? <br><a @click="show = !show">Sign up</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!show" :key="signup">
          <h1 class="title">Signup</h1>
          <div class="columns is-centered">
            <div class="column is-two-fifths box">
              <div class="p-3 sign-up-form">
                <b-field label="Email" label-position="on-border">
                  <b-input value="Kevin Garvey" type="email"></b-input>
                </b-field>
                <b-field label="Username" label-position="on-border">
                  <b-input value="Kevin Garvey"></b-input>
                </b-field>
                <b-field label="Password" label-position="on-border">
                  <b-input value="Kevin Garvey" type="password"></b-input>
                </b-field>
                <b-field label="Password1" label-position="on-border">
                  <b-input value="Kevin Garvey" type="password"></b-input>
                </b-field>
                <div class="content p-3">
                  <b-button type="is-dark">Sign Up</b-button>
                  <hr>
                  <p>Already an user? <a @click="show = !show">Sign In</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: 'login',
  data: function () {
    return {
      show: true,
      username: '',
      password: '',
    }
  },

  methods: {
    login() {
      axios.post('http://0.0.0.0:8000/login/',
          {
            'username': this.username,
            'password': this.password
          })
    }
  }
}
</script>
<style scoped>
.sign-up-form > .field:not(:last-child) {
  margin-bottom: 1.75rem;

}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}
</style>