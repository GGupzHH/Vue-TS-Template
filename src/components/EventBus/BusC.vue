<template>
  <div class='busc'>
    {{ busc }}
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'busc'
})
export default class App extends Vue {
  public busc: string = 'busc'
  private created() {
    console.log('creater')
  }
  private mounted() {
    console.log('mpunted')
    this['$bus'].$on('getC_F', (parms: any) => {
      this['busc'] = parms
    })
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
