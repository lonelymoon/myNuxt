<template>
<section id="gl-page">
  <v-container fluid px-1>
    <v-layout row wrap>
      <v-flex md8 xs12 px-2 mb-3>
        <div class="blue">
          <!--大屏显示-->
          <v-tabs right show-arrows class="hidden-xs-only">

            <v-tab>最近回答</v-tab>
            <v-tab>待回答</v-tab>
            <v-tab>已回答</v-tab>
            <v-tab>热门回答</v-tab>

            <v-tab-item v-for="n in 4" :key="n">
              <v-card><v-divider></v-divider></v-card>
              <gl-question-list v-for="(list, index) in lists" :list="list" :key="list.question.qid">
              </gl-question-list>
            </v-tab-item>

          </v-tabs>
          <!--小屏-->
          <v-tabs centered show-arrows class="hidden-sm-and-up">

            <v-tab>最近回答</v-tab>
            <v-tab>待回答</v-tab>
            <v-tab>已回答</v-tab>
            <v-tab>热门回答</v-tab>

            <v-tab-item v-for="n in 4" :key="n">
              <v-card><v-divider></v-divider></v-card>
              <gl-question-list v-for="list in lists" :list="list" :key="list.question.qid">
              </gl-question-list>
            </v-tab-item>

          </v-tabs>

        </div>
      </v-flex>
      <v-flex md4 xs12 px-2>
        <v-layout row wrap>
          <v-flex xs12 class="mb-3">
            <gl-fn-btn-items></gl-fn-btn-items>
          </v-flex>
          <v-flex xs12 sm6 md12 class="mb-3">
            <gl-title>热门问答排行</gl-title>
            <gl-rank-list></gl-rank-list>
          </v-flex>
          <v-flex xs12 sm6 md12 class="mb-3">
            <gl-title>用户积分排行</gl-title>
            <gl-rank-list></gl-rank-list>
          </v-flex>
          <v-flex xs12 sm12 md12 class="mb-3">
            <gl-title>社区热度排行</gl-title>
            <gl-rank-list></gl-rank-list>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import {
  GlTitle,
  GlQuestionList,
  GlRankList,
  GlFnBtnItems
} from '../../components/'

export default {
  head: {
    title: '问答'
  },
  components: {
    GlTitle,
    GlQuestionList,
    GlRankList,
    GlFnBtnItems
  },
  data() {
    return {
      lists: [
        {
          user: {
            name: '孤月',
            title: '管理员',
            level: 9,
            uid: 1,
            avatar: '/logos/logo1.png'
          },
          question: {
            qid: 1,
            date: '2018年4月14日 15:30',
            title: '啊圣诞节啊手机打就是看电视卡',
            imgsrc: '/logos/logo7.png',
            describe: `阿瑟大时代空间啊睡觉的爱上了的撒旦看见啊收到了啊速度进来撒的力量爱看电视剧拉德斯基阿斯利
                  打算几点啦受打击了萨都剌啊收到了卡多少级啊是的阿拉斯加打开了撒来得及`,
            voteNum: 4
          }
        },
        {
          user: {
            name: '孤月',
            title: '管理员',
            level: 9,
            uid: 1,
            avatar: '/logos/logo1.png'
          },
          question: {
            qid: 2,
            date: '2018年4月14日 15:30',
            title: '啊圣诞节啊手机打就是看电视卡',
            imgsrc: '/logos/logo7.png',
            describe: `阿瑟大时代空间啊睡觉的爱上了的撒旦看见啊收到了啊速度进来撒的力量爱看电视剧拉德斯基阿斯利
                  打算几点啦受打击了萨都剌啊收到了卡多少级啊是的阿拉斯加打开了撒来得及`,
            voteNum: 4
          }
        },
        {
          user: {
            name: '孤月',
            title: '管理员',
            level: 9,
            uid: 1,
            avatar: '/logos/logo1.png'
          },
          question: {
            qid: 3,
            date: '2018年4月14日 15:30',
            title: '啊圣诞节啊手机打就是看电视卡',
            imgsrc: '/logos/logo7.png',
            describe: `阿瑟大时代空间啊睡觉的爱上了的撒旦看见啊收到了啊速度进来撒的力量爱看电视剧拉德斯基阿斯利
                  打算几点啦受打击了萨都剌啊收到了卡多少级啊是的阿拉斯加打开了撒来得及`,
            voteNum: 4
          }
        },
        {
          user: {
            name: '孤月',
            title: '管理员',
            level: 9,
            uid: 1,
            avatar: '/logos/logo1.png'
          },
          question: {
            qid: 4,
            date: '2018年4月14日 15:30',
            title: '啊圣诞节啊手机打就是看电视卡',
            imgsrc: '/logos/logo7.png',
            describe: `阿瑟大时代空间啊睡觉的爱上了的撒旦看见啊收到了啊速度进来撒的力量爱看电视剧拉德斯基阿斯利
                  打算几点啦受打击了萨都剌啊收到了卡多少级啊是的阿拉斯加打开了撒来得及`,
            voteNum: 4
          }
        },
        {
          user: {
            name: '孤月',
            title: '管理员',
            level: 9,
            uid: 1,
            avatar: '/logos/logo1.png'
          },
          question: {
            qid: 5,
            date: '2018年4月14日 15:30',
            title: '啊圣诞节啊手机打就是看电视卡',
            imgsrc: '/logos/logo7.png',
            describe: `阿瑟大时代空间啊睡觉的爱上了的撒旦看见啊收到了啊速度进来撒的力量爱看电视剧拉德斯基阿斯利
                  打算几点啦受打击了萨都剌啊收到了卡多少级啊是的阿拉斯加打开了撒来得及`,
            voteNum: 4
          }
        },
        {
          user: {
            name: '孤月',
            title: '管理员',
            level: 9,
            uid: 1,
            avatar: '/logos/logo1.png'
          },
          question: {
            qid: 6,
            date: '2018年4月14日 15:30',
            title: '啊圣诞节啊手机打就是看电视卡',
            imgsrc: '/logos/logo7.png',
            describe: `阿瑟大时代空间啊睡觉的爱上了的撒旦看见啊收到了啊速度进来撒的力量爱看电视剧拉德斯基阿斯利
                  打算几点啦受打击了萨都剌啊收到了卡多少级啊是的阿拉斯加打开了撒来得及`,
            voteNum: 4
          }
        },
        {
          user: {
            name: '孤月',
            title: '管理员',
            level: 9,
            uid: 1,
            avatar: '/logos/logo1.png'
          },
          question: {
            qid: 7,
            date: '2018年4月14日 15:30',
            title: '啊圣诞节啊手机打就是看电视卡',
            imgsrc: '/logos/logo7.png',
            describe: `阿瑟大时代空间啊睡觉的爱上了的撒旦看见啊收到了啊速度进来撒的力量爱看电视剧拉德斯基阿斯利
                  打算几点啦受打击了萨都剌啊收到了卡多少级啊是的阿拉斯加打开了撒来得及`,
            voteNum: 4
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
