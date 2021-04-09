<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-04-09 10:19:31
 * @LastEditTime: 2021-04-09 10:25:12
 * @LastEditors: watasi
-->
<template>
  <div class="logo">
    <router-link :to="{name:'dashboard'}">
      <img class="logo-img" :src="logo" :alt="title" width="32">
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
import { title, logo } from "@/pages/utils/config";
export default {
  name: 'Logo',

  data() {
    return {
      logo
    }
  },

  props: {
    title: {
      type: String,
      default: title,
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>

<style lang="less">
.logo {
  position: relative;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  background: #002140;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  .logo-img {
    display: inline-block;
    vertical-align: middle;
  }
  h1 {
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 12px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
