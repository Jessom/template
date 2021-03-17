<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-17 15:24:56
 * @LastEditTime: 2021-03-17 15:41:53
 * @LastEditors: watasi
-->
<template>
  <a-config-provider :locale="locale">
    <div class="user-layout">
      <div class="user-layout-header">
        <div class="header">
          <img class="logo" :src="logo" :alt="title">
          <span class="title">{{ title }}</span>
        </div>
        <div class="desc">分享，共创美好世界！</div>
      </div>

      <div class="user-layout-body">
        <Nuxt />
      </div>

      <div class="user-layout-footer">
        <span class="desc">
          <a href="http://www.watasi.cn">watasi</a>
          提供技术支持
        </span>
      </div>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { title, logo } from '@/pages/utils/config'
export default {
  data () {
    return {
      locale: zhCN,
      title,
      logo
    }
  }
}
</script>

<style lang="less">
.user-layout {
  width: 100%;
  min-height: 100vh;
  background: #f0f2f5 url(https://preview.pro.antdv.com/assets/background.a568162c.svg) no-repeat 50%;
  background-size: 100%;
  position: relative;
  padding: 40px;
  &-header {
    text-align: center;
    padding-top: 32px;
    .logo {
      @size: 44px;
      width: @size;
      height: @size;
      margin-right: 10px;
    }
    .title {
      font-size: 33px;
      color: rgba(0,0,0,.85);
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
      font-weight: 600;
      position: relative;
      top: 4px;
    }
  }
  .desc {
    font-size: 14px;
    color: rgba(0,0,0,.45);
    margin-top: 12px;
    margin-bottom: 40px;
  }

  &-footer {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    text-align: center;
    .desc {
      font-size: 14px;
      color: rgba(0,0,0,.45);
    }
  }
}  
</style>
