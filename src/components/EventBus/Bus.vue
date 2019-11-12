<template>
  <div class='Bus'>
    <el-button type="primary" @click="getC_F">{{ BusText }}</el-button>
    <bus-c/>
    <bus-f/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import BusC from './BusC.vue'
import BusF from './BusF.vue'
@Component({
  name: 'Bus',
  components: {
    BusC,
    BusF
  }
})
export default class App extends Vue {
  public data() {
    return {
      BusText: '还没有传值'
    }
  }
  public getC_F() {
    this['$bus'].$emit('getC_F', '所有的子组件收到了')
  }
  public getC_callback() {

  }
  public created() {
    console.log('creater')
  }
  private mounted() {
    console.log('mpunted')
    this['$bus'].$on('getf', (parms: any) => {
      this['BusText'] = parms
      console.log(parms)
    })
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
