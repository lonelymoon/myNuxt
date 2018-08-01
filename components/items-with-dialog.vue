<template>
<div :ref="itemsName" class="gl-items-with-dialog-wrapper" v-resize="onResize">
  <v-card>
    <div class="gl-items-with-dialog pa-3">
      <div :class="itemClasses"
           @click="show = true"
           v-for="n in 10" :key="n">

        <div class="gl-items-with-dialog-item-wrapper">
          <div class="gl-items-with-dialog-item-face">
            <img src="/faces/1.jpg" class="img-block"/>
            <div class="mt-3">游戏</div>
          </div>
        </div>

      </div>
    </div>
  </v-card>
  <v-dialog v-model="show" width="400px" max-width="90%">
    <v-card>
      <div class="items-dialog-set">
        sadasdasdasasdasdasdsad
      </div>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  name: 'gl-items-with-dialog',
  props: {
    itemsName: {
      type: String,
      default: 'items'
    }
  },
  computed: {
    itemClasses() {
      return {
        'gl-items-with-dialog-item': true,
        'pa-3': !this.isSmall,
        'mb-3': !this.isSmall,
        'pa-2': this.isSmall,
        'mb-2': this.isSmall
      }
    }
  },
  data() {
    return {
      el: null,
      show: false,
      isSmall: false
    }
  },
  methods: {
    onResize() {
      setTimeout(() => {
        let w = this.el.clientWidth
        if (w <= 400) {
          this.isSmall = true
        }
      }, 50)
    }
  },
  mounted() {
    this.el = this.$refs[this.itemsName]
    this.onResize()
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
  flex: 1 0 60px;
  min-width: 20%;
  text-align: center;
  transition: box-shadow 0.3s linear;
}

.gl-items-with-dialog-item:hover{
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.7);
}
</style>
