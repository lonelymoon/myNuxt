<template>
<div :ref="itemsName" class="gl-items-with-dialog-wrapper" v-resize="onResize">

  <v-card>
    <div class="gl-items-with-dialog pa-3">
      <div :class="itemClasses"
           :style="itemStyles"
           @click="showItem(index)"
           v-for="(item, index) in datas" :key="index">

        <div class="gl-items-with-dialog-item-wrapper">
          <div class="gl-items-with-dialog-item-face">
            <img :src="item.img" class="img-block"/>
            <div class="mt-3">{{item.name}}</div>
          </div>
        </div>

      </div>
    </div>
  </v-card>

  <v-dialog v-model="show" width="560" max-width="96%">
    <v-card height="auto">

      <v-layout row wrap class="items-dialog-set px-3 py-4">

        <v-flex class="items-dialog-set-left px-2" xs12 sm3>

          <v-layout row wrap>
            <v-flex class="items-dialog-set-img pb-2 pr-2" xs6 sm12>
              <img :src="currentItem.img" class="img-block"/>
            </v-flex>
            <v-flex class="items-dialog-set-msg" xs6 sm12>
              <div class="items-dialog-set-list pb-1 mb-1">
                <span class="items-dialog-set-category pr-1">游戏名称：</span>
                <span class="items-dialog-set-value">{{currentItem.name}}</span>
              </div>
              <div class="items-dialog-set-list pb-1 mb-1">
                <span class="items-dialog-set-category pr-1">上线时间：</span>
                <span class="items-dialog-set-value">{{currentItem.date}}</span>
              </div>
              <div class="items-dialog-set-list pb-1 mb-1">
                <span class="items-dialog-set-category pr-1">公司：</span>
                <span class="items-dialog-set-value">{{currentItem.company}}</span>
              </div>
              <div class="items-dialog-set-list pb-1 mb-1">
                <span class="items-dialog-set-category pr-1">官网：</span>
                <span class="items-dialog-set-value">
                  <a :href="currentItem.officeWeb" target="_blank">地址</a>
                </span>
              </div>
              <div class="items-dialog-set-list pb-1 mb-1">
                <span class="items-dialog-set-category pr-1">成员：</span>
                <span class="items-dialog-set-value">{{currentItem.member}}</span>
              </div>
              <div class="items-dialog-set-list pb-1 mb-1">
                <span class="items-dialog-set-category pr-1">攻略数：</span>
                <span class="items-dialog-set-value">{{currentItem.guides}}</span>
              </div>
            </v-flex>
          </v-layout>

        </v-flex>

        <v-flex class="items-dialog-set-right px-2" xs12 sm9>
          <div class="items-dialog-intro">
            <div class="items-dialog-set-header">简介</div>
            <div class="items-dialog-set-content pt-2 pb-5">{{currentItem.describe}}</div>
          </div>
          <div class="items-dialog-set-fn">
            <v-spacer></v-spacer>
            <v-btn depressed flat small color="blue" class="mx-0" :nuxt="true" to="/">进入</v-btn>
            <v-btn depressed flat small color="grey" class="mx-0" @click="show = false">退出</v-btn>
          </div>
        </v-flex>

      </v-layout>

    </v-card>
  </v-dialog>

</div>
</template>

