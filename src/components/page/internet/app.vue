<template>
<div>
  <a-modal
      :title="titleName"
      v-model="visible"
      @ok="handleOk"
    >
      <div class="edit-box">
          <p>
            <span class="title">标题</span>
            <span class="text"><a-input v-model='titleInput' placeholder="请输入标题"/></span>
          </p>
          <p>
            <span class="title">编号</span>
            <span class="text"><a-input v-model='numberInput' placeholder="请输入编号"/></span>
          </p>
          <p>
            <span class="title">负责人</span>
            <span class="text"><a-input v-model='peopleInput' placeholder="请输入负责人"/></span>
          </p>
      </div>
    </a-modal>
  <a-button icon="plus" type="primary" style="margin-bottom:15px;" @click="addItem">添加</a-button>
    <a-row :gutter="15">
      <a-col :span="6" v-for="(item,i) in data" :key="item.id">
        <a-card :title="item.title" hoverable :extra="item.time" :bordered=true style="margin-bottom:15px">
          <p>应用编号：{{ item.number }}</p>
          <p>应用负责人：{{ item.people }}</p>
          <p>修改时间：{{ item.restTime }}</p>
          <template class="ant-card-actions" slot="actions">
            <a-icon type="edit" @click="edit(item)" />
            <a-icon type="delete" @click="showConfirm(i)" />
          </template>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Modal,Message } from 'ant-design-vue';
const { confirm } = Modal;
const { info } = Message;
export default {
  name: 'app',
  data(){
    return {
      data:null,
      titleInput:'',
      peopleInput:'',
      numberInput:'',
      visible:false,
      titleName:"",
      btnFlag:null
    }
  },
  mounted () {
    this.setBread(this.$router.currentRoute.meta.title);
    this.showData();
  },
  methods: {
    showData(){
      let dataArr = JSON.parse(localStorage.getItem('data'));
      console.log(dataArr);
      if(dataArr){
        this.data = dataArr
      }
    },
    handleOk(){
      if(this.titleInput === ''){
        info('请输入标题');
        return;
      }else if(this.numberInput === ''){
        info('请输入编号');
        return;
      }else if(this.peopleInput === ''){
        info('请输入负责人');
        return;
      }
      let list = {
        title:this.titleInput,
        time:'2019-04-11 00:00:00',
        number:this.numberInput,
        people:this.peopleInput,
        restTime:'2019-04-11 00:00:00'
      }
      if(this.data){
        list.id = this.data.length + 1;
      }else{
        list.id = 1;
      }
      if(this.btnFlag === 0){
        let localData = JSON.parse(localStorage.getItem('data'));
        if(localData){
          localData.push(list)
          localStorage.setItem('data',JSON.stringify(localData));
        }else{
          localStorage.setItem('data',JSON.stringify([list]));
        }
        this.showData();
      }else{
        console.log("我是编辑功能");
      }
      this.visible = false;
    },
    setBread(val){
      this.$store.commit('showBread',val)
    },
    addItem(){
      this.visible = true;
      this.titleName = "添加";
      this.btnFlag = 0;
      this.titleInput = '';
      this.numberInput = '';
      this.peopleInput = '';
    },
    edit(item){
      this.visible = true;
      this.titleName = "编辑";
      let { title, number, people } = item;
      this.titleInput = title;
      this.numberInput = number;
      this.peopleInput = people;
      this.btnFlag = 1;
    },
    showConfirm(i) {
      let _this = this;
      confirm({
        title: '您真的要删除吗？',
        iconType:'delete',
        onOk() {
          _this.data = _this.data.filter((item,index) => index !== i);
          localStorage.setItem('data',JSON.stringify(_this.data));
        },
        onCancel() {},
      });
    }
  }
}
</script>

<style scoped>
  .edit-box p{
    display: flex;
  }
  .edit-box p span.title{
    width:50px;
    line-height: 32px;
  }
  .edit-box p span.text{
    flex:1;
  }
</style>
