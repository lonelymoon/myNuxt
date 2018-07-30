<template>
<div class="gl-vote-box-wrapper">
  <v-card>
    <div class="gl-vote-box pa-3">
      <div class="gl-vote-title mb-3">
        这是一个投票组件
      </div>
      <div class="gl-vote-content">
        <v-radio-group v-model="vote" color="blue" name="vote">
          <v-radio label="1" value="1"></v-radio>
          <v-radio label="2" value="2"></v-radio>
          <v-radio label="3" value="3"></v-radio>
        </v-radio-group>
      </div>
      <div class="gl-vote-footer">
        <v-btn class="mx-0 gl-vote-btn" color="blue" dark depressed small>投票</v-btn>
        <div>
          <v-btn depressed flat small color="blue" class="mx-0 gl-vote-btn">查看结果</v-btn>
          <v-btn depressed flat small color="blue" class="mx-0 gl-vote-btn">更多投票</v-btn>
        </div>
      </div>
    </div>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'gl-vote-box',
  data() {
    return {
      vote: '1'
    }
  }
}
</script>

<style scoped>
.gl-vote-box-wrapper{
  position: relative;
  height: auto;
}

.gl-vote-box{
  position: relative;
  height: auto;
}

.gl-vote-title{
  position: relative;
  height: auto;
  font-size: 20px;
  font-weight: 700;
}

.gl-vote-content{
  position: relative;
  height: auto;
}

.gl-vote-footer{
  position: relative;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gl-vote-btn{
  min-width: 60px;
}
</style>
