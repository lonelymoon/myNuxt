<template>
<div class="gl-items-with-dialog-wrapper">
  <v-card>
    <div class="gl-items-with-dialog pa-3">
      <div class="gl-items-with-dialog-item px-3 mb-3" :style="itemStyles" v-for="n in 10" :key="n">
        <div class="gl-items-with-dialog-item-wrapper">
          <div class="gl-items-with-dialog-item-face">
            <img src="/faces/1.jpg" class="img-block"/>
            <div class="mt-2">游戏</div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'gl-items-with-dialog',
  computed: {
    itemStyles() {
      return {
        minWidth: '20%',
        maxWidth: '20%'
      }
    }
  }
}
</script>

<style scoped>
.gl-items-with-dialog-wrapper{
  position: relative;
  height: auto;
}

.gl-items-with-dialog{
  position: relative;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.gl-items-with-dialog-item{
  position: relative;
  height: auto;
  box-sizing: border-box;
  flex: 1;
  text-align: center;
}
</style>
