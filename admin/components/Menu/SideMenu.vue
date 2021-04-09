<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-04-08 18:00:48
 * @LastEditTime: 2021-04-09 11:29:34
 * @LastEditors: watasi
-->
<template>
  <a-layout-sider
    :class="['sider', $store.getters['app/isMobile'] ? null : 'shadow', theme ]"
    class="ant-fixed-sidemenu"
    width="256px"
    :collapsible="collapsible"
    v-model="collapsed"
    :trigger="null">
    <logo />
    <s-menu
      :collapsed="collapsed"
      :menu="menus"
      :theme="theme"
      :mode="mode"
      @select="onSelect"
      style="padding: 16px 0px;"></s-menu>
  </a-layout-sider>

</template>

<script>
import Logo from './Logo'
import SMenu from './index'
export default {
  name: 'SideMenu',
  components: {
    SMenu,
    Logo
  },
  props: {
    mode: {
      type: String,
      required: false,
      default: 'inline'
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menus: {
      type: Array,
      required: true
    }
  },
  methods: {
    onSelect (obj) {
      this.$emit('menuSelect', obj)
    }
  }
}
</script>

<style lang="less">

</style>
