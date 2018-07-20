<template>
<div class="gl-article-list-wrapper">
  <v-layout row wrap class="gl-article-list py-3 px-2">
    <v-flex xs12 sm4 class="gl-article-img px-1 mb-2">
      <div class="gl-article-img-box">
        <img src="/bg.jpg" class="img-block gl-article-img-item" />
      </div>
    </v-flex>
    <v-flex xs12 sm8 class="gl-article-message px-3">
      <h2 class="gl-article-title">
        <span>{{currentList.title}}</span>
      </h2>
      <div class="gl-article-info py-1">
        <span class="pr-3">孤月</span>
        <span class="pr-3">2017年5月4日</span>
        <span class="pr-3">类别：角色扮演</span>
      </div>
      <div class="gl-article-content py-2">
        {{currentList.content}}
      </div>
      <div class="gl-article-others py-1">
        <gl-tag></gl-tag>
      </div>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import GlTag from './tag'

export default {
  name: 'gl-article-list',
  props: {
    list: {
      type: Object,
      default: () => {
        return {
          title: '标题',
          content: `asdasdasddddddddddddddddddddddddddddddddddddddddddddddd
                saddddddddddddddddddddddddddddddddddddddddddddddddddddd
                asddddddddddddddddddddddddddddddddddddddddddddddasddddddddd
                asddddddddddddddddddddddddddddddddddddddasddddddddddddddd`
        }
      }
    },
    wordNum: {
      type: [Number, String],
      default: 100
    }
  },
  components: {
    GlTag
  },
  data() {
    return {}
  },
  computed: {
    currentList() {
      let { title, content } = this.list
      let num = this.wordNum * 1 || 100
      return {
        title: title,
        content: content.substring(0, num) + '...'
      }
    }
  }
}
</script>

<style scoped>
.gl-article-list-wrapper{
  position: relative;
  height: auto;
}

.gl-article-list{
  position: relative;
  height: auto;
  background: #fff;
}

.gl-article-img{
  position: relative;
  height: auto;
  min-width: 100px;
}

.gl-article-img-box{
  position: relative;
  height: auto;
  overflow: hidden;
}

.gl-article-img-item{
  transition: transform .4s linear;
  transform: scale(1,1);
}

.gl-article-img-item:hover{
  cursor: pointer;
  transform: scale(1.2,1.2);
}

.gl-article-message{
  position: relative;
  height: auto;
}

.gl-article-title{
  position: relative;
  height: auto;
  font-size: 18px;
  font-weight: 700;
}

.gl-article-title span:hover{
  color: #2196F3;
  cursor: pointer;
}

.gl-article-info{
  position: relative;
  height: auto;
  font-size: 12px;
}

.gl-article-content{
  position: relative;
  height: auto;
  font-size: 14px;
  color: #7f828b;
  word-break: break-all;
}

.gl-article-others{
  position: relative;
  height: auto;
}
</style>
