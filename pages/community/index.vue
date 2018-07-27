<template>
<section id="gl-page">
  <v-container fluid>
    <v-layout wrap row>
      <v-flex md3 xs6 px-1 mb-3>
        <div>
          <gl-title>热门游戏社区</gl-title>
          <gl-grid-items col="4"></gl-grid-items>
        </div>
        <div>
          <gl-title>新游社区</gl-title>
          <gl-grid-items col="4"></gl-grid-items>
        </div>
        <div>
          <gl-title>活跃游戏社区</gl-title>
          <gl-grid-items col="4"></gl-grid-items>
        </div>
      </v-flex>
      <v-flex md4 xs6 px-1 mb-3>
        <div class="mb-3">
          这里放置功能按钮栏
        </div>
        <div class="mb-3">
          放置趋势和活动
        </div>
      </v-flex>
      <v-flex md5 xs12 px-1 mb-3>
        <div class="mb-3">
          这里放置slide
        </div>
        <div class="mb-3">
          放置文章
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import {
  GlGridItems,
  GlTitle
} from '../../components'

export default {
  head: {
    title: '社区'
  },
  components: {
    GlGridItems,
    GlTitle
  }
}
</script>

<style scoped>

</style>
