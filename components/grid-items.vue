<template>
<div class="gl-grid-items-wrapper">

  <v-layout row wrap align-center>

    <v-flex
      :class="gridItemsClasses(index)"
      :style="gridItemStyles"
      v-for="(item, index) in items"
      :key="item.cid"
      v-ripple
    >
      <div class="gl-grid-item-inner pa-1">
        <nuxt-link :to="item.href">
          <img :src="item.img" class="img-block mx-auto"/>
          <div class="gl-grid-item-text pt-2">{{item.name}}</div>
        </nuxt-link>
      </div>
    </v-flex>
  </v-layout>

</div>
</template>

<script>
export default {
  name: 'grid-tabs',
  props: {
    col: {
      type: [Number, String],
      default: 4
    },
    row: {
      type: [Number, String],
      default: 10000
    }
  },
  data() {
    return {
      // 列数
      colNum: Math.max(this.col * 1 || 1, 4),
      // 行数
      rowNum: this.row * 1 || 10000,
      // 数据
      items: [
        {
          name: '亡者农药',
          cid: '123',
          img: '/logos/logo1.png',
          href: '/'
        },
        {
          name: '营养师',
          cid: '124',
          img: '/logos/logo6.png',
          href: '/'
        },
        {
          name: '崩三',
          cid: '125',
          img: '/logos/logo9.png',
          href: '/'
        },
        {
          name: '扶他狗',
          cid: '121',
          img: '/logos/logo11.png',
          href: '/'
        },
        {
          name: '游戏2',
          cid: '112',
          img: '/logos/logo2.png',
          href: '/'
        },
        {
          name: '游戏3',
          cid: '113',
          img: '/logos/logo3.png',
          href: '/'
        },
        {
          name: '游戏4',
          cid: '114',
          img: '/logos/logo4.png',
          href: '/'
        },
        {
          name: '游戏5',
          cid: '115',
          img: '/logos/logo5.png',
          href: '/'
        },
        {
          name: '游戏7',
          cid: '117',
          img: '/logos/logo7.png',
          href: '/'
        },
        {
          name: '游戏8',
          cid: '118',
          img: '/logos/logo8.png',
          href: '/'
        },
        {
          name: '游戏10',
          cid: '120',
          img: '/logos/logo10.png',
          href: '/'
        }
      ]
    }
  },
  computed: {
    gridItemStyles() {
      // 每个元素所占宽度百分比
      let per = 100 / this.colNum
      return {
        width: per + '%',
        maxWidth: per + '%'
      }
    }
  },
  methods: {
    gridItemsClasses(index) {
      // 所有元素生成的总行数
      let rowNum = Math.ceil(this.items.length / this.colNum)
      // 是否有右边框
      let noBR = (index + 1) % this.colNum === 0
      // 是否有底边框
      let noBB = Math.ceil((index + 1) / this.colNum) === rowNum
      // 返回class
      return {
        'gl-grid-item': true,
        'pa-2': true,
        'gl-grid-item-no-border-right': noBR,
        'gl-grid-item-no-border-bottom': noBB
      }
    }
  },
  watch: {
    col: function () {
      this.colNum = Math.max(this.col * 1 || 1, 4)
    }
  }
}
</script>

<style scoped>
.gl-grid-items-wrapper{
  position: relative;
  height: auto;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
}

.gl-grid-item{
  position: relative;
  box-sizing: border-box;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}

.gl-grid-item:hover{
  background-color: rgba(0,0,0,0.1);
}

.gl-grid-item-no-border-right{
  border-right: none;
}

.gl-grid-item-no-border-bottom{
  border-bottom: none;
}

.gl-grid-item-inner{
  position: relative;
  height: auto;
  text-align: center;
}

.gl-grid-item-text{
  position: relative;
  height: auto;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
