<template>
  <b-modal v-model="isModalActiveInput" scroll="keep">
    <div class="modal-content">
      <div class="container">
        <div class="card p-5">
          <b-tabs type="is-toggle" expanded>
            <b-tab-item label="Custom" icon="lead-pencil">
            </b-tab-item>
            <b-tab-item label="Manganelo" icon="library-music">
              <p> Añade tu mange buscándolo en Manganelo, obtén lista de capítulos, imágenes, descarga del manga..
                etc</p>
              <hr>
              <div class="columns">
                <div class="column">
                  <label class="label">Buscar</label>
                  <div class="field has-addons">
                    <div class="control">
                      <b-input v-model="searchInput"></b-input>
                    </div>
                    <div class="control">
                      <b-button label="Search" type="is-info" @click="searchAnime"></b-button>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <p class="is-4">Searching: {{ searchInputLabel }}</p>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <template v-for="(data, index) in searchResult">
                    <anime-search-result :data="data" :key="index"></anime-search-result>
                  </template>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Kakalot" icon="video" disabled></b-tab-item>
          </b-tabs>
        </div>
      </div>
    </div>
  </b-modal>
</template>
<script>
import AnimeSearchResult from "./AnimeSearchResult";
import axios from 'axios'

export default {
  props: ['isModalActive'],
  name: 'animeModal',
  components: {
    AnimeSearchResult
  },
  data() {
    return {
      searchInput: '',
      searchInputLabel: '',
      searchResult: []
    }
  },
  computed: {
    isModalActiveInput: {
      get: function () {
        return this.isModalActive
      },

      set: function (newValue) {
        this.$emit('update:isModalActive', newValue)

      }
    }
  },
  methods: {
    open() {
      this.loadingComponent = this.$buefy.loading.open({})
    },


    searchAnime() {
      this.open()
      this.searchInputLabel = this.searchInput
      axios.get(
          process.env.VUE_APP_BASE_URL + 'manganelo?search=' + this.searchInput
      )
          .then(response => {
            this.searchResult = response.data
            this.loadingComponent.close()
          })
    }
  }
}
</script>