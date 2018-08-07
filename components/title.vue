<template>
<div :class="wrapperClasses">
  {{text}}<slot v-if="!text"></slot>
</div>
</template>

<script>
export default {
  name: 'gl-title',
  props: {
    text: {
      type: [String, Number],
      default: ''
    },
    px: {
      type: [String, Number],
      default: 4
    }
  },
  computed: {
    wrapperClasses() {
      let px = this.px * 1
      return {
        'gl-title-wrapper': true,
        'blue': true,
        'py-2': true,
        'px-4': (px === 4),
        'px-3': (px === 3),
        'px-2': (px === 2),
        'px-1': (px === 1)
      }
    }
  }
}
</script>

<style scoped>
.gl-title-wrapper{
  position: relative;
  height: auto;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  box-sizing: border-box;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
</style>
