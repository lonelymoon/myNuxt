<template>
<div class="gl-panels-wrapper">
  <v-expansion-panel>
    <v-expansion-panel-content v-for="(panel, index) in panels" :key="panel.cid">
      <div slot="header">
        <span class="gl-panels-index">{{index+1}}</span>
        <nuxt-link :to="(!!panel.link? panel.link: '/')" class="gl-panels-link">
          {{panel.name}}
        </nuxt-link>
      </div>
      <v-card>
        <v-divider></v-divider>
        <v-card-text class="pa-0">
          <v-card-media :src="panel.img" :height="panelMediaHeight"></v-card-media>
          <v-container fluid px-3 py-3>
            <v-layout>
              <v-flex>
                <p class="gl-panels-text">
                  {{panel.desc}}
                </p>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions class="px-3">
            <span>
              <v-icon color="red" class="pr-1">fas fa-fire</v-icon>
              {{panel.click}}
            </span>
            <v-spacer></v-spacer>
            <v-btn color="blue" small dark depressed>官网</v-btn>
            <v-btn color="blue" small dark depressed>进入社区</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</div>
</template>

<script>
export default {
  name: 'gl-panels',
  data() {
    return {
      panelMediaHeight: 150,
      panels: [
        {
          name: '营养师',
          cid: 'yys',
          link: '/community/yys',
          img: '/panels/yys.jpg',
          desc: `营养师是腾讯游戏开发的一款氪金型手游，
            该手游秉持着氪金也不一定能变强的思想，成功劝退无
            数氪金大佬，堪称手游平衡界的良心
            `,
          click: 12030
        },
        {
          name: '亡者农药',
          cid: 'wzny',
          link: '/community/wzny',
          img: '/panels/wzry.jpg',
          desc: `亡者农药是黄易游戏开发的一款氪金型手游，
            该手游秉持着氪金也不一定能变强的思想，成功劝退无
            数氪金大佬，堪称手游平衡界的良心
            `,
          click: 11113
        },
        {
          name: '崩崩崩',
          cid: 'b3',
          link: '/community/b3',
          img: '/panels/b3.jpg',
          desc: `崩三是肝帝游戏开发的一款氪金型手游，
            该手游秉持着氪金也不一定能变强的思想，成功劝退无
            数氪金大佬，堪称手游平衡界的良心
            `,
          click: 10030
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.gl-panels-wrapper{
  position: relative;
  height: auto;
}

.gl-panels-index{
  position: relative;
  height: auto;
  padding-right: 12px;
}

.gl-panels-link{
  text-decoration: none;
  color: rgba(0, 0, 0, .87);
}

.gl-panels-link:hover{
  text-decoration: underline;
  color: #2196F3;
}

.gl-panels-text{
  text-indent: 2em;
  font-size: 14px;
  letter-spacing: 0.6px;
}
</style>
