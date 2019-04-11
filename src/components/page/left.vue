<template>
<a-affix :offsetTop="this.top" :offsetBottom="this.bottom">
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :defaultSelectedKeys="['0']"
      :defaultOpenKeys="['sub1']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu :key="'sub'+(index + 1)" v-for="(item,index) in meunList">
        <span slot="title"><a-icon type="user" />{{ item.title }}</span>
        <a-menu-item :key="nav.id" v-for="(nav,i) in item.child"><router-link :to='nav.path'>{{ nav.name }}</router-link></a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</a-affix>
</template>

<script>
export default {
  name: 'left',
  data(){
    return{
      top:64,
      bottom:0,
      meunList:[
        {
          title:'移动互联',
          id:'0',
          child:[
            {
              name:'应用管理',
              path:'/internet/app',
              id:'001'
            },
            {
              name:'装机量统计',
              path:'/internet/amount',
              id:'002'
            },
            {
              name:'菜单管理',
              path:'/internet/carte',
              id:'003'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
