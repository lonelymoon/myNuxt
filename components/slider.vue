<template>
<section class="gl-slider">
  <div class="gl-swiper swiper-container" :data-key="key">
    <div class="swiper-wrapper">
      <div class="swiper-slide default-bgColor" :style="slideStyles" v-for="(item, index) in slides">
        <div class="swiper-slide-box">

          <img :src="item.img" v-if="!!item.img" class="img-block" />
          <!--外部链接-->
          <a :href="(!!item.href? item.href: 'javascript:;')" target="_blank" v-if="!item.local">

            <div class="swiper-slide-text py-3 px-5">
              <h2 class="swiper-slide-text-title pb-2 mb-2 pr-1">
                {{item.title}}
              </h2>
              <p class="swiper-slide-text-content">
                {{item.text}}
              </p>
            </div>

          </a>
          <!--nuxt链接-->
          <nuxt-link :to="(!!item.href? item.href: '/')" v-if="item.local">

            <div class="swiper-slide-text py-3 px-5">
              <h2 class="swiper-slide-text-title pb-2 mb-2 pr-1">
                {{item.title}}
              </h2>
              <p class="swiper-slide-text-content">
                {{item.text}}
              </p>
            </div>

          </nuxt-link>

        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'gl-slider',
  props: {
    keyname: {
      type: String,
      default: 'default'
    },
    speed: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 400
    },
    loop: {
      type: [String, Boolean, Number],
      default: true
    }
  },
  data() {
    return {
      key: this.keyname,
      slides: [
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
      ]
    }
  },
  computed: {
    slideStyles() {
      return {
        overflow: 'hidden',
        maxHeight: this.height + 'px'
      }
    }
  },
  mounted() {
    let Swiper = this.Swiper
    let ms = new Swiper('.gl-swiper[data-key="' + this.key + '"]', {
      speed: this.speed,
      loop: !!this.loop,
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      }
    })
    ms.updateSize()
  }
}
</script>

<style scoped>
.swiper-slide-text{
  position: absolute;
  left: 6%;
  top: 40%;
  transform: translateY(-50%);
  height: auto;
  background-color: rgba(0,0,0,0.2);
  box-sizing: border-box;
}

.swiper-slide-text-title{
  color: #fff;
  font-size: 32px;
  text-decoration: none;
  border-bottom: 2px solid #fff;
  font-weight: 500;
}

.swiper-slide-text-content{
  font-size: 20px;
  height: auto;
  color: #fff;
}

@media screen and (max-width: 600px){
  .swiper-slide-text{
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 12px !important;
  }
  .swiper-slide-text-title{
    font-size: 18px;
  }
  .swiper-slide-text-content{
    font-size: 11px;
  }
}
</style>
