<template>
  <div id="ngnl-page">
    <v-container class="pa-1">
      <v-layout row wrap>
        <v-flex md6 xs12 v-for="(item, index) in points()" :key="index" class="know-wrapper">
          <div class="know">
            <h2 class="py-3">{{item.title}}</h2>
            <p v-html="item.desc">
              {{item.desc}}
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'know-page',
  head: {
    title: '知识点复习'
  },
  data() {
    return {}
  },
  methods: {
    points
  }
}

function points() {
  let arr = []
  // 语义化标签的好处
  let p1 = {
    title: '语义化标签的好处',
    desc: `
      1. 对搜索引擎友好<br/>
      2. 在去除样式后也能展现良好的页面结构<br/>
      3. 方便其他设备（如盲人阅读器等）解析<br/>
      4. 增强代码的可读性，一定程序上有利于团队协作
    `
  }
  arr.push(p1)
  let p2 = {
    title: '标准模式和怪异模式的差别',
    desc: `
      1. 怪异模式主要为了兼容老版本浏览器，不是严格遵照W3C标准进行对页面的渲染<br/>
      2. 最明显体现在盒模型解析上的差异，标准模式以标准盒模型进行解析，而怪异模式以IE盒模型进行解析
    `
  }
  arr.push(p2)
  let p3 = {
    title: 'doctype的作用？DTD的类型',
    desc: `
      1. doctype的作用是告知浏览器以何种模式来渲染文档<br/>
      2. DTD类型：严格的，过渡的（常用），框架的
    `
  }
  arr.push(p3)
  let p4 = {
    title: 'xhtml和html的区别',
    desc: `
      1. xhtml在语法上更为严格<br/>
      2. 具体体现在：1. 标签嵌套必须闭合 2.标签必须小写 3. 必须存在html根元素 4. 属性值必须用引号包含
    `
  }
  arr.push(p4)
  let p5 = {
    title: '使用data-的好处',
    desc: `
      1. H5新特性-用于存储页面或应用程序的私有自定义数据<br/>
      2. 可读性更强，利于团队协作<br/>
      3. 可以通过dataset直接获取
    `
  }
  arr.push(p5)
  let p6 = {
    title: 'meta标签',
    desc: `
      1. 定义页面的一些元信息，包括标题，关键字，描述和一些页面操作等<br/>
      2. 主要供机器解读，不显示在页面内部<br/>
      3. 常用来进行：缓存控制，seo优化，viewport对移动设备进行兼容，控制浏览器行为等等
    `
  }
  arr.push(p6)
  let p7 = {
    title: '关于渐进式渲染',
    desc: `
      1. 指浏览器不用等待所有页面资源都渲染好之后再呈现给用户看，而是边下载边渲染<br/>
      2. 实现方式：服务器端渲染SSR
    `
  }
  arr.push(p7)
  return arr
}

</script>

<style scoped>
.know-wrapper{
  position: relative;
  height: auto;
  padding: 8px;
}

.know{
  position: relative;
  background-color: #fff;
  padding: 16px;
  min-height: 100px;
  height: auto;
}
</style>
