<template>
<div v-if="item.question" :ref="item.question.qid" class="gl-question-list-wrapper" v-resize="onResize">
  <v-card height="auto">
    <div class="question-list-box pa-3">
      <div class="question-list-left" :data-small="isMobile">
        <div class="question-list-avatar">
          <img :src="item.user.avatar" class="img-block"/>
        </div>
        <div class="question-list-vote mt-3">
          <div>投票</div>
          <span class="question-list-vote-num">{{item.question.voteNum}}</span>
        </div>
      </div>
      <div class="question-list-right pl-2">
        <div class="question-list-header">
          <span class="question-list-username">{{item.user.name}}</span>
          <span class="question-list-usertitle mx-2" :data-level="item.user.level">
            {{item.user.title}}
          </span>
          <span class="question-list-date">
            {{item.question.date}}
          </span>
        </div>
        <div class="question-list-content">
          <div class="question-list-title py-1">
            <div class="question-list-title-inner question-list-title-inner-img mr-1">
              <img :src="item.question.imgsrc" class="img-block"/>
            </div>
            <div
                class="question-list-title-inner"
                :data-small="isMobile"
                v-text="item.question.title">
            </div>
          </div>
          <div
            class="question-list-describe"
            :data-small="isMobile"
            v-text="spliceText(item.question.describe)"
          >
          </div>
        </div>
      </div>
    </div>
    <v-divider></v-divider>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'gl-question-list',
  props: {
    list: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      isMobile: false,
      item: this.list
    }
  },
  methods: {
    spliceText(text) {
      if (this.isMobile) {
        return text.substring(0, 40) + '...'
      }
      return text.substring(0, 100) + '...'
    },
    onResize() {
      if (!this.item.question) return false
      let w = this.$refs[this.item.question.qid].innerWidth
      this.isMobile = !!(w <= 400)
    }
  },
  mounted() {
    this.onResize()
  },
  watch: {
    list() {
      this.item = this.list
    }
  }
}
</script>

<style scoped>
.gl-question-list-wrapper{
  position: relative;
  height: auto;
}

.question-list-box{
  position: relative;
  height: auto;
  display: flex;
}

.question-list-left{
  position: relative;
  flex: 1;
  max-width: 40px;
  height: auto;
}

.question-list-left[data-small="true"]{
  max-width: 30px;
}

.question-list-right{
  position: relative;
  height: auto;
  flex: 1;
}

.question-list-avatar{
  position: relative;
  height: auto;
}

.question-list-vote{
  position: relative;
  height: auto;
  text-align: center;
  font-size: 12px;
}

.question-list-vote-num{
  position: relative;
  height: auto;
  font-size: 24px;
}

.question-list-header{
  position: relative;
  height: auto;
  font-size: 12px;
}

.question-list-username{
  position: relative;
  height: auto;
}

.question-list-usertitle{
  position: relative;
  height: auto;
  padding: 2px;
  color: #fff;
  background-color: #66ccff;
}

.question-list-date{
  position: relative;
  height: auto;
  letter-spacing: .5px;
}

.question-list-content{
  position: relative;
  height: auto;
}

.question-list-title{
  position: relative;
  height: auto;
  display: flex;
}

.question-list-title-inner{
  position: relative;
  height: auto;
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  flex: 1;
}

.question-list-title-inner[data-small="true"]{
  font-size: 15px;
}

.question-list-title-inner-img{
  margin-top: 3px;
  max-width: 18px;
}

.question-list-describe{
  position: relative;
  height: auto;
  font-size: 14px;
  color: #7f828b;
  padding-top: 8px;
}

.question-list-describe[data-small="true"]{
  font-size: 12px;
  padding-top: 0px;
}
</style>
