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
      <div class="column is-one-third" v-for="(data, index) in animes" :key="index">
        <anime-card :data="data" :loading="isLoading" :key="index"></anime-card>
      </div>
    </div>
    <div class="columns" v-else>
      <div class="column">
        <anime-table></anime-table>
      </div>
    </div>
    <anime-add-modal :is-modal-active.sync="isModalActive"></anime-add-modal>
  </div>

</template>
<script>
import AnimeCard from "../components/AnimeCard";
import AnimeAddModal from "../components/AnimeAddModal";
import AnimeTable from "../components/AnimeTable";
export default {
  name: 'Home',
  components: {
    AnimeCard,
    AnimeAddModal,
    AnimeTable

  },
  data: function () {
    return {
      isModalActive: false,

      isLoading: false,

      animes: [
        {
          'title': 'THe eminence in the shadow',
          'current_chapter': '23.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'hola que se',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        },
        {
          'title': 'The gay in the shadow',
          'current_chapter': '233.4',
          'added': '2016/04/26',
          'read_url': 'https://xd.com',
          'img': 'https://tracker.noheaven.net/media/img/kakushidungeon-novel-1.jpg'
        }

      ]
    }
  },

}

</script>