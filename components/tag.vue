<template>
<span class="gl-tag px-3 py-1">
  Tag
</span>
</template>

<script>
export default {
  name: 'gl-tag',
  data() {
    return {}
  }
}
</script>

<style scoped>
.gl-tag{
  position: relative;
  height: auto;
  border: 1px solid #7f828b;
  font-size: 12px;
}

.gl-tag:hover{
  border-color: #2196F3;
  color: #2196F3;
  cursor: pointer;
}
</style>
