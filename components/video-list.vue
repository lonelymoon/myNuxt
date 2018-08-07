<template>
<div :class="wrapperClasses">
  <template v-for="index in 8">
    <div class="gl-video-list mb-3" :key="index">
      <div class="gl-video-list-index mr-2" :data-index="index">{{index}}</div>
      <div class="gl-video-list-content">
        <div class="gl-video-list-poster pr-2" v-if="index < 4">
          <img src="/medias/video2.jpg" class="img-block"/>
        </div>
        <div class="gl-video-list-msg">
          <div class="gl-video-list-title" :data-onlyText="index >= 4">asdasdasdsadsad
          </div>
          <div class="gl-video-list-others" v-if="index < 4">
            <p>孤月</p>
          </div>
        </div>
      </div>
    </div>
  </template>
</div>
</template>

<script>
export default {
  name: 'gl-video-list',
  data() {
    return {
      oneRow: false
    }
  },
  computed: {
    wrapperClasses() {
      return {
        'gl-video-list-wrapper': true
      }
    }
  }
}
</script>

<style scoped>
.gl-video-list-wrapper{
  position: relative;
  height: auto;
}

.gl-video-list{
  position: relative;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
}

.gl-video-list-wrapper .gl-video-list:last-child{
  margin-bottom: 0 !important;
}

.gl-video-list-index{
  position: relative;
  height: auto;
  flex:1 0 20px;
  max-width: 20px;
  min-width: 20px;
  height: 20px;
  text-align: center;
  color: #fff;
  background-color: #7f828b;
  border-radius: 3px;
}

.gl-video-list-index[data-index="1"]{
  background-color: #ff253a;
}

.gl-video-list-index[data-index="2"]{
  background-color: #ff7010;
}

.gl-video-list-index[data-index="3"]{
  background-color: #bc50ff;
}

.gl-video-list-content{
  position: relative;
  height: auto;
  flex: 11;
  display: flex;
  flex-wrap: nowrap;
}

.gl-video-list-poster{
  position: relative;
  height: auto;
  flex: 4;
  max-width: 160px;
  min-width: 100px;
}

.gl-video-list-msg{
  position: relative;
  height: auto;
  flex: 8;
}

.gl-video-list-title{
  position: relative;
  height: auto;
  word-break: break-all;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
}

.gl-video-list-title[data-onlyText="true"]{
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.gl-video-list-others{
  position: absolute;
  left: 0;
  bottom: 0;
  height: 14px;
  font-size: 12px;
  color: #7f828b;
}
</style>
