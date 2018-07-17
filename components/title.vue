<template>
<div class="gl-title-wrapper blue py-2 px-4">
  {{text}}
</div>
</template>

<script>
export default {
  name: 'gl-title',
  props: {
    text: {
      type: [String, Number],
      default: '标题'
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