<script>
export default {
  name: 'gl-items-with-dialog',
  props: {
    itemsName: {
      type: String,
      default: 'items'
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    itemClasses() {
      return {
        'gl-items-with-dialog-item': true,
        'pa-3': !this.isSmall,
        'mb-3': !this.isSmall,
        'pa-2': this.isSmall,
        'mb-2': this.isSmall
      }
    },
    itemStyles() {
      return {
        maxWidth: this.isSmall ? '33%' : '20%',
        minWidth: this.isSmall ? '33%' : '20%'
      }
    }
  },
  data() {
    return {
      el: null,
      show: false,
      isSmall: false,
      currentItem: [],
      datas: [
        {
          gid: 123,
          name: '崩3',
          img: '/faces/1.jpg',
          company: 'mihayo',
          member: 12313,
          date: '2016-02-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 213
        },
        {
          gid: 124,
          name: '营养师',
          img: '/faces/2.jpg',
          company: 'neteasy',
          member: 123123,
          date: '2017-02-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 214
        },
        {
          gid: 125,
          name: '亡者农药',
          img: '/faces/3.jpg',
          company: 'tencent',
          member: 123132,
          date: '2017-02-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 2131
        },
        {
          gid: 126,
          name: '必肝航线',
          img: '/faces/4.jpg',
          company: 'manjuu',
          member: 123130,
          date: '2017-06-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 2130
        },
        {
          gid: 127,
          name: '扶他狗',
          img: '/faces/5.jpg',
          company: 'bilibili',
          member: 52313,
          date: '2016-02-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 323
        },
        {
          gid: 127,
          name: '游戏6',
          img: '/faces/6.jpg',
          company: 'nonono',
          member: 1233,
          date: '2018-02-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 2132
        },
        {
          gid: 123,
          name: '崩3',
          img: '/faces/1.jpg',
          company: 'mihayo',
          member: 12313,
          date: '2016-02-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 213
        },
        {
          gid: 124,
          name: '营养师',
          img: '/faces/2.jpg',
          company: 'neteasy',
          member: 123123,
          date: '2017-02-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 214
        },
        {
          gid: 125,
          name: '亡者农药',
          img: '/faces/3.jpg',
          company: 'tencent',
          member: 123132,
          date: '2017-02-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 2131
        },
        {
          gid: 126,
          name: '必肝航线',
          img: '/faces/4.jpg',
          company: 'manjuu',
          member: 123130,
          date: '2017-06-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 2130
        },
        {
          gid: 127,
          name: '扶他狗',
          img: '/faces/5.jpg',
          company: 'bilibili',
          member: 52313,
          date: '2016-02-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 323
        },
        {
          gid: 127,
          name: '游戏6',
          img: '/faces/6.jpg',
          company: 'nonono',
          member: 1233,
          date: '2018-02-13',
          officeWeb: 'http://www.baidu.com',
          describe: `这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
              这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介这是一个游戏简介
          `,
          guides: 2132
        }
      ]
    }
  },
  methods: {
    onResize() {
      setTimeout(() => {
        let w = this.el.clientWidth
        if (w <= 400) {
          this.isSmall = true
        } else {
          this.isSmall = false
        }
      }, 50)
    },
    showItem(index) {
      this.show = true
      this.currentItem = this.datas[index]
    }
  },
  mounted() {
    this.el = this.$refs[this.itemsName]
    this.onResize()
  }
}
</script>

<style scoped>
.gl-items-with-dialog-wrapper{
  position: relative;
  height: auto;
}

.gl-items-with-dialog{
  position: relative;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.gl-items-with-dialog-item{
  position: relative;
  height: auto;
  box-sizing: border-box;
  flex: 1 0 auto;
  text-align: center;
  transition: box-shadow 0.3s linear;
}

.gl-items-with-dialog-item:hover{
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.7);
}

.items-dialog-set{
  height: auto;
  box-sizing: border-box;
}

.items-dialog-set-left{
  text-align: center;
}

.items-dialog-set-img{
  position: relative;
  height: auto;
}

.items-dialog-set-img .img-block{
  margin: 0;
}

.items-dialog-set-msg{
  position: relative;
  height: auto;
  text-align: left;
}

.items-dialog-set-list{
  position: relative;
  height: auto;
  font-size: 12px;
  border-bottom: 1px dashed #dbe1ec;
}

.items-dialog-intro{
  position: relative;
  height: auto;
}

.items-dialog-set-value{
  color: #FB8C00;
}

.items-dialog-set-header{
  position: relative;
  height: auto;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
}

.items-dialog-set-header:after{
  position: absolute;
  content: "";
  display: block;
  width: 4px;
  height: 20px;
  background-color: #2196F3;
  right: -13px;
  top: 1px;
}

.items-dialog-set-content{
  position: relative;
  height: auto;
  min-height: 100px;
}

.items-dialog-set-fn{
  position: absolute;
  height: auto;
  display: flex;
  right: 8px;
  bottom: 16px;
}
</style>
