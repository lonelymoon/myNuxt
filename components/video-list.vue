<template>
<div :class="wrapperClasses">
  <template>
    <div class="gl-video-list">
      <div class="gl-video-list-index">1</div>
      <div class="gl-video-list-content">
        <div class="gl-video-list-poster"></div>
        <div class="gl-video-list-msg"></div>
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
</style>
