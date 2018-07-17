<template>
<section class="gl-slider" v-if="this.currentSlides.length !== 0">
  <div class="gl-swiper swiper-container" :data-key="key">
    <div class="swiper-wrapper">
      <div class="swiper-slide default-bgColor" :style="slideStyles" v-for="(item, index) in currentSlides">
        <div class="swiper-slide-box">

          <img :src="item.img" v-if="!!item.img" class="img-block" />
          <!--外部链接-->
          <a :href="(!!item.href? item.href: 'javascript:;')" target="_blank" v-if="!item.local">

            <div class="swiper-slide-text py-3 px-5" :data-style="UIStyle">
              <h2 class="swiper-slide-text-title pb-2 mb-2 pr-1">
                {{item.title}}
              </h2>
              <p class="swiper-slide-text-content" v-if="UIStyle !== 2">
                {{item.text}}
              </p>
            </div>

          </a>
          <!--nuxt链接-->
          <nuxt-link :to="(!!item.href? item.href: '/')" v-if="item.local">

            <div class="swiper-slide-text py-3 px-5" :data-style="UIStyle">
              <h2 class="swiper-slide-text-title pb-2 mb-2 pr-1">
                {{item.title}}
              </h2>
              <p class="swiper-slide-text-content" v-if="UIStyle !== 2">
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
      type: [String, Number],
      default: 440
    },
    loop: {
      type: [String, Boolean, Number],
      default: true
    },
    type: {
      type: [String, Number],
      default: 1
    },
    slides: {
      type: Array,
      default: () => []
    },
    middle: {
      type: [String, Boolean],
      default: false
    }
  },
  data() {
    return {
      // swiper插件容器
      swiper: null,
      key: this.keyname,
      currentSlides: this.slides
    }
  },
  computed: {
    slideStyles() {
      return {
        overflow: 'hidden',
        maxHeight: this.height + 'px'
      }
    },
    // 判断slide风格
    UIStyle() {
      let sty = this.type * 1
      return (sty > 2 || sty < 1) ? 1 : sty
    }
  },
  mounted() {
    let Swiper = this.Swiper
    this.swiper = new Swiper('.gl-swiper[data-key="' + this.key + '"]', {
      speed: this.speed,
      loop: !!this.loop,
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      }
    })
  },
  watch: {
    slides() {
      this.currentSlides = this.slides
      if (this.swiper) {
        this.swiper.update()
      }
    }
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
  font-size: 18px;
  height: auto;
  color: #fff;
}

.swiper-slide-text[data-style='2']{
  left: 0px;
  top: initial;
  bottom: 0px;
  transform: none;
  width: 100%;
  padding: 12px 20px !important;
}

.swiper-slide-text[data-style='2'] .swiper-slide-text-title{
  text-indent: 1em;
  font-size: 16px;
  word-break: keep-all;
  text-wrap: none;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: none;
  padding: 0px !important;
  margin: 0px !important;
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
