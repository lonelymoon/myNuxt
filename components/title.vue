<template>
<div class="gl-title-wrapper blue py-3 px-4">
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
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  box-sizing: border-box;
}
</style>
