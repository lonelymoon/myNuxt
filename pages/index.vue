<template>
  <section id="gl-page">
    <gl-slider keyname="home-slide" :slides="headerSlides"></gl-slider>

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
          <div class="mb-3" v-if="false">
            <gl-title>近期手游流行趋势对比图</gl-title>
            <gl-echarts-items></gl-echarts-items>
          </div>
        </v-flex>
        <v-flex xs12 sm12 md6 order-sm1 order-md2 px-2>
          <div class="mb-3">
            <gl-slider
                v-if="false"
                keyname="home-slide2"
                type="2" height="160"
                class="mb-3"
                :slides="middleSlides">
            </gl-slider>
            <gl-title text="热门游戏社区"></gl-title>
            <gl-grid-items col="5"></gl-grid-items>
          </div>
          <div class="mb-3">
            <gl-article-list v-for="n in 5" :key="n"></gl-article-list>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md3 order-sm3 order-md3 px-2>
          <div class="mb-3">
            <gl-title>热门文章</gl-title>
            <gl-simple-list></gl-simple-list>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

  </section>
</template>

<script>
import {
  GlSlider,
  GlPanels,
  GlTitle,
  GlGridItems,
  GlArticleList,
  GlSimpleList,
  GlEchartsItems
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
    GlTitle,
    GlGridItems,
    GlArticleList,
    GlSimpleList,
    GlEchartsItems
  },
  data() {
    return {
      headerSlides: [
        {
          title: '如何在一个星期内打上王者500点?',
          text: '这是一个非常良心的上分教程',
          img: '/slide/slide1.jpg',
          local: false,
          href: 'http://www.baidu.com'
        },
        {
          title: '最新一期手游测评',
          text: '带来2018年最新一期手游测评',
          img: '/slide/slide2.jpg',
          local: true,
          href: '/about'
        },
        {
          title: '8.14英雄联盟全英雄评测',
          text: '教你如何寻找新的meta',
          img: '/slide/slide3.jpg'
        }
      ],
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
      ],
      secondLoad: false,
      thirdLoad: false
    }
  },
  mounted() {}
}
</script>

<style scoped>

</style>
