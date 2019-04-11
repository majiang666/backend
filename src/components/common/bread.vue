<template>
    <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item><router-link to='/'>首页</router-link></a-breadcrumb-item>
        <a-breadcrumb-item>{{ showBread }}</a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
export default {
    name:'bread',
    computed: {
        showBread(){
            return this.$store.state.bread.breadName;
        }
    }
}
</script>

<style scoped>

</style>
