<template>
<section id="gl-page">
  <v-container fluid px-1>
    <v-layout row wrap>
      <v-flex md8 xs12 px-2>
        <div class="blue">
          <gl-title>问答列表展示</gl-title>
          <gl-question-list v-for="(list, index) in lists" :list="list" :key="list.question.qid">
          </gl-question-list>
        </div>
      </v-flex>
      <v-flex md4 xs12 px-2>
        <div class="mb-3">
          <gl-title>热门问答排行</gl-title>
        </div>
        <div class="mb-3">
          <gl-title>用户积分排行</gl-title>
        </div>
        <div class="mb-3">
          <gl-title>社区热度排行</gl-title>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import {
  GlTitle,
  GlQuestionList
} from '../../components/'

export default {
  head: {
    title: '问答'
  },
  components: {
    GlTitle,
    GlQuestionList
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
