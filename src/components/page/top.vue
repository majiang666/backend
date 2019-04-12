<template>
<a-affix :offsetTop="this.top">
    <a-layout-header class="header">
      <div class="logo">后台管理系统</div>
      <div class="top-info">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
            <a-avatar class="top-user" size="small" icon="user" />
            admin <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;" @click="info">用户信息</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;" @click="exit">退出</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
</a-affix>
</template>

<script>
import { Modal } from 'ant-design-vue';
export default {
  name: 'top',
  data() {
    return {
      top: 0
    }
  },
  methods: {
    info() {
      const { info } = Modal;
      info({
        title: '用户信息',
        iconType:'user',
        content: (
          <div>
            <p>用户名：admin</p>
            <p>手机号：138****8888</p>
            <p>邮箱：1@baidu.com</p> 
          </div>
        ),
        centered:true,
        onOk() {},
      });
    },
    exit(){
      this.$router.push('/login');
      localStorage.removeItem('loginFlag');
    }
  }
}
</script>

<style scoped>
  .logo{
    color:#fff;
    font-size:22px;
    float:left;
  }
  .top-info{
    float:right;
  }
  .top-user{
    margin-right:5px;
  }
</style>
