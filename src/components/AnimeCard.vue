<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128" style="width: 128px; height: 182px">
            <template v-if="loading">
              <b-skeleton width="128px" height="182px"></b-skeleton>
            </template>
            <template v-else>
              <img :src=data.img alt="Placeholder image">
            </template>

          </figure>
        </div>
        <div class="media-content">
          <template v-if="loading">
            <p>
              <b-skeleton height="60px"></b-skeleton>
              <b-skeleton active></b-skeleton>

            </p>
          </template>
          <template v-else>
            <p class="title is-4">{{ data.title }}</p>
            <p class="subtitle is-6">Capitulo actual: <a></a>{{ data.current_chapter }}</p>
          </template>
        </div>
      </div>
      <div class="content">
        <div class="buttons">
          <template v-if="loading">
            <div class="columns is-variable is-1">
              <div class="column">
                <b-skeleton size="is-large" width="92px" height="44px"></b-skeleton>
              </div>
              <div class="column">
                <b-skeleton size="is-large" width="44px" height="44px"></b-skeleton>
              </div>
              <div class="column">
                <b-skeleton size="is-large" width="44px" height="44px"></b-skeleton>
              </div>
              <div class="column">
                <b-skeleton size="is-large" width="44px" height="44px"></b-skeleton>
              </div>
            </div>

          </template>

          <template v-else>
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
          </template>

        </div>
        <div class="media">
          <div class="media-left">
            <template v-if="loading">
              <b-skeleton width="161px" height="27px"></b-skeleton>
            </template>
            <template v-else>

                 <span class="tag is-success">
                   Last updated: {{ new Date(data.added).toLocaleDateString() }}
                </span>

            </template>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimeCard',
  data: function () {
    return {}
  },
  props: ['data', 'loading']
}
</script>