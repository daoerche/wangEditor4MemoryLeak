<template>
    <div>
        <h1>wangEditor4 Test</h1>
        <router-link to="/">Back</router-link>
        <div id="editor"></div>
    </div>
</template>

<script>
import wangEditor from 'wangeditor';

export default {
    name: 'Detail',
    mounted() {
        this.editor = new wangEditor('#editor');
        this.editor.config.menus = ['image'];
        this.editor.create();
    },
    beforeDestroy() {
        this.editor.destroy();
        this.editor = null;
    }
}
</script>

<style scoped>

</style>
