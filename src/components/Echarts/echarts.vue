<template>
  <div class='echarts'>
    <div ref="echarts_box" class="echarts_box"></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import echarts from 'echarts'
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
    console.log('mpunted')
    console.log(this)
    // const echarts_init = echarts.init(this['$refs'].echarts_box)

  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
