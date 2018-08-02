<template>
<section id="gl-page">
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md5 class="mb-3">
        <gl-slider keyname="videos-slide"
            type="2" height="200"
            :slides="middleSlides">
        </gl-slider>
      </v-flex>
      <v-flex xs12 md7 class="mb-3">
        <div class="gl-videos-hots">
          <gl-video-item></gl-video-item>
        </div>
      </v-flex>
      <v-flex xs12 md9>3</v-flex>
      <v-flex xs12 md3>4</v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import {
  GlSlider,
  GlVideoItem
} from '../../components'

export default {
  data() {
    return {
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
          img: '/slide/slide7.png'
        }
      ]
    }
  },
  components: {
    GlSlider,
    GlVideoItem
  }
}
</script>

<style scoped>

</style>
