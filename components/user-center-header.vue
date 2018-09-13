<template>
<div class="gl-user-center-header-wrapper" v-resize="onResize">
  <div class="gl-user-center-header">
    <div class="gl-user-center-header-bg" :style="headerBgStyles">
      <div class="gl-user-center-header-photo" :style="headerPhotoStyles">
        <img src="/heads/1.jpg" class="img-block"/>
      </div>
    </div>
    <div class="gl-user-center-header-fn" v-if="!isMobile">
      <div class="gl-user-center-header-items">
        <div class="gl-user-center-header-item" v-for="item in items">
          <div class="gl-user-center-header-item-name">{{item.text}}</div>
          <div :class="itemValueClasses">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'gl-user-center-header',
  props: {},
  data() {
    return {
      changeHeader: false,
      smallFont: false,
      isMobile: false
    }
  },
  computed: {
    headerBgStyles() {
      let height = this.isMobile ? 240 : 360
      return {
        'height': height + 'px',
        'background-image': 'url(/slide/slide1.jpg)'
      }
    },
    headerPhotoStyles() {
      let size = this.isMobile ? 80 : 120
      return !this.changeHeader ? {
        'width': '180px',
        'height': '180px',
        'left': '120px',
        'bottom': '-100px'
      } : {
        'width': size + 'px',
        'height': size + 'px',
        'left': '50%',
        'top': '50%',
        'transform': 'translate(-50%, -50%)'
      }
    },
    itemValueClasses() {
      return {
        'gl-user-center-header-item-data': true,
        'item-data-small': this.smallFont
      }
    },
    items() {
      return [
        {
          text: '文章',
          value: 23123123
        },
        {
          text: '攻略',
          value: 22331231
        },
        {
          text: '提问',
          value: 23321233
        },
        {
          text: '回答',
          value: 13231232
        },
        {
          text: '社区',
          value: 9
        },
        {
          text: '视频',
          value: 32
        },
        {
          text: '关注者',
          value: 323
        },
        {
          text: '跟随者',
          value: 231232321
        },
        {
          text: '等级',
          value: 16
        }
      ]
    }
  },
  methods: {
    onResize() {
      let w = window.innerWidth
      this.changeHeader = w <= 1200
      this.smallFont = w <= 700
      this.isMobile = w <= 600
    }
  },
  mounted() {
    this.onResize()
  }
}
</script>

<style scoped>
.gl-user-center-header-wrapper{
  position: relative;
  height: auto;
}

.gl-user-center-header{
  position: relative;
  height: auto;
}

.gl-user-center-header-bg{
  position: relative;
  background-color: #2196F3;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.gl-user-center-header-photo{
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  padding: 6px;
  box-sizing: border-box;
  background: #fff;
  overflow: hidden;
}

.img-block{
  width: 100%;
  border-radius: 50%;
}

.gl-user-center-header-fn{
  position: relative;
  height: auto;
  padding: 12px 0px;
  background: #fff;
}

.gl-user-center-header-items{
  position: relative;
  height: auto;
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gl-user-center-header-item{
  position: relative;
  height: auto;
  flex: 1;
  padding: 0px 4px;
  text-align: center;
  line-height: 1;
  color: #1b6d85;
  font-weight: 800;
}

.gl-user-center-header-item-name{
  position: relative;
  font-size: 12px;
  height: auto;
  margin-bottom: 4px;
}

.gl-user-center-header-item-data{
  position: relative;
  height: auto;
  font-size: 18px;
}

.item-data-small{
  font-size: 14px;
}
</style>
