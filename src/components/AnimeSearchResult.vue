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
            <span class="subtitle is-6">Last updated: {{ data.added }}</span><br>
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
      let data = {
        'title': this.data.title,
        'chapter_count': this.data.chapter_count,
        'authors': this.data.authors,
        'image': this.data.img,
        'url': this.data.url,
        'ratings': this.data.ratings,
        'last_updated': this.data.updated,
        'views': this.data.views,
        'type': 1,
      }

      let animeData = {
        'id': Math.random() * 1000000,
        'anime_data': {
          'title': this.data.title,
          'authors': this.data.authors,
          'chapter_count': this.data.chapter_count,
          'image': this.data.img,
          'views': this.data.views,

        },
        'anime_profile': {
          'current_chapter': 1,
          'last_time_read': new Date().toISOString().split('T')[0]
        },

      }
      axios.post(
          process.env.VUE_APP_BASE_URL + 'core/add-anime/',
          data
      ).then(result => {
        if (result.status === 200) {
          this.data.user_has_it = true
          this.$store.commit('add_anime_data', animeData)
          snackbars.successAddAnime()
        }
        // eslint-disable-next-line no-unused-vars
      }).catch(error => {
        snackbars.errorWarning()
      })

    },
  }
}
</script>