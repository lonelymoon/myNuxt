<template>
<div class="gl-echarts-item" v-resize="onResize">
  <v-card>
    <div :ref="chartName" style="height: 400px;"></div>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'gl-echarts-item',
  props: {
    // 图表名
    chartName: {
      type: String,
      default: 'chart'
    },
    // 配置
    opts: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      echarts: null,
      timer: null,
      options: this.opts
    }
  },
  methods: {
    onResize() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.echarts && this.echarts.resize()
      }, 30)
    }
  },
  mounted() {
    let el = this.$refs[this.chartName]
    let option = this.options || {}
    this.echarts = this.$echarts.init(el)
    // 使用刚指定的配置项和数据显示图表。
    this.echarts.setOption(option)
  }
}
</script>

<style scoped>
.gl-echarts-item{
  position: relative;
  height: auto;
}
</style>
