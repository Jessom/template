<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-08 15:50:54
 * @LastEditTime: 2021-04-09 17:38:47
 * @LastEditors: watasi
-->
<template>
  <a-config-provider :locale="locale">
    <a-layout id="components-layout-demo-custom-trigger">

      <a-drawer
        v-if="isMobile"
        placement="left"
        :closable="false"
        :visible="collapsed"
        @close="drawerClose"
      >
        <side-menu
          mode="inline"
          :menus="menus"
          :collapsed="false"
          :collapsible="true"
        ></side-menu>
      </a-drawer>

      <side-menu
        v-if="!isMobile"
        mode="inline"
        :menus="menus"
        :collapsed="collapsed"
        :collapsible="true"
        @menuSelect="menuSelect"
      ></side-menu>

      <a-layout :style="{ paddingLeft: contentPaddingLeft, minHeight: '100vh' }">
        <a-layout-header :class="{ t: collapsed, 'w': isMobile }">
          <a-icon
            class="trigger icon"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="$store.dispatch('app/ToggleCollapsed', !collapsed)"
          />
          <a-icon type="reload" class="icon" />

          <div class="pull-right header-right">
            <a-dropdown>
              <a class="header-index" @click="(e) => e.preventDefault()">
                <a-avatar size="small" icon="user" :src="logo" />
                管理员
              </a>
              <a-menu slot="overlay" style="width: 160px">
                <a-menu-item>
                  <nuxt-link to="/mine/account">
                    <a-icon type="user" />
                    <span>个人中心</span>
                  </nuxt-link>
                </a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/mine/setting">
                    <a-icon type="setting" />
                    <span>个人设置</span>
                  </nuxt-link>
                </a-menu-item>
                <a-menu-item
                  class="ant-dropdown-menu-item-divider"
                  style="padding: 0"
                ></a-menu-item>
                <a-menu-item>
                  <nuxt-link to="/mine/login">
                    <a-icon type="logout" />
                    <span>退出登录</span>
                  </nuxt-link>
                </a-menu-item>
              </a-menu>
            </a-dropdown>

            <a-dropdown>
              <a class="header-index" @click="(e) => e.preventDefault()">
                <a-icon type="global" style="font-size: 16px" />
              </a>
              <a-menu slot="overlay" style="width: 160px">
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

        <a-layout-content>
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
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { logo } from "@/pages/utils/config";
import SideMenu from "@/components/Menu/SideMenu";
import { mapGetters, mapState } from 'vuex'
export default {
  components: { SideMenu },
  data() {
    return {
      logo,
      locale: zhCN,
      menus: [
        { path: "/", meta: { title: "仪表盘", icon: "dashboard" }, name: "/" },
        { path: "/user", meta: { title: "用户管理", icon: "user" }, name: "user" },
        {
          path: "/order",
          meta: {
            icon: "bank",
            title: "订单管理"
          },
          name: "order",
          children: [
            { path: "/order/withdrawal", meta: { title: "提现管理", icon: "" }, name: "withdrawal" },
            { path: "/order-back", meta: { title: "退款管理", icon: "" }, name: "orderBack" },
          ],
        },
        {
          path: "/product",
          meta: {
            icon: "experiment",
            title: "产品管理"
          },
          name: "product",
          children: [
            { path: "/product-activity", meta: { title: "活动产品", icon: "" }, name: "productActivity" },
            { path: "/product-cx", meta: { title: "促销产品", icon: "" }, name: "productCx" },
          ],
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      isMobile: 'app/isMobile',
      isDesktop: 'app/isDesktop',
      isTablet: 'app/isTablet'
    }),
    ...mapState({
      collapsed: state => state.app.collapsed
    }),
    contentPaddingLeft () {
      if (this.isMobile) {
        return '0'
      }
      if (!this.collapsed) {
        return '256px'
      }
      return '80px'
    }
  },

  mounted() {
    console.log(this);
  },

  methods: {
    drawerClose () {
      this.$stroe.dispatch('ToggleCollapsed', false)
    },

    menuSelect(e) {
      console.log(e);
    }
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
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  transition: all 0.3s;
  &.t {
    width: calc(100% - 80px);
  }
  &.w {
    width: 100% !important;
  }
}
.header-right {
  .header-index {
    display: inline-block;
    height: 100%;
    padding: 0 12px;
    transition: all 0.2s;
    color: rgba(0, 0, 0, 0.65);
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
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  .ant-menu {
    height: calc(100vh - 64px);
    overflow-y: scroll;
  }
}
.ant-layout-content {
  padding-top: 64px;
  // padding-left: 250px;
  transition: all 0.2s;
  &.t {
    padding-left: 80px;
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
