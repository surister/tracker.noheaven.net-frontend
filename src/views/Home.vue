<template>
  <div class="container">
    <div class="card p-4">
      <h1 class="title">Debug stuff</h1>
      <b-switch v-model="isLoading">
        {{ isLoading }}
      </b-switch>
      <b-switch v-model="isCompact">
        {{ isCompact }}
      </b-switch>
      <b-button @click="isModalActive = !isModalActive">Activar modal</b-button>
    </div>
    <div style="height: 100px"></div>
    <div class="columns is-multiline" v-if="isCompact">
      <div class="column is-one-third" v-for="(anime_data, index) in anime_fetch_data" :key="index">
        <anime-card :data="anime_data" :loading="isLoading" :key="index"></anime-card>
      </div>
    </div>
    <div class="columns" v-else>
      <div class="column">
        <anime-table :data="anime_fetch_data" :loading="isLoading"></anime-table>
      </div>
    </div>
    <anime-add-modal :is-modal-active.sync="isModalActive"></anime-add-modal>
  </div>
</template>

<script>
import AnimeCard from "../components/AnimeCard";
import AnimeAddModal from "../components/AnimeAddModal";
import AnimeTable from "../components/AnimeTable";
import axios from "axios";

export default {
  name: 'Home',
  components: {
    AnimeCard,
    AnimeAddModal,
    AnimeTable

  },
  data: function () {
    return {
      isCompact: false,
      isModalActive: false,
      isLoading: false,
      anime_fetch_data: []
    }
  },
  mounted() {
    this.fetchAnimes()
  },
  methods: {
    fetchAnimes() {
      axios.get(process.env.VUE_APP_BASE_URL + 'core/get-anime/'
      ).then(response => {
        this.anime_fetch_data = response.data
        console.log(this.anime_fetch_data)
      })
    }
  }

}

</script>