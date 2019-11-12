<template>
  <div class='busf'>busf</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'busf',
  components: {

  }
})
export default class App extends Vue {
  private created() {
    console.log('creater')
  }
  private mounted() {
    console.log('mpunted')
    this['$bus'].$on('getC_F', (parms: string) => {
      this['$bus'].$emit('getT', '子组件回传')
    })
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
