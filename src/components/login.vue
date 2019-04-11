<template>
  <div class="login">
    <h1>中国人保APP应用管理系统</h1>
    <div class="login-main">
      <p>
        <span style="background:#f66760"></span>
        <span style="background:#f5c243"></span>
        <span style="background:#6bc65f"></span>
      </p>
      <div class="login-box">
        <div class="components-input-demo-presuffix">
          <a-input placeholder="请输入用户名" v-model="userName" ref="userNameInput" size="large">
            <a-icon slot="prefix" type="user" />
            <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty" />
          </a-input>
        </div>
        <div class="components-input-demo-presuffix">
          <a-input placeholder="请输入密码" type="password" @keyup.enter="keyboard" v-model="passWord" ref="passWordInput" size="large">
            <a-icon slot="prefix" type="lock" />
            <a-icon v-if="passWord" slot="suffix" type="close-circle" @click="emitEmpty" />
          </a-input>
        </div>
        <a-button type="primary" class="login-btn" :block='true' size="large" @click="submitLogin">登录</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import {Input,Icon,Button,message} from 'ant-design-vue'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      passWord:''
    }
  },
  methods: {
    emitEmpty () {
      this.$refs.userNameInput.focus()
      this.$refs.passWordInput.focus()
      this.userName = ''
      this.passWord = ''
    },
    submitLogin(){
      if(this.userName === ''){
        message.info('请输入用户名');
        return;
      }else if(this.passWord === ''){
        message.info('请输入密码');
        return;
      }
      if(this.userName === 'admin' && this.passWord === '123456'){
        this.$router.push('/');
        localStorage.setItem('loginFlag',"1");
      }else{
        message.info('用户名或密码错误');
      }
    },
    keyboard(){
      this.submitLogin();
    }
  },
  components:{
    AInput:Input,
    AIcon:Icon,
    AButton:Button
  }
}
</script>

<style scoped>
  .login{
    background: url('../assets/img/bg.jpg');
    background-size: 100% 100%;
    position: absolute;
    height:100%;
    width:100%;
  }
  .login h1{
    color:#fff;
    text-align: center;
    padding-top:10%;
  }
  .login-main{
    width:500px;
    background: #fff;
    border-radius: 10px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 20px rgba(0,0,0,0.5)
  }
  .login-main p{
    height:50px;
    border-bottom:solid 1px #ccc;
    margin-bottom:0;
  }
  .login-main p span{
    width:24px;
    height:24px;
    display: inline-block;
    border-radius: 50%;
    margin-left:10px;
    margin-top:13px;
  }
  .login-box{
    padding:30px 20px;
  }
  .components-input-demo-presuffix{
    margin-bottom:20px;
  }
  .components-input-demo-presuffix .anticon-close-circle {
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
    font-size: 12px;
  }
  .components-input-demo-presuffix .anticon-close-circle:hover {
    color: #999;
  }
  .components-input-demo-presuffix .anticon-close-circle:active {
    color: #666;
  }
  .login-btn{
    margin: 0 auto;
    display: block;
  }
</style>
