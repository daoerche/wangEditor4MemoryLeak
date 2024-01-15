<template>
    <div>
        <h1>Home</h1>
        <router-link to="/detail">wangEditor4 内存测试，存在泄漏</router-link>
        <br />
        <router-link to="/new-detail">wangEditor5 内存测试，正常回收</router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped>

</style>
