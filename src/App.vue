<template>
  <div id="app">
    <Loading :loadingFlag='loadingFlag' />
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
const Loading = () => import('@/components/common/loading');
export default {
  name: 'app',
  data(){
    return {
      loadingFlag:false
    }
  },
  components: {
    Loading
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
</style>
