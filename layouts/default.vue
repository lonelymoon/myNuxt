<template>
  <div id="gl-app">
    <v-app>
      <v-toolbar color="blue" dark app class="hidden-sm-and-down">
        <v-toolbar-title>GameLife</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            v-for="(item, index) in routes"
            depressed
            flat
            nuxt
            :to="item.link"
            :key="index"
          >
            {{item.text}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-navigation-drawer
          class="hidden-md-and-up blue"
          width="240"
          v-model="navToggle"
          dark
          temporary
          fixed
      >
        <v-list class="blue py-1">
          <v-list-tile>
            <v-list-tile-avatar>
              <div class="user-head">
                <img src="/heads/1.jpg"/>
              </div>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>孤月</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon depressed flat @click="navToggle = false">
                <v-icon>arrow_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list class="blue">
          <v-divider dark></v-divider>

          <v-list-tile
              :nuxt="true"
              :to="item.link"
              v-for="(item, index) in routes"
              :key="index"
              active-class="active-nuxt"
          >
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.text}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-navigation-drawer>

      <v-toolbar color="blue" dark app class="hidden-md-and-up">
        <v-toolbar-side-icon @click="navToggle = true"></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn depressed flat class="mx-0">
            GameLife
          </v-btn>
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
      navToggle: false,
      routes: [
        {
          link: '/',
          icon: 'home',
          text: '首页'
        },
        {
          link: '/community',
          icon: 'group',
          text: '社区'
        },
        {
          link: '/question',
          icon: 'question_answer',
          text: '问答'
        },
        {
          link: '/guides',
          icon: 'fas fa-gamepad',
          text: '攻略'
        },
        {
          link: '/videos',
          icon: 'fas fa-video',
          text: '视频'
        },
        {
          link: '/charts',
          icon: 'fas fa-chart-line',
          text: '图表数据'
        },
        {
          link: '/about',
          icon: 'fas fa-user-secret',
          text: '关于我们'
        },
        {
          link: '/know',
          icon: 'home',
          text: '知识点'
        },
        {
          link: '/login',
          icon: 'fas fa-sign-in-alt',
          text: '注册/登录'
        }
      ],
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

.user-head{
  position: relative;
  height: 100%;
  border: 3px solid #fff;
  padding: 1px;
  border-radius: 50%;
  box-sizing: border-box;
}

.active-nuxt{
  color: #ffd455;
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
