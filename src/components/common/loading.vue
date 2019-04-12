<template>
  <div class="loading" v-show="loadingFlag">
    <a-spin tip="Loading..." :spinning='loadingFlag' class="loading-item">
    </a-spin>
  </div>
</template>

<script>
export default {
    name:'loading',
    props:{
      loadingFlag:Boolean
    }
}
</script>

<style>
  .loading{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 99;
  }
  .loading-item{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
</style>
