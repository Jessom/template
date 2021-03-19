<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-19 13:53:06
 * @LastEditTime: 2021-03-19 14:39:05
 * @LastEditors: watasi
-->
<template>
  <div id="tinymce" class="tinymce"></div>
</template>

<script>
export default {
  name: 'Tinymce',

  data () {
    return {}
  },

  mounted() {
    tinymce.init({
      selector: '#tinymce', //容器，可使用css选择器
      language_url:'/js/tinymce-zh_CN.js', //调用放在langs文件夹内的语言包
      language:'zh_CN', //调用放在langs文件夹内的语言包
      // toolbar: false, //隐藏工具栏
      // menubar: false, //隐藏菜单栏
      // inline: true, //开启内联模式
      plugins: [ 'quickbars','link','table','image' ], //选择需加载的插件
      toolbar: 'undo redo | forecolor backcolor bold italic underline strikethrough link image | alignleft aligncenter alignright alignjustify outdent indent | blockquote subscript superscript | bullist numlist',
      images_upload_handler: function(blobInfo, succFun, failFun) {
        console.log(blobInfo);
        // this.uploadImg(blobInfo.base64())
					// .then(res => {
					// 	console.log(res)
					// 	succFun(this.$tools.getImageUrl(res))
					// })
      }
    });
  }
}
</script>

<style lang="less">
.tinymce {
  width: 100%;
  height: 100%;
  min-height: 300px;
}  
</style>
