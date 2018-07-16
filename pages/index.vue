<template>
  <section id="gl-page">
    <gl-slider keyname="home-slide"></gl-slider>

    <v-container fluid px-1>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 order-sm2 order-md1 px-2>
          <div class="mb-3">
            <gl-title text="热门游戏排行"></gl-title>
            <gl-panels></gl-panels>
          </div>
          <div class="mb-3">
            <gl-title text="最新游戏排行"></gl-title>
            <gl-panels></gl-panels>
          </div>
        </v-flex>
        <v-flex xs12 sm12 md6 order-sm1 order-md2 px-2>2</v-flex>
        <v-flex xs12 sm6 md3 order-sm3 order-md3 px-2>3</v-flex>
      </v-layout>
    </v-container>

  </section>
</template>

<script>
import {
  GlSlider,
  GlPanels,
  GlTitle
} from '../components/'

export default {
  head: {
    title: '首页'
  },
  asyncData() {
  },
  components: {
    GlSlider,
    GlPanels,
    GlTitle
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style scoped>

</style>
