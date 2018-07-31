<template>
<section id="gl-page">
  <v-container fluid>
    <v-layout wrap row>
      <v-flex md3 sm6 xs12 px-1 order-xs2 order-sm1 mb-3>
        <div>
          <gl-title>热门游戏社区</gl-title>
          <gl-grid-items col="4"></gl-grid-items>
        </div>
        <div>
          <gl-title>新游社区</gl-title>
          <gl-grid-items col="4"></gl-grid-items>
        </div>
        <div>
          <gl-title>活跃游戏社区</gl-title>
          <gl-grid-items col="4"></gl-grid-items>
        </div>
      </v-flex>
      <v-flex md4 sm6 xs12 px-1 order-xs1 order-sm2 mb-3>
        <div class="mb-3">
          <gl-fn-btn-items></gl-fn-btn-items>
        </div>
        <div class="mb-3">
          <gl-vote-box></gl-vote-box>
        </div>
        <div class="mb-3">
          <gl-steps></gl-steps>
        </div>
        <div class="mb-3">
          <gl-echarts-items :opts="echartsOptions"></gl-echarts-items>
        </div>
        <div class="mb-3">
          <gl-echarts-items :opts="echartsOptionsLine"></gl-echarts-items>
        </div>
      </v-flex>
      <v-flex md5 sm12 xs12 px-1 order-xs3 order-sm3 mb-3>
        <div class="mb-3">
          <gl-slider
              keyname="cm-slider1"
              type="2" height="160"
              class="mb-3"
              :slides="slides"
          ></gl-slider>
        </div>
        <div class="mb-3">
          <gl-title>最新文章</gl-title>
          <gl-article-list v-for="n in 5" :key="n"></gl-article-list>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import {
  GlGridItems,
  GlTitle,
  GlFnBtnItems,
  GlSlider,
  GlVoteBox,
  GlEchartsItems,
  GlArticleList,
  GlSteps
} from '../../components'

export default {
  head: {
    title: '社区'
  },
  components: {
    GlSlider,
    GlGridItems,
    GlTitle,
    GlFnBtnItems,
    GlVoteBox,
    GlEchartsItems,
    GlArticleList,
    GlSteps
  },
  data() {
    return {
      slides: [
        {
          title: '氪出一个未来',
          img: '/slide/slide4.jpg'
        },
        {
          title: '肝帝强者，恐怖如斯！',
          img: '/slide/slide5.jpg',
          local: true,
          href: '/about'
        },
        {
          title: '我变秃了，也变强了',
          img: '/slide/slide6.jpg'
        },
        {
          title: '肝！肝！肝！',
          img: '/slide/slide7.png'
        }
      ]
    }
  },
  computed: {
    echartsOptions() {
      return {
        baseOption: {
          title: {
            text: '热门社区活跃度',
            left: 10
          },
          grid: {
            left: '10%'
          },
          tooltip: {},
          legend: {
            data: ['上月数据', '本月数据'],
            orient: 'horizontal',
            right: 10,
            top: 3
          },
          xAxis: {
            data: ['崩三', '营养师', '必肝航线', '亡者农药', '扶他狗']
          },
          yAxis: {},
          series: [
            {
              name: '上月数据',
              type: 'bar',
              data: [1230, 2323, 3230, 2130, 4213]
            },
            {
              name: '本月数据',
              type: 'bar',
              data: [1330, 2133, 5230, 1130, 2213]
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
                orient: 'horizontal'
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
                orient: 'vertical'
              }
            }
          }
        ]
      }
    },
    echartsOptionsLine() {
      return {
        baseOption: {
          title: {
            text: '热门社区用户活跃图',
            left: 5
          },
          grid: {
            left: '12%',
            top: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['崩三', '营养师', '必肝航线', '亡者农药', '扶他狗'],
            orient: 'horizontal',
            top: '10%'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {},
          series: [
            {
              name: '崩三',
              type: 'line',
              data: [1230, 2323, 3230, 2130, 4213, 1200, 12339]
            },
            {
              name: '营养师',
              type: 'line',
              data: [1330, 2133, 5230, 1130, 2213, 4200, 2339]
            },
            {
              name: '必肝航线',
              type: 'line',
              data: [1300, 1133, 2230, 4130, 5213, 3240, 8339]
            },
            {
              name: '亡者农药',
              type: 'line',
              data: [4330, 3133, 6230, 7130, 1213, 800, 5339]
            },
            {
              name: '扶他狗',
              type: 'line',
              data: [1930, 2333, 3230, 4130, 7213, 6200, 3339]
            }
          ]
        },
        media: [
          {
            option: {
              grid: {
                left: '12%'
              },
              legend: {
                top: '10%'
              }
            }
          },
          {
            query: {
              maxWidth: 400
            },
            option: {
              grid: {
                left: '18%'
              },
              legend: {
                top: '8%'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
