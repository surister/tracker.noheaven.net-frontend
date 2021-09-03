<template>
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
              <img :src="props.row.img" alt="">
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
</template>

<script>
export default {
  name: "animeTable",
  data: function () {
    return {
      checkedRows: [],
      isCompact: false,
      showDetailIcon: true,
      useTransition: true,
      transitionName: "fade",
      perPage: 15,
    }
  },
  computed: {

  }
}
</script>