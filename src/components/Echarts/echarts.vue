<template>
  <div class='echarts'>
    <div ref="echarts_box" class="echarts_box"></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import echarts, { EChartOption } from 'echarts'
@Component({
  name: 'echarts',
  components: {

  }
})
export default class App extends Vue {
  public data() {
    return {}
  }
  private created() {
    console.log('creater')
  }
  private mounted() {
    const echartsInit = echarts.init(this['$refs'].echarts_box as HTMLDivElement)
    const option = {
      title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['2011年', '2012年']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2012年',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    }
    echartsInit.setOption(option as EChartOption<EChartOption.SeriesBar>)
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.echarts {
  height: 500px;
  .echarts_box {
    width: 100%;
    height: 100%;
  }
}
</style>
