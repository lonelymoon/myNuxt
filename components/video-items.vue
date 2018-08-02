<template>
  <div ref="video-items" :class="itemsClasses" v-resize="onResize">
    <div class="gl-video-item-wrapper px-2 py-3">
      <div class="gl-video-item px-2" :style="itemStyles" v-for="n in 8">
        <div class="gl-video-item-img">
          <img src="/medias/video1.jpg" class="img-block"/>
        </div>
        <div class="gl-video-item-message">
          <div class="video-item-message-title">视频标题</div>
          <div class="video-item-message-content">
            <div class="float-left">播放数</div>
            <div class="float-right">弹幕数</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gl-video-item',
  data() {
    return {
      el: null,
      isSmall: false
    }
  },
  computed: {
    itemsClasses() {
      return {
        'gl-video-items-wrapper': true,
        'px-3': !this.isSmall
      }
    },
    itemStyles() {
      return {
        width: this.isSmall ? '50%' : '25%'
      }
    }
  },
  methods: {
    onResize() {
      setTimeout(() => {
        let w = this.el.clientWidth
        this.isSmall = !!(w <= 500)
      }, 50)
    }
  },
  mounted() {
    this.el = this.$refs['video-items']
    this.onResize()
  }
}
</script>

<style scoped>
.gl-video-items-wrapper{
  position: relative;
  height: auto;
}

.gl-video-item-wrapper{
  position: relative;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}

.gl-video-item{
  position: relative;
  height: auto;
  flex: 1 0 auto;
  box-sizing: border-box;
}

.gl-video-item-img{
  position: relative;
  height: auto;
}

.gl-video-item-img .img-block{
  width: 100%;
  margin: 0;
}

.gl-video-item-message{
  position: relative;
  height: auto;
  font-size: 12px;
  height: 34px;
  overflow: hidden;
  line-height: 1.3;
}

.video-item-message-title{
  position: relative;
  height: auto;
  padding: 2px 0px;
}

.video-item-message-content{
  position: relative;
  height: auto;
}

.video-item-message-content:after{
  content: "";
  display: block;
  clear: both;
}

.float-left{
  position: relative;
  float: left;
}

.float-right{
  position: relative;
  float: right;
}
</style>
