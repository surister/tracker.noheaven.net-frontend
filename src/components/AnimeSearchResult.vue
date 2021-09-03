<template>
  <section class="mt-4">
    <div class="card">
      <div class="card-content">
        <div class="columns">
          <div class="column is-narrow">
            <figure class="image is-128" style="width: 128px; height: 182px">
              <img :src=data.img alt="Placeholder image">
            </figure>
          </div>
          <div class="column is-one-fifth"></div>
          <div class="column has-text-left">
            <p class="title is-4">{{ data.title }}</p>
            <span class="subtitle is-6">Author/s: {{ data.authors }}</span><br>
            <span class="subtitle is-6">Vistas: {{ data.views }}</span><br>
            <span class="subtitle is-6">Chapters: {{ data.chapters_length }}</span><br>
            <span class="subtitle is-6">Last updated: {{ new Date(data.added).toLocaleDateString() }}</span><br>
            <br>
            <b-rate maxs="5" v-model="data.ratings" :disabled="true" :show-score="true">67</b-rate>
          </div>
          <div class="column is-narrow">
            <template v-if="data.user_has_it">
              <b-tooltip label="You already have this anime"
                         position="is-left"
                         :animated="false"
                         type="is-dark">

                <b-button icon-left="minus" disabled/>
              </b-tooltip>
            </template>
            <template v-else>
              <b-tooltip label="Add this anime to your list"
                         position="is-left"
                         :animated="false">
                <b-button icon-left="plus" v-on:click="addAnime"/>
              </b-tooltip>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import snackbars from "../snackbars";
export default {
  name: 'AnimeSearchResult',
  props: ['data'],
  data: function () {
    return {}
  },
  methods: {
    addAnime() {
      axios.post(
          process.env.VUE_APP_BASE_URL + 'core/add-anime/',
          {'id': 6, 'title': this.data.title, 'source': 2}
      ).then(result => {
        if (result.status === 200) {
          this.data.user_has_it = true
          snackbars.successAddAnime()
        }
      }).catch(error => {
        console.log(error)
        snackbars.errorWarning()
      })

    },
  }
}
</script>