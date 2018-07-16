<template>
  <div id="gl-app">
    <v-app>
      <v-toolbar color="blue" dark app>
        <v-toolbar-title>GameLife</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn depressed flat nuxt to="/">首页</v-btn>
          <v-btn depressed flat nuxt to="/community">社区</v-btn>
          <v-btn depressed flat nuxt to="/question">问答</v-btn>
          <v-btn depressed flat nuxt to="/guides">攻略</v-btn>
          <v-btn depressed flat nuxt to="/videos">视频</v-btn>
          <v-btn depressed flat nuxt to="/charts">图表数据</v-btn>
          <v-btn depressed flat nuxt to="/about">关于我们</v-btn>
          <v-btn depressed flat nuxt to="/know">知识点</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <nuxt/>
      </v-content>
      <v-footer height="auto" class="py-3" color="blue">
        <v-layout justify-center row wrap>
          <v-flex v-for="(footerPart, key) in footer" :key="key" class="pl-5" sm4 xs12>
            <div class="fPart-title pb-2">{{footerPart.title}}</div>
            <ul class="fPart-lists">
              <li class="fPart-list py-1" v-for="(fpList, index) in footerPart.items">
                <a v-if="!footerPart.local" :href="fpList.link" target="_blank">
                  {{fpList.text}}
                </a>
                <nuxt-link :to="fpList.link" v-if="footerPart.local">
                  {{fpList.text}}
                </nuxt-link>
              </li>
            </ul>
          </v-flex>
          <v-flex row wrap sm4 xs12 class="px-5">
            <div class="fPart-title pb-2">简介</div>
            <p class="fPart-describe mt-2">
              这只是一个简单的游戏社区，一个简单的介绍而已。
              这只是一个简单的游戏社区，一个简单的介绍而已。
              这只是一个简单的游戏社区，一个简单的介绍而已。
            </p>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      footer: {
        partner: {
          title: '合作伙伴',
          items: [
            {
              text: '英雄联盟官方',
              link: 'http://www.riotgames.com'
            },
            {
              text: '英雄联盟官方',
              link: 'http://www.riotgames.com'
            },
            {
              text: '英雄联盟官方',
              link: 'http://www.riotgames.com'
            }
          ]
        },
        nav: {
          title: '本站地图',
          local: true,
          items: [
            {
              text: '社区',
              link: '/community'
            },
            {
              text: '问答',
              link: '/question'
            },
            {
              text: '视频',
              link: '/videos'
            },
            {
              text: '攻略',
              link: '/guides'
            },
            {
              text: '图标数据',
              link: '/charts'
            }
          ]
        }
      }
    }
  }
}
</script>

<style>
#gl-app{
  position: relative;
  height: auto;
}

#gl-page{
  position: relative;
  height: auto;
  background-color: #eee;
}

.fPart-lists{
  padding-left: 0px;
}


.fPart-title{
  font-size: 16px;
  color: rgba(255,255,255,.64);
}

.fPart-list a{
  color: #fff;
  text-decoration: none;
}

.fPart-list a:hover{
  text-decoration: underline;
}

.fPart-describe{
  color: #fff;
}
</style>
