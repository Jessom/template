<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-18 17:19:47
 * @LastEditTime: 2021-03-18 18:03:29
 * @LastEditors: watasi
-->
<template>
  <div class="container">
    <a-card :bordered="false" :body-style="{ padding: '16px 0' }">
      <div class="account-settings-info-main">
        <div class="account-settings-info-left">
          <a-menu
            :default-selected-keys="['1']"
            mode="inline"
          >
            <a-menu-item key="1">
              <span>基本设置</span>
            </a-menu-item>
            <a-menu-item key="2">
              <span>安全设置</span>
            </a-menu-item>
          </a-menu>
        </div>

        <div class="account-settings-info-right">
          <div class="account-settings-info-title">
            <span>基本设置</span>
          </div>
          <a-row :gutter="16">
            <a-col :span="16">
              <a-form layout="vertical">
                <a-form-item label="昵称">
                  <a-input placeholder="给自己起个名字" />
                </a-form-item>
                <a-form-item label="个人简介">
                  <a-textarea rows="4" placeholder="请输入个人简介！" />
                </a-form-item>
                <a-form-item label="电子邮件" :required="false">
                  <a-input placeholder="exp@admin.com"/>
                </a-form-item>

                <a-form-item>
                  <a-button type="primary">提交</a-button>
                </a-form-item>
              </a-form>
            </a-col>

            <a-col :span="8">
              <div class="ant-upload-preview">
                <a-icon type="cloud-upload-o" class="upload-icon" />
                <div class="mask">
                  <a-icon type="plus" />
                </div>
                <img :src="logo" />
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import { logo } from "@/pages/utils/config";
export default {
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="less">
.account-settings-info-main {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  .account-settings-info-left {
    border-right: 1px solid rgb(232, 232, 232);
    width: 224px;
  }

  .account-settings-info-right {
    -webkit-box-flex: 1;
    flex: 1 1 0%;
    padding: 8px 40px;

    .account-settings-info-title {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      margin-bottom: 12px;
    }
  }

  .ant-menu-inline {
    border-right: 0;
  }
}

.ant-upload-preview {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 180px;
  border-radius: 50%;
  box-shadow: 0 0 4px #ccc;

  .upload-icon {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 1.4rem;
    padding: 0.5rem;
    background: rgba(222, 221, 221, 0.7);
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .mask {
    opacity: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: opacity 0.4s;

    &:hover {
      opacity: 1;
    }

    i {
      font-size: 2rem;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -1rem;
      margin-top: -1rem;
      color: #d6d6d6;
    }
  }

  img,
  .mask {
    width: 100%;
    max-width: 180px;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
