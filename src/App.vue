<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <el-button type="primary" @click="getEvent">{{ bunText }}</el-button>
    <el-button type="primary" @click="getEcharts">{{ EchartsName }}</el-button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import { getInfo } from './api/infoPage/index'
@Component({
  components: {
    HelloWorld
  },
})
export default class App extends Vue {
  public bunText: string = 'It is EventBus'
  public EchartsName: string = '柱状图'
  public getEvent() {
    // tslint 默认不允许访问对象的隐式声明
    // https://palantir.github.io/tslint/rules/member-access/
    console.log(this)
    this['$bus'].$emit('getf', '可以传值了')
    this['$router'].replace({
      path: 'EventBus'
    })
  }
  public getEcharts() {
    this['$router'].replace({
      path: 'echarts'
    })
  }
  public async getInfo() {
    const res = await getInfo({
      url: '/admin',
      data: {
        name: 'zs'
      }
    })
    console.log(res)
  }
  private created() {
    console.log('creater')
    this.getInfo()
  }
  private mounted() {
    console.log('mpunted')
    this['$bus'].$on('getT', (parms: any) => {
      this['bunText'] = parms
    })
  }
}
</script>

<style scoped lang="less">
#app {
  .size(100px, 100px);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
