<template>
<div class="gl-rank-list-wrapper">
  <v-card v-for="n in 10" :key="n">
    <div class="gl-rank-list pl-4 pr-1 py-2">
      <div class="gl-rank" :data-rank="n">{{n}}</div>
      <div class="gl-rank-img mx-2">
        <nuxt-link to="/question">
          <img src="/logos/logo5.png" class="img-block"/>
        </nuxt-link>
      </div>
      <div class="gl-rank-text">
        <nuxt-link to="/question" class="gl-rank-link">sadsadasdasdsadasdasdasdasdsadasdasdasdsad</nuxt-link>
      </div>
      <div class="gl-rank-fixed">
        <v-icon class="mr-1" size="16">remove_red_eye</v-icon>
        <span>1000</span>
      </div>
    </div>
    <v-divider></v-divider>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'gl-rank-list'
}
</script>

<style scoped>
.gl-rank-list-wrapper{
  position: relative;
  height: auto;
}

.gl-rank-list{
  position: relative;
  height: auto;
  display: flex;
  align-items: center;
}

.gl-rank{
  position: relative;
  height: auto;
  max-width: 20px;
  flex: 1;
  font-size: 18px;
}

.gl-rank-img{
  position: relative;
  height: auto;
  max-width: 30px;
}

.gl-rank-text{
  position: relative;
  height: auto;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
}

.gl-rank-link{
  position: relative;
  height: auto;
  text-decoration: none;
  color: #000000;
}

.gl-rank-link:hover{
  cursor: pointer;
  color: #2196F3;
}

.gl-rank-fixed{
  position: relative;
  height: auto;
  flex: 1;
  font-size: 14px;
  max-width: 80px;
  padding-left: 10px;
}
</style>
