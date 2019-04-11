<template>
<div style="background-color: #ececec; padding: 20px 20px 5px 20px;">
    <a-row :gutter="15">
      <a-col :span="6">
        <a-card title="模块一" hoverable extra="2016-11-14" :bordered=false style="margin-bottom:15px">
          <p>应用编号：0001</p>
          <p>应用负责人：admin</p>
          <p>修改时间：2016-11-21 17:22:03</p>
          <template class="ant-card-actions" slot="actions">
            <a-icon type="edit" />
            <a-icon type="delete" />
          </template>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="模块一" hoverable extra="2016-11-14" :bordered=false style="margin-bottom:15px">
          <p>应用编号：0001</p>
          <p>应用负责人：admin</p>
          <p>修改时间：2016-11-21 17:22:03</p>
          <template class="ant-card-actions" slot="actions">
            <a-icon type="edit" />
            <a-icon type="delete" />
          </template>
        </a-card> 
      </a-col>
      <a-col :span="6">
        <a-card title="模块一" hoverable extra="2016-11-14" :bordered=false style="margin-bottom:15px">
          <p>应用编号：0001</p>
          <p>应用负责人：admin</p>
          <p>修改时间：2016-11-21 17:22:03</p>
          <template class="ant-card-actions" slot="actions">
            <a-icon type="edit" />
            <a-icon type="delete" />
          </template>
        </a-card>   
      </a-col>
      <a-col :span="6">
        <a-card title="模块一" hoverable extra="2016-11-14" :bordered=false style="margin-bottom:15px">
          <p>应用编号：0001</p>
          <p>应用负责人：admin</p>
          <p>修改时间：2016-11-21 17:22:03</p>
          <template class="ant-card-actions" slot="actions">
            <a-icon type="edit" />
            <a-icon type="delete" />
          </template>
        </a-card>   
      </a-col>
      <a-col :span="6">
        <a-card title="模块一" hoverable extra="2016-11-14" :bordered=false style="margin-bottom:15px">
          <p>应用编号：0001</p>
          <p>应用负责人：admin</p>
          <p>修改时间：2016-11-21 17:22:03</p>
          <template class="ant-card-actions" slot="actions">
            <a-icon type="edit" />
            <a-icon type="delete" />
          </template>
        </a-card>   
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.setBread(this.$router.currentRoute.meta.title);
  },
  methods: {
    setBread(val){
      this.$store.commit('showBread',val)
    }
  }
}
</script>

<style scoped>

</style>
