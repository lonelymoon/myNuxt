<template>
<section id="gl-page">
  <v-container fluid px-1>
    <v-layout row wrap>
      <v-flex md8 xs12 px-2>
        <div class="blue">
          <gl-title>问答列表展示</gl-title>
          <gl-question-list></gl-question-list>
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
  }
}
</script>

<style scoped>

</style>
