<template>
  <div>
    <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
    </quill-editor>
    <el-button @click="outin" type='warning'>输出</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'custom-toolbar-example',
      content: '<h2>I am Example 3</h2>',
      editorOption: {}
    }
  },
  methods: {
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    },
    outin() {
      console.log(this.content)
    },
    customButtonClick() {
      alert(`You can custom the button and listen click event to do something...\n你可以定义一些自定义按钮做你想做的事，如上传图片至第三方存储...等等`)
    }
  }
}

</script>
<style>


</style>
