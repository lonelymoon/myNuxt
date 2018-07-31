<template>
<div class="gl-steps-wrapper">
  <v-stepper vertical v-model="step">
    <template v-for="(step, index) in currentSteps">
      <v-stepper-step :step="index+1" :key="index">
        {{step.date}} {{step.title}}
      </v-stepper-step>
      <v-stepper-content :step="index+1">
        <v-card>
          <p>{{step.text}}</p>
          <v-btn @click="next" class="mx-0" small depressed dark color="blue">下一个活动</v-btn>
        </v-card>
      </v-stepper-content>
    </template>
  </v-stepper>
</div>
</template>

<script>
export default {
  name: 'gl-steps',
  data() {
    return {
      step: 1,
      currentSteps: [
        {
          title: '活动1',
          date: '2018-07-31',
          text: '啊大飒飒的阿斯顿阿斯顿艾斯大声的 啊阿斯顿 阿斯顿'
        },
        {
          title: '活动2',
          date: '2018-08-31',
          text: '啊大飒飒的阿斯顿阿斯顿艾斯大声的 啊阿斯顿 阿斯顿'
        },
        {
          title: '活动3',
          date: '2018-09-01',
          text: '啊大飒飒的阿斯顿阿斯顿艾斯大声的 啊阿斯顿 阿斯顿'
        },
        {
          title: '活动4',
          date: '2018-10-21',
          text: '啊大飒飒的阿斯顿阿斯顿艾斯大声的 啊阿斯顿 阿斯顿'
        }
      ]
    }
  },
  methods: {
    next() {
      this.step = this.step >= this.currentSteps.length ? 1 : this.step + 1
    }
  }
}
</script>

<style scoped>

</style>
