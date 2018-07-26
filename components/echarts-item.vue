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
    chartName: {
      type: String,
      default: 'chart'
    }
  },
  data() {
    return {
      echarts: null,
      timer: null
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
    let height = 36
    let el = this.$refs[this.chartName]
    this.echarts = this.$echarts.init(el)
    let option = {
      baseOption: {
        title: {
          text: '手游趋势展示',
          left: 10
        },
        grid: {
          left: '10%'
        },
        tooltip: {},
        legend: {
          data: ['本周下载数', '上周下载数'],
          orient: 'horizontal',
          right: 10,
          top: 3
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: ['崩坏3', '营养师', '亡者农药', '暖暖', '扶他狗', '游戏3'],
          axisLabel: {
            formatter: function (value, index) {
              let arr = ['b3', 'yys', 'wzny', 'nn', 'fgo', 'game3']
              return '{' + arr[index] + '|}'
            },
            margin: 3,
            rich: {
              b3: {
                height,
                align: 'center',
                backgroundColor: {
                  image: '/logos/logo9.png'
                }
              },
              yys: {
                height,
                align: 'center',
                backgroundColor: {
                  image: '/logos/logo6.png'
                }
              },
              wzny: {
                height,
                align: 'center',
                backgroundColor: {
                  image: '/logos/logo1.png'
                }
              },
              nn: {
                height,
                align: 'center',
                backgroundColor: {
                  image: '/logos/logo5.png'
                }
              },
              fgo: {
                height,
                align: 'center',
                backgroundColor: {
                  image: '/logos/logo11.png'
                }
              },
              game3: {
                height,
                align: 'center',
                backgroundColor: {
                  image: '/logos/logo3.png'
                }
              }
            }
          }
        },
        series: [
          {
            name: '本周下载数',
            type: 'bar',
            data: [500, 2000, 3600, 1000, 1000, 2000],
            itemStyle: {
              emphasis: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.7)'
              }
            }
          },
          {
            name: '上周下载数',
            type: 'bar',
            data: [1000, 1300, 3223, 1233, 203, 4000],
            itemStyle: {
              emphasis: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.7)'
              }
            }
          }
        ]
      },
      media: [
        {
          option: {
            grid: {
              left: '10%'
            },
            legend: {
              data: ['本周下载数', '上周下载数'],
              orient: 'horizontal',
              right: 10,
              top: 3
            }
          }
        },
        {
          query: {
            maxWidth: 400
          },
          option: {
            grid: {
              left: '15%'
            },
            legend: {
              data: ['本周下载数', '上周下载数'],
              orient: 'vertical',
              right: 10,
              top: 3
            }
          }
        }
      ]
    }
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
