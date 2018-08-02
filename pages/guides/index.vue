<template>
<section id="gl-page">
  <v-container fluid>
    <v-layout row wrap>
      <v-flex row wrap xs12 md8 px-1>
        <gl-items-with-dialog></gl-items-with-dialog>
      </v-flex>
      <v-flex xs12 md4 px-1>
        <div class="mb-3">
          <gl-title>热门攻略</gl-title>
          <gl-rank-list></gl-rank-list>
        </div>
        <div class="mb-3">
          <gl-title>最新攻略</gl-title>
          <gl-rank-list></gl-rank-list>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import {
  GlItemsWithDialog,
  GlRankList,
  GlTitle
} from '../../components'

export default {
  data() {
    return {}
  },
  components: {
    GlItemsWithDialog,
    GlRankList,
    GlTitle
  }
}
</script>

<style scoped>

</style>
