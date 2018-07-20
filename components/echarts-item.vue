<template>
<div class="gl-echarts-item">
  <v-card>
    <div ref="chart1" style="height: 400px;"></div>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'gl-echarts-item',
  data() {
    return {}
  },
  mounted() {
    let el = this.$refs.chart1
    let echarts = this.$echarts.init(el)
    let option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        itemStyle: {
          emphasis: {
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.7)'
          }
        }
      }]
    }
    // 使用刚指定的配置项和数据显示图表。
    echarts.setOption(option)
  }
}
</script>

<style scoped>
.gl-echarts-item{
  position: relative;
  height: auto;
}
</style>
