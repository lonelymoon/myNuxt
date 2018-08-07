<template>
<section id="gl-page" v-resize="onResize">
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md5 class="mb-3">
        <gl-slider keyname="videos-slide"
            type="2" height="218"
            :slides="middleSlides">
        </gl-slider>
      </v-flex>
      <v-flex xs12 md7 :class="flexClass">
        <div class="gl-videos-hots">
          <gl-video-item></gl-video-item>
        </div>
      </v-flex>
      <v-flex xs12 md9>
        <div class="gl-videos-items pt-3">
          <v-card class="pt-3">
            <gl-video-item col="5" :innerMessage="false"></gl-video-item>
          </v-card>
        </div>
      </v-flex>
      <v-flex xs12 md3 :class="flexClass">
        <div class="gl-videos-lists pt-3">
          <gl-title px="3">本周热门视频</gl-title>
          <v-card class="px-2 py-3">
            <gl-video-list></gl-video-list>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import {
  GlSlider,
  GlVideoItem,
  GlVideoList,
  GlTitle
} from '../../components'

export default {
  data() {
    return {
      smallThanMD: false,
      middleSlides: [
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
          img: '/slide/slide8.png'
        }
      ]
    }
  },
  computed: {
    flexClass() {
      return {
        'px-3': !this.smallThanMD
      }
    }
  },
  components: {
    GlSlider,
    GlVideoItem,
    GlVideoList,
    GlTitle
  },
  methods: {
    onResize() {
      let w = window.innerWidth
      this.smallThanMD = (w <= 960)
    }
  },
  mounted() {
    this.onResize()
  }
}
</script>

<style scoped>

</style>
