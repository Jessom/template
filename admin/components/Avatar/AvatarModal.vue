<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-19 10:21:11
 * @LastEditTime: 2021-03-19 11:17:53
 * @LastEditors: watasi
-->
<template>
  <a-modal
    :title="title"
    :visible="visible"
    :maskClosable="false"
    :confirmLoading="confirmLoading"
    :width="800"
    :footer="null"
    @cancel="cancelHandel">

    <a-row>
      <a-col :span="12" :style="{height: '350px'}">
        <div class="cropper-wrap">
          <img :src="src" id="cropper" v-show="src">
        </div>
      </a-col>

      <a-col :span="12" :style="{height: '350px'}">
        <div class="avatar-upload-preview">
          <div class="avatar-preview" :class="{'radius': radius}"></div>
        </div>
      </a-col>
    </a-row>

    <br>

    <a-row>
      <a-col :span="2">
        <a-upload name="file" :beforeUpload="beforeUpload" :showUploadList="false">
          <a-button icon="upload">选择图片</a-button>
        </a-upload>
      </a-col>

      <a-col :span="1" :offset="2">
        <a-button icon="plus" @click="changeScale(0.1)"/>
      </a-col>

      <a-col :span="1" :offset="1">
        <a-button icon="minus" @click="changeScale(-0.1)"/>
      </a-col>

      <a-col :span="1" :offset="1">
        <a-button icon="undo" @click="changeRotate(45)"/>
      </a-col>

      <a-col :span="1" :offset="1">
        <a-button icon="redo" @click="changeRotate(-45)"/>
      </a-col>

      <a-col :span="2" :offset="6">
        <a-button type="primary" @click="finish()">保存</a-button>
      </a-col>
    </a-row>

  </a-modal>
</template>

<script>
export default {
  name: 'AvatarModal',

  data () {
    return {
      id: null,
      visible: false,
      confirmLoading: false,
      src: '',
      cropper: null, // 裁切对象
    }
  },

  props: {
    title: {
      type: String,
      default: '修改头像'
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    radius: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'base64',  // 可取值blob
    },
    format: {
      type: String,
      default: 'jpeg',  // 可取值png
    },
    canvas: {
      type: Object,
			default: () => {
				return {
					width: 960
				}
			}
    },
    filter: {
			type: Number,
			default: 0.8
		},
  },

  methods: {
    edit (id) {
      this.visible = true
      this.id = id
    },

    close () {
      this.visible = false
      this.id = null
    },

    beforeUpload (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.src = reader.result

        this.destroyCropper()
        
        this.$nextTick(function() {
          this.initCropper()
        })
      }
      // 转化为blob
      // reader.readAsArrayBuffer(file)

      return false
    },

    destroyCropper() {
      if(this.cropper) {
        this.cropper.destroy()
        this.cropper = null
        this.src = null
      }
    },

    initCropper() {
      let image = null
      image = document.querySelector('#cropper')
      
      let options = _.merge({
        aspectRatio: 1 / 1,
        viewMode: 1,
				dragMode: 'none',
        preview: '.avatar-preview'
      }, this.options)
      
      this.cropper = new Cropper(image, options)
      console.log(this.cropper);
    },

    cancelHandel () {
      this.close()
    },

    changeScale(e) {
      this.cropper.zoom(e)
    },

    changeRotate(e) {
      this.cropper.rotate(e)
    },

    finish() {
      if(!this.cropper) {
        this.$message.error('请选择需要裁切的图片');
      }
      
      const canvas = this.cropper.getCroppedCanvas(this.canvas)
      if(this.type == 'base64') {
        let base64 = canvas.toDataURL(`image/${this.format}`, this.filter)
        this.$emit('ok', base64)

        this.close()
        this.destroyCropper()
      } else if(this.type == 'blob') {
        canvas.toBlob(blob => {
					this.$emit('ok', blob)

          this.close()
          this.destroyCropper()
				})
      }
    }
  }
}
</script>

<style lang="less">
.cropper-wrap {
  border: 1px solid rgba(#000, 0.2);
  width: 100%;
  height: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");
}
#cropper {
  display: block;
  width: 100%;
  height: 100%;
}
.avatar-upload-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .avatar-preview {
    @size: 180px;
    width: @size;
    height: @size;
    border: 1px solid rgba(#000, 0.2);
    overflow: hidden;
    &.radius {
      border-radius: 50%;
    }
  }
}
</style>
