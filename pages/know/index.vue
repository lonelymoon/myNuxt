<template>
  <div id="gl-page">
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
      1. 指浏览器不用等待所有页面资源都渲染好之后一起呈现给用户看，而是按步骤一部分一部分进行渲染<br/>
      2. 实现方式：服务器端渲染SSR
    `
  }
  arr.push(p7)
  let p8 = {
    title: '关于盒模型',
    desc: `
      1. 页面设计和布局时用的一个术语，表示一块内容在页面的存放像盒子摆放，主要有内容-边框-内边距-外边距<br/>
      2. box-sizing: 规定盒子模型不同的计算方式content-box，padding-box，border-box
    `
  }
  arr.push(p8)
  let p9 = {
    title: 'display和position的关系',
    desc: `
      1. display确定元素的显示方式，position使元素脱离文档流后会使display失效，元素的显示方式变为inline-block<br/>
      2. float同样会使display变为inline-block，position脱离文档流后float无效
    `
  }
  arr.push(p9)
  let p10 = {
    title: 'flex和inline-flex的区别,block和inline-block的区别',
    desc: `
      1. 前一个问题是flex弹性盒模型的容器是内联块级显示还是块级显示<br/>
      2. block与inline-block的区别也在于内联块级和块级显示的区别
    `
  }
  arr.push(p10)
  let p11 = {
    title: 'property与attribute的区别',
    desc: `
      1. property和attributies都是properties的子集，而每个attribute是attributies的子集<br/>
      2. attribute需要通过相应的方法来修改特性，而property可以直接修改属性值进行修改，通常来讲，更改dom元素自带的属性值时互相
      影响（value除外）<br/>
      3. 修改新特性的时候互相不影响,attribute取value时取的都是初始值
    `
  }
  arr.push(p11)
  let p12 = {
    title: 'BCF的创建及其作用',
    desc: `
      1. BCF定义：块级格式化上下文，形成一个独立的内部空间，使该容器内部的元素和容器的兄弟元素互不影响<br/>
      2. 创建：1.overflow不为visible；2.float不为none；3.定位不在文档流中；4.display：inline-block，table-cells等<br/>
      3. 作用：清除浮动，阻止上下外边距折叠
    `
  }
  arr.push(p12)
  let p13 = {
    title: '::伪类和:伪类的区别',
    desc: `
      1. 相同点：功能一样，都表示伪类对象<br/>
      2. 不同点：:伪类属于css2语法，::伪类属于css3语法<br/>
      3. 特性：content必须要有，content里面的内容不会添加到dom中，不能用js操作
    `
  }
  arr.push(p13)
  let p14 = {
    title: 'JS基本类型，引用类型',
    desc: `
      1. 基本类型：String,Number,undefined,null,Boolean,Symbol<br/>
      2. 引用类型：Object
    `
  }
  arr.push(p14)
  let p15 = {
    title: '事件冒泡和事件捕获',
    desc: `
      1. 事件冒泡：触发源到window对象<br/>
      2. 事件捕获：window对象到触发源<br/>
      3. 事件委托：
      <pre>
      let on = function(event,parent,target,callback = function(){}){
        let ParentEles = document.querySelectorAll(parent);
        function getTargetNode(ele,className,parentNode){
          if( ele === parentNode ){
            return null;
          }
          if( ele.className.includes(className) ){
            return ele;
          }
          return getTargetNode(ele.parentNode,className,parentNode);
        }

        ParentEles.each(function(parent){
          parent["on"+event] = function(e){
            let tar = getTargetNode(e.target,target,parent);
            if( tar !== null ) {
              callback(tar)
            }
        });
      };
      </pre>
    `
  }
  arr.push(p15)
  let p16 = {
    title: 'new 一个对象具体做了什么',
    desc: `
      1. 创建一个新对象<br/>
      2. 新对象的_proto_属性指向构造函数的原型对象<br/>
      3. 将构造函数的作用域赋值给新对象。（也所以this对象指向新对象）<br/>
      4. 执行构造函数内部的代码，将属性添加给新对象中的this对象<br/>
      5. 返回新对象
    `
  }
  arr.push(p16)
  let p17 = {
    title: '作用域和作用域链，执行环境',
    desc: `
      1. 作用域：变量与函数的可访问范围，抛开with和eval语句，变量的作用域在写代码的时候就已经确定，分为局部作用域和全局作用域<br/>
      2. 作用域链：保证对执行环境中可访问变量和函数的有序访问<br/>
      3. 执行环境：定义了变量或函数有权访问的其他数据，在函数调用时确定
    `
  }
  arr.push(p17)
  let p18 = {
    title: '原生对象，宿主对象和内置对象的关系',
    desc: `
      1. 内置对象：在引擎初始化时就已经被创建好的对象<br/>
      2. 原生对象：除了包括内置对象外，还包括了引擎运行时动态创建的对象<br/>
      3. 宿主对象：运行环境基于某种机制注入到引擎中的一些对象,如window,Global等
      `
  }
  arr.push(p18)
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