<template>
    <div>
        <h1>wangEditor5 Test</h1>
        <router-link to="/">Back</router-link>
        <div id="editor—wrapper" style="border: 1px solid #ccc;">
            <div id="toolbar-container" style="border-bottom: 1px solid #ccc"></div>
            <div id="editor-container" style="height: 500px; overflow-y: hidden;"></div>
        </div>
    </div>
</template>

<script>
import { createEditor, createToolbar } from '@wangeditor/editor';
export default {
    name: 'NewDetail',
    mounted() {
        const editorConfig = {
            placeholder: 'Type here...',
            onChange(editor) {
                const html = editor.getHtml()
                console.log('editor content', html)
                // 也可以同步到 <textarea>
            }
        }

        const editor = createEditor({
            selector: '#editor-container',
            html: '<p><br></p>',
            config: editorConfig,
            mode: 'default', // or 'simple'
        })

        const toolbarConfig = {}

        const toolbar = createToolbar({
            editor,
            selector: '#toolbar-container',
            config: toolbarConfig,
            mode: 'default', // or 'simple'
        })

        this.editor = editor;
        this.toolbar = toolbar;
    },
    beforeDestroy() {
        this.editor.destroy();
        this.editor = null;
        this.toolbar.destroy();
        this.toolbar = null;
    }
};
</script>

<style>
@import "~@wangeditor/editor/dist/css/style.css";
</style>
