<template>
  <div>
    <a-input-search 
    class="input-search" 
    placeholder="请输入搜索内容" 
    @search="onSearch" 
    enterButton="搜索" />

    <a-table :columns="columns" :dataSource="data" :pagination="pageOptions">
      
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title:'省',
    dataIndex:"sheng"
  },
  {
    title:'市',
    dataIndex:"shi"
  },
  {
    title:'手机品牌',
    dataIndex:"pinpai"
  },
  {
    title:'机型',
    dataIndex:"jixing"
  },
  {
    title:'操作系统',
    dataIndex:"xitong"
  },
  {
    title:'装机量',
    dataIndex:"num"
  }
];

const data = [
  {
    key: '1',
    sheng: '内蒙古',
    shi: '包头',
    pinpai: 'lenovo',
    jixing: 'LNV-Lenovo A370e',
    xitong:'android',
    num:'2'
  },
  {
    key: '2',
    sheng: '内蒙古',
    shi: '包头',
    pinpai: 'lenovo',
    jixing: 'LNV-Lenovo A370e',
    xitong:'android',
    num:'2'
  },
  {
    key: '3',
    sheng: '内蒙古',
    shi: '包头',
    pinpai: 'lenovo',
    jixing: 'LNV-Lenovo A370e',
    xitong:'android',
    num:'2'
  },
  {
    key: '4',
    sheng: '内蒙古',
    shi: '包头',
    pinpai: 'lenovo',
    jixing: 'LNV-Lenovo A370e',
    xitong:'android',
    num:'2'
  },
  {
    key: '5',
    sheng: '内蒙古',
    shi: '包头',
    pinpai: 'lenovo',
    jixing: 'LNV-Lenovo A370e',
    xitong:'android',
    num:'2'
  }
];
export default {
  name: 'amount',
  mounted () {
    this.setBread(this.$router.currentRoute.meta.title);
  },
  methods: {
    onSearch (value) {
      console.log(value)
    },
    setBread(val){
      this.$store.commit('showBread',val)
    }
  },
  data() {
    return {
      data,
      columns,
      pageOptions:{
        defaultPageSize:2,
        total:5
      }
    }
  }
}
</script>

<style scoped>
  .input-search{
    width:300px;
    margin-bottom:20px;
  }
</style>
