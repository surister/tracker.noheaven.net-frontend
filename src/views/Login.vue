<template>
  <section>
    <div class="container pt-6">
      <transition name="slide-fade" mode="out-in">
        <div v-if="show" :key="21">
          <h1 class="title">Login</h1>
          <div class="columns is-centered">
            <div class="column is-two-fifths box">
              <div class="p-3">
                <b-field label="Username" label-position="on-border" :type="{ 'is-danger': hasError }"
                >
                  <b-input placeholder="Username" v-model="username"></b-input>
                </b-field>
                <div style="height: 20px"></div>
                <b-field label="Password" label-position="on-border"
                         :type="{ 'is-danger': hasError,}">


                  <b-input placeholder="Password" type="password" v-model="password"></b-input>
                </b-field>
                <p class="has-text-danger">{{ errorMessage }}</p>
                <div class="content p-3">
                  <b-button type="is-dark" @click="login"><span class="button__text">Login</span></b-button>
                  <br>
                  <hr>
                  <p>Still not an user? <br><a @click="show = !show">Sign up</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!show" :key="2">
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

export default {
  name: 'login',
  data: function () {
    return {
      show: true,
      username: '',
      password: '',
      hasError: false,
      hasErrorShortPassword: false,
      hasErrorWrongLogin: false,
      hasErrorEmptyFields: false,
    }
  },

  computed: {
    errorMessage: function () {
      if (this.hasErrorShortPassword) {
        return 'Password must have at least 8 characters'
      }
      if (this.hasErrorWrongLogin) {
        return 'Wrong username or password'
      }

      if (this.hasErrorEmptyFields) {
        return 'The field/s is empty!'
      }
      return ''
    }
  },

  methods: {
    _toggleLoginLoadingAnimation(eventTarget) {
      eventTarget.closest('button').classList.toggle('button--loading')
    },
    _removeErrors() {
      this.hasError = this.hasErrorEmptyFields = this.hasErrorShortPassword = this.hasErrorWrongLogin = false

    },

    _validateLoginFields(eventTarget) {
      if (this.password.length === 0 || this.username.length === 0) {
        this.hasError = this.hasErrorEmptyFields = true
        this._toggleLoginLoadingAnimation(eventTarget)
        return true;
      }
      if (this.password.length < 4) {
        this.hasError = this.hasErrorShortPassword = true
        this._toggleLoginLoadingAnimation(eventTarget)
        return true;
      }

    },

    async login() {
      let validationError = false

      // We animate the login button.
      let eventTarget = event.target
      this._toggleLoginLoadingAnimation(eventTarget)

      // Remove all errors so we can raise them again.
      this._removeErrors()

      // Validate that fields comply, if not we stop and show the proper errors.
      validationError = this._validateLoginFields(eventTarget)

      // We should not make any http request until there are no validation errores.
      if (validationError) {
        return
      }

      // Sleep to simulate backend delay for the loading animation.
      await new Promise(r => setTimeout(r, 1000))

      const username = this.username
      const password = this.password

      this.$store.dispatch(
          'login', {username, password}
      )
          // eslint-disable-next-line no-unused-vars
          .catch(response => {
            this.hasError = this.hasErrorWrongLogin = true
          })

      // Once the whole login is done, we stop the animation.
      this._toggleLoginLoadingAnimation(eventTarget)
    }
  }
}
</script>
<style scoped>

.button__text {
  transition: all 0.2s;
}

.button--loading .button__text {
  visibility: hidden;
  opacity: 0;
}

.button--loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}


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