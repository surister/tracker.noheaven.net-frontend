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
            <span class="subtitle is-6">Author: {{ data.authors }}</span><br>
            <span class="subtitle is-6">Vistas: {{ data.views }}</span><br>
            <span class="subtitle is-6"></span>
            <span class="subtitle is-6">Last updated: {{ new Date(data.added).toLocaleDateString() }}</span><br>
            <br>
            <b-rate maxs="5" v-model="data.ratings" disabled=true show-score=true >67</b-rate>
          </div>
          <div class="column is-narrow">
            <b-button
                icon-left="plus" outlined>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AnimeSearchResult',
  props: ['data'],
  data: function () {
    return {}
  }
}
</script>