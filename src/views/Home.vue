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
        <section>
          <b-field grouped group-multiline>
            <b-button v-if="checkedRows.length"
                      label="Deseleccionar todos"
                      type="is-danger"
                      icon-left="close"
                      class="field"
                      @click="checkedRows = []"/>
            <b-button v-if="checkedRows.length"
                      label="Eliminar seleccionados"
                      icon-left="delete">

            </b-button>

            <b-button v-if="!checkedRows.length"
                      label="No hay seleccionados"
                      type="is-info"
                      icon-left="close"
                      class="field"
                      disabled
                      @click="checkedRows = []"/>

          </b-field>

          <b-table
              checkable
              :data="animes"
              ref="table"
              paginated
              :per-page="perPage"
              detailed
              detail-key="id"
              :debounce-search="1000"
              :loading="isLoading"
              :detail-transition="transitionName"
              :show-detail-icon="false"
              :checked-rows.sync="checkedRows"
              pagination-position="top"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page">

            <b-table-column field="title" label="Title" sortable v-slot="props" searchable>

              <a @click="props.toggleDetails(props.row)">
                {{ props.row.title }}
              </a>
            </b-table-column>

            <b-table-column field="user.last_name" label="Capitulo actual" sortable v-slot="props">
              {{ props.row.current_chapter }}
            </b-table-column>

            <b-table-column field="date" label="Date" sortable centered v-slot="props">
                <span class="tag is-success">
                    {{ new Date(props.row.added).toLocaleDateString() }}
                </span>
            </b-table-column>

            <b-table-column label="Acciones">

              <p class="buttons">
                <b-button type="is-danger" outlined
                          icon-left="book-open">
                  Leer
                </b-button>
                <b-button type="is-primary" outlined
                          icon-right="plus"/>

                <b-button type="is-danger" outlined
                          icon-right="minus"/>
                <b-button type="is-warning" outlined
                          icon-right="pencil"/>
              </p>


            </b-table-column>

            <template #detail="props">
              <article class="media">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img :src="props.row.img">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>adsf</strong>
                      <small>adsfasdf</small>
                      <small>31m</small>
                      <br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                      Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                  </div>
                </div>
              </article>
            </template>
          </b-table>

        </section>
      </div>
    </div>
    <anime-add-modal :is-modal-active="isModalActive"></anime-add-modal>
  </div>

</template>
<script>
import AnimeCard from "../components/AnimeCard";
import AnimeAddModal from "../components/AnimeAddModal";

export default {
  name: 'Home',
  components: {
    AnimeCard,
    AnimeAddModal

  },
  data: function () {
    return {
      isModalActive: false,
      checkedRows: [],
      perPage: 15,
      isLoading: false,
      isCompact: false,
      showDetailIcon: true,
      useTransition: true,
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
  computed: {
    transitionName () {
      if (this.useTransition) {
        return 'fade'
      }
      return ''
    }
  }
}

</script>