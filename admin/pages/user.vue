<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-10 16:19:32
 * @LastEditTime: 2021-03-17 15:15:19
 * @LastEditors: watasi
-->
<template>
  <page-view title="用户管理">
    <template slot="footer">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :span="8">
              <a-form-item label="用户名">
                <a-input v-model="queryParam.name" placeholder="用户昵称"/>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="用户状态">
                <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">正常用户</a-select-option>
                  <a-select-option value="2">禁用用户</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

            <template v-if="advanced">
              <a-col :span="8">
                <a-form-item label="注册时间">
                  <a-range-picker @change="onChange" />
                </a-form-item>
              </a-col>

              <a-col :span="8">
                <a-form-item label="是否会员">
                  <a-select v-model="queryParam.isVip" placeholder="请选择" default-value="0">
                    <a-select-option value="0">全部</a-select-option>
                    <a-select-option value="1">会员用户</a-select-option>
                    <a-select-option value="2">非会员用户</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col :span="8">
                <a-form-item label="是否认证">
                  <a-select v-model="queryParam.isAuth" placeholder="请选择" default-value="0">
                    <a-select-option value="0">全部</a-select-option>
                    <a-select-option value="1">认证用户</a-select-option>
                    <a-select-option value="2">未认证用户</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </template>

            <a-col :span="!advanced && 8 || 24">
              <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
                <a-button type="primary">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => queryParam = {name: '', status: '0', isVip: '0', isAuth: '0'}">重置</a-button>
                <a @click="advanced = !advanced" style="margin-left: 8px">
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'"/>
                </a>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </template>

    <a-card :bordered="false">
      <a-table
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :columns="columns"
        :data-source="data"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
        ref="table"
      >
        <span slot="serial" slot-scope="text, record, index">
          {{ index + 1 }}
        </span>

        <span slot="isVip" slot-scope="text, record">
          <a-tag v-if="record.isVip" color="green">会员</a-tag>
          <a v-else>-</a>
        </span>

        <span slot="isAuth" slot-scope="text, record">
          <a-tag v-if="record.isAuth" color="green">已认证</a-tag>
          <a v-else>-</a>
        </span>

        <template slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">禁用</a>
        </template>
      </a-table>
    </a-card>
    
  </page-view>
</template>

<script>
import { PageView } from '@/components'
export default {
  name: 'user',

  components: { PageView },

  data() {
    return {
      advanced: false,
      queryParam: {
        name: '',
        status: "0",
        isVip: "0",
        isAuth: "0"
      },
      loading: true,
      columns: [
        { title: '#', key: 'index', scopedSlots: { customRender: 'serial' } },
        { title: '账号', dataIndex: 'account' },
        { title: '昵称', dataIndex: 'nick' },
        { title: '是否会员', dataIndex: 'isVip', scopedSlots: { customRender: 'isVip' } },
        { title: '是否认证', dataIndex: 'isAuth', scopedSlots: { customRender: 'isAuth' } },
        { title: '注册时间', dataIndex: 'registerTime' },
        { title: '操作', key: 'action', scopedSlots: { customRender: 'action' } },
      ],
      data: [
        { account: '857477061@qq.com', nick: 'わたし', isVip: true, isAuth: true, registerTime: '2021-01-01' },
        { account: '384866809@qq.com', nick: '最世界', isVip: false, isAuth: true, registerTime: '2020-12-23' },
        { account: '675297787@qq.com', nick: '我最👍', isVip: true, isAuth: false, registerTime: '2020-12-21' },
        { account: '1101169015@qq.com', nick: '唏嘘追忆', isVip: false, isAuth: false, registerTime: '2020-11-11' },
      ],
      pagination: {
        total: 140,
        defaultPageSize: 10
      },
      selectedRowKeys: [],
    }
  },

  async created() {
    // const res = await this.$axios.get('/admin/user/info')
    // console.log(res)
    setTimeout(() => this.loading = false, 1000)
  },

  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },

    handleEdit(e) {
      console.log(e);
    },

    onSelectChange(e) {
      console.log(e);
      this.selectedRowKeys = e
    },

    handleTableChange(e) {
      console.log(e);
    }
  }
}
</script>

<style>

</style>
