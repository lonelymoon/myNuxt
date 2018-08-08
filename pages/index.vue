<template>
  <section id="gl-page">
    <gl-slider keyname="home-slide" :slides="headerSlides"></gl-slider>

    <v-container fluid px-1>
      <v-layout row wrap>

        <v-flex xs12 sm6 md3 order-sm2 order-md1 px-2>
          <div class="mb-3">
            <gl-title text="热门游戏排行"></gl-title>
            <gl-panels></gl-panels>
          </div>
          <div class="mb-3">
            <gl-title text="最新游戏排行"></gl-title>
            <gl-panels></gl-panels>
          </div>
        </v-flex>

        <v-flex xs12 sm12 md6 order-sm1 order-md2 px-2>
          <div class="mb-3">
            <gl-slider
                v-if="laterLoaded"
                keyname="home-slide2"
                type="2" height="160"
                class="mb-3"
                :slides="middleSlides">
            </gl-slider>
            <gl-title text="热门游戏社区"></gl-title>
            <gl-grid-items col="5"></gl-grid-items>
          </div>
          <div class="mb-3" v-if="laterLoaded">
            <gl-title>近期手游流行趋势对比图</gl-title>
            <gl-echarts-items :opts="echartsOptions"></gl-echarts-items>
          </div>
          <div class="mb-3" v-if="laterLoaded">
            <gl-article-list v-for="n in 5" :key="n"></gl-article-list>
          </div>
        </v-flex>

        <v-flex xs12 sm6 md3 order-sm3 order-md3 px-2>
          <div class="mb-3">
            <gl-title>热门文章</gl-title>
            <gl-simple-list></gl-simple-list>
          </div>
          <div class="mb-3">
            <gl-title>热门问答排行</gl-title>
            <gl-rank-list></gl-rank-list>
          </div>
        </v-flex>

      </v-layout>
    </v-container>

  </section>
</template>

<script>
import {
  GlSlider,
  GlPanels,
  GlTitle,
  GlGridItems,
  GlArticleList,
  GlSimpleList,
  GlEchartsItems,
  GlRankList
} from '../components/'

export default {
  head: {
    title: '首页'
  },
  asyncData(ctx) {
    ctx.$axios.post('/login', {
      data: 'world, my name is guyue'
    }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  },
  components: {
    GlSlider,
    GlPanels,
    GlTitle,
    GlGridItems,
    GlArticleList,
    GlSimpleList,
    GlEchartsItems,
    GlRankList
  },
  data() {
    return {
      headerSlides: [
        {
          title: '如何在一个星期内打上王者500点?',
          text: '这是一个非常良心的上分教程',
          img: '/slide/slide1.jpg',
          local: false,
          href: 'http://www.baidu.com'
        },
        {
          title: '最新一期手游测评',
          text: '带来2018年最新一期手游测评',
          img: '/slide/slide2.jpg',
          local: true,
          href: '/about'
        },
        {
          title: '8.14英雄联盟全英雄评测',
          text: '教你如何寻找新的meta',
          img: '/slide/slide3.jpg'
        }
      ],
      middleSlides: [
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
      ],
      laterLoaded: false
    }
  },
  computed: {
    echartsOptions() {
      let height = 36
      return {
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
    }
  },
  methods: {
    laterLoad() {
      this.laterLoaded = true
    }
  },
  mounted() {
    this.laterLoad()
  }
}
</script>

<style scoped>

</style>
