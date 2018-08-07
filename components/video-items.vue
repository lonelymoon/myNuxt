<template>
  <div ref="video-items" :class="itemsClasses" v-resize="onResize">
    <div :class="wrapperClasses">
      <div class="gl-video-item px-2 mb-3" :style="itemStyles" v-for="n in 8">
        <div class="gl-video-item-img">
          <img src="/medias/video1.jpg" class="img-block"/>
          <div class="gl-video-item-img-inner" v-if="innerMessage">
            <div class="video-item-img-inner-title">视频标题</div>
            <div class="video-item-img-inner-msg">
              <div class="float-left">用户</div>
              <div class="float-right">播放数</div>
            </div>
          </div>
        </div>
        <div class="gl-video-item-message" v-if="!innerMessage">
          <div class="video-item-message-title">视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题</div>
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
  props: {
    innerMessage: {
      type: [String, Boolean],
      default: true
    },
    col: {
      type: [Number, String],
      default: 4
    }
  },
  data() {
    return {
      el: null,
      isSmall: false
    }
  },
  computed: {
    itemsClasses() {
      return {
        'gl-video-items-wrapper': true
      }
    },
    wrapperClasses() {
      return {
        'gl-video-item-wrapper': true,
        'px-2': !this.isSmall
      }
    },
    itemStyles() {
      let w = this.isSmall ? '50%' : (100 / this.col) + '%'
      return {
        width: w,
        maxWidth: w
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
}

.gl-video-item{
  position: relative;
  height: auto;
  flex: 1 0 auto;
  box-sizing: border-box;
}

.gl-video-item:hover{
  cursor: pointer;
  color: #2196F3;
}

.gl-video-item-img{
  position: relative;
  height: auto;
  border-radius: 5px;
  overflow: hidden;
}

.gl-video-item-img-inner{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(0,0,0,0.7);
  transition: transform .2s ease-out;
  transform: translateY(100%);
  box-sizing: border-box;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
}

.gl-video-item:hover .gl-video-item-img-inner{
  transform: translateY(0%);
}

.video-item-img-inner-msg{
  position: absolute;
  bottom: 8px;
  left: 10px;
  right: 10px;
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
  line-height: 1.4;
  margin-top: 6px;
}

.video-item-message-title{
  position: relative;
  height: 20px;
  overflow: hidden;
  padding: 2px 0px;
  transition: height 0.1s ease-out;
}

.gl-video-item:hover .video-item-message-title{
  height: 34px;
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
