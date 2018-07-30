<template>
<section id="gl-page">
  <v-container fluid>
    <v-layout wrap row>
      <v-flex md3 sm6 xs12 px-1 order-xs2 order-sm1 mb-3>
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
      <v-flex md4 sm6 xs12 px-1 order-xs1 order-sm2 mb-3>
        <div class="mb-3">
          <gl-fn-btn-items></gl-fn-btn-items>
        </div>
        <div class="mb-3">
          放置趋势和活动
        </div>
      </v-flex>
      <v-flex md5 sm12 xs12 px-1 order-xs3 order-sm3 mb-3>
        <div class="mb-3">
          <gl-slider
              keyname="cm-slider1"
              type="2" height="160"
              class="mb-3"
              :slides="slides"
          ></gl-slider>
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
  GlTitle,
  GlFnBtnItems,
  GlSlider
} from '../../components'

export default {
  head: {
    title: '社区'
  },
  components: {
    GlSlider,
    GlGridItems,
    GlTitle,
    GlFnBtnItems
  },
  data() {
    return {
      slides: [
        {
          title: '氪出一个未来',
          img: '/slide/slide4.jpg'
        },
        {
          title: '肝帝强者，恐怖如斯！',
          img: '/slide/slide5.jpg',
          local: true,
          href: '/about'
        },
        {
          title: '我变秃了，也变强了',
          img: '/slide/slide6.jpg'
        },
        {
          title: '肝！肝！肝！',
          img: '/slide/slide7.png'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
