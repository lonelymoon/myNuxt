<template>
<div class="gl-fn-btn-items-wrapper">
  <v-card>
    <div class="gl-fn-btn-items">
      <div class="gl-fn-btn py-3" v-for="(item, index) in btns" :key="index" v-ripple>
        <nuxt-link :to="item.link" class="gl-fn-btn-link">
          <v-icon class="gl-fn-btn-icon" :data-noText="!withText" :color="item.color">{{item.icon}}</v-icon>
          <div class="gl-fn-btn-text mt-2" v-if="withText">{{item.text}}</div>
        </nuxt-link>
      </div>
    </div>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'gl-fn-btn-items',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    noText: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      btns: [
        {
          text: '写文章',
          icon: 'fas fa-pencil-alt',
          color: 'blue',
          link: '/community'
        },
        {
          text: '投票',
          icon: 'far fa-chart-bar',
          color: 'orange',
          link: '/community'
        },
        {
          text: '新社区',
          icon: 'far fa-plus-square',
          color: 'green',
          link: '/community'
        },
        {
          text: '签到',
          icon: 'fab fa-shirtsinbulk',
          color: 'primary',
          link: '/community'
        }
      ]
    }
  },
  computed: {
    withText() {
      if (this.noText) return false
      for (let btn of this.btns) {
        if (btn.text === '') {
          return false
        }
      }
      return true
    }
  }
}
</script>

<style scoped>
.gl-fn-btn-items-wrapper{
  position: relative;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
}

.gl-fn-btn-items{
  position: relative;
  height: auto;
  display: flex;
  align-items: center;
}

.gl-fn-btn{
  position: relative;
  height: auto;
  flex: 1;
  border-right: 1px solid #e0e0e0;
  box-sizing: border-box;
  text-align: center;
}

.gl-fn-btn:hover{
  cursor: pointer;
  background-color: rgba(0,0,0,0.2);
}

.gl-fn-btn-items .gl-fn-btn:last-child{
  border-right: none;
}

.gl-fn-btn-link{
  text-decoration: none;
}

.gl-fn-btn-icon{
  font-size: 28px;
}

.gl-fn-btn-icon[data-noText="true"]{
  font-size: 40px;
}

.gl-fn-btn-text{
  position: relative;
  height: auto;
  font-size: 12px;
  color: #000;
}
</style>
