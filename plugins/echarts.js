import Vue from 'vue'
import ECharts from 'echarts/lib/echarts'
// 柱状图
import 'echarts/lib/chart/bar'
// 折线图
import 'echarts/lib/chart/line'
// 提示
import 'echarts/lib/component/tooltip'
// 标题
import 'echarts/lib/component/title'
// legend
import 'echarts/lib/component/legend'
// lengend scroll
import 'echarts/lib/component/legendScroll'

Vue.prototype.$echarts = ECharts
