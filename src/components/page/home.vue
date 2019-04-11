<template>
  <div class="home">
    <a-layout id="components-layout-demo-top-side-2">
      <Top />
      <a-layout>
        <Left />
        <a-layout style="padding: 0 24px 24px">
          <Bread />
          <Index />
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
const Top = () => import('@/components/page/top');
const Left = () => import('@/components/page/left');
const Index = () => import('@/components/page/index');
const Bread = () => import('@/components/common/bread');
export default {
  name: 'home',
  data () {
    return {
      collapsed: false
    }
  },
  components:{
    Top,
    Left,
    Index,
    Bread
  }
}
</script>

<style scoped>
  #components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
