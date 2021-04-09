<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-09 09:23:37
 * @LastEditTime: 2021-04-09 18:01:26
 * @LastEditors: watasi
-->
<template>
  <div class="page-view">

    <div class="page-top" :class="{'page-has-footer': $slots.footer}">
      <!-- 面包屑 -->
      <a-breadcrumb v-show="breadcrumb">
        <a-breadcrumb-item>
          <nuxt-link to="/">主页</nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>仪表盘</a-breadcrumb-item>
      </a-breadcrumb>

      <!-- header -->
      <div class="page-header clearfix">
        <span class="page-header-title">{{ title }}</span>

        <span class="page-header-extra">
          <slot name="action"></slot>
        </span>
      </div>

      <!-- body -->
      <div class="page-body" v-if="$slots.body">
        <slot name="body"></slot>
      </div>

      <!-- footer -->
      <div class="page-footer" v-if="$slots.footer" :style="{'margin-top': `${footerMatinTop}px`}">
        <slot name="footer"></slot>
      </div>
    </div>

    <!-- 主内容 -->
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-view',

  data () {
    return {}
  },

  props: {
    breadcrumb: {
      type: Boolean,
      default: false
    },

    title: {
      type: String
    },

    footerMatinTop: {
      type: [Number, String],
      default: 16
    }
  },
  
  created() {
    // console.log(this.$slots)
  }
}
</script>

<style lang="less" scoped>
.page-view {
  .page-top {
    padding: 16px 24px;
    padding-top: 12px;
    background-color: #fff;
    &.page-has-footer {
      padding-bottom: 0;
      /deep/.ant-tabs-bar {
        margin-bottom: 0;
      }
    }
  }
}
.page-header {
  width: 100%;
  overflow: hidden;
  margin-top: 8px;
  .page-header-title {
    display: block;
    float: left;
    margin-bottom: 0;
    padding-right: 12px;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
  }
  .page-header-extra {
    float: right;
    button.ant-btn {
      border-radius: 0 !important;
    }
  }
}
.page-body {
  margin-top: 12px;
}
.page-footer {
  // margin-top: 16px;
  .ant-tabs-bar.ant-tabs-top-bar {
    margin-bottom: 0;
  }
  .ant-tabs-content {
    display: none !important;
  }
}
.page-content {
  padding: 24px;
}
.ant-tabs-bar { border-bottom-color: transparent; }
</style>
