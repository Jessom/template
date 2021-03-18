<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-08 15:50:54
 * @LastEditTime: 2021-03-18 13:20:44
 * @LastEditors: watasi
-->
<template>
  <a-config-provider :locale="locale">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider 
        width="250" 
        v-model="collapsed" 
        :trigger="null"
        collapsible>
        <div class="sider-menu-logo">
          <img :src="logo" :alt="title" class="logo">
          <h1 v-show="!collapsed">{{ title }}</h1>
        </div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="selected">
          <a-menu-item 
            v-for="item in menus" 
            :key="item.key" 
            v-if="!item.children.length">
            <nuxt-link :to="item.key">
              <a-icon :type="item.icon" />
              <span>{{ item.name }}</span>
            </nuxt-link>
          </a-menu-item>
          
          <a-sub-menu 
            v-for="item in menus" 
            :key="item.key" 
            v-if="item.children.length">
            <span slot="title">
              <a-icon :type="item.icon" />
              <span>{{ item.name }}</span>
            </span>
            <a-menu-item 
              v-for="it in item.children" 
              :key="it.key">
              <nuxt-link :to="item.key">{{ it.name }}</nuxt-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      
      <a-layout>
        <a-layout-header :class="{'t': collapsed}">
          <a-icon
            class="trigger icon"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <a-icon type="reload" class="icon" />

          <div class="pull-right header-right">
            <a-dropdown>
              <a class="header-index" @click="e => e.preventDefault()">
                <a-avatar size="small" icon="user" :src="logo" />
                管理员
              </a>
              <a-menu slot="overlay" style="width: 160px;">
                <a-menu-item>
                  <a-icon type="user" />
                  <span>个人中心</span>
                </a-menu-item>
                <a-menu-item>
                  <a-icon type="setting" />
                  <span>个人设置</span>
                </a-menu-item>
                <a-menu-item class="ant-dropdown-menu-item-divider" style="padding: 0;"></a-menu-item>
                <a-menu-item>
                  <a-icon type="logout" />
                  <span>退出登录</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>

            <a-dropdown>
              <a class="header-index" @click="e => e.preventDefault()">
                <a-icon type="global" style="font-size: 16px" />
              </a>
              <a-menu slot="overlay" style="width: 160px;">
                <a-menu-item>
                  <span role="img" aria-label="简体中文">🇨🇳</span>
                  <span>简体中文</span>
                </a-menu-item>
                <a-menu-item>
                  <span role="img" aria-label="繁体中文">🇭🇰</span>
                  <span>繁体中文</span>
                </a-menu-item>
                <a-menu-item>
                  <span role="img" aria-label="English">🇺🇸</span>
                  <span>English</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </a-layout-header>

        <a-layout-content :class="{'t': collapsed}">
          <Nuxt />

          <!-- <div class="copy-right">
            <a href="">watasi</a>提供技术支持
          </div> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { title, logo } from '@/pages/utils/config'
export default {
  data() {
    return {
      title,
      logo,
      collapsed: false,
      locale: zhCN,
      selected: [this.$route.path],
      menus: [
        { key: '/', icon: 'dashboard', name: '仪表盘', children: [] },
        { key: '/user', icon: 'user', name: '用户管理', children: [] },
        { key: '/order', icon: 'bank', name: '订单管理', children: [
          { key: '/order-get', icon: '', name: '提现管理' },
          { key: '/order-back', icon: '', name: '退款管理' },
        ] },
        { key: '/product', icon: 'experiment', name: '产品管理', children: [
          { key: '/product-activity', icon: '', name: '活动产品' },
          { key: '/product-cx', icon: '', name: '促销产品' },
        ] },
      ]
    };
  }
};
</script>

<style scoped lang="less">
.ant-layout-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: calc(100% - 250px);
  background-color: #fff;
  padding: 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  transition: all .3s;
  &.t {
    width: calc(100% - 80px);
  }
}
.header-right {
  .header-index {
    display: inline-block;
    height: 100%;
    padding: 0 12px;
    transition: all .2s;
    color: rgba(0,0,0,.65);
    cursor: pointer;
    &:hover {
      background-color: #f8f8f8;
    }
  }
}
.ant-layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
  .ant-menu {
    height: calc(100vh - 64px);
    overflow-y: scroll;
  }
}
.ant-layout-content {
  padding-top: 64px;
  padding-left: 250px;
  transition: all .2s;
  &.t {
    padding-left: 80px;
  }
}
.sider-menu-logo {
  padding: 16px;
  padding-left: 24px;
  height: 64px;
  overflow: hidden;
  .logo {
    @size: 32px;
    width: 32px;
    height: 32px;
  }
  h1 {
    // font-family: "webfont" !important;
    // font-style: normal;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 8px;
    font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
    font-weight: 600;
    vertical-align: middle;
  }
}
#components-layout-demo-custom-trigger .icon {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger {
  padding: 0 24px;
}

#components-layout-demo-custom-trigger .icon:hover {
  color: var(--theme);
}
.copy-right {
  text-align: center;
  margin: 40px 0 24px;
}
/* #components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
} */
</style>
