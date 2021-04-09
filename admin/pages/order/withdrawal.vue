<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-04-09 17:08:02
 * @LastEditTime: 2021-04-09 18:02:42
 * @LastEditors: watasi
-->
<template>
  <page-view title="提现管理" footerMatinTop="0">
    <detail-list slot="body" size="small" :col="2" class="detail-layout">
      <detail-list-item term="创建人">曲丽丽</detail-list-item>
      <detail-list-item term="订购产品">XX服务</detail-list-item>
      <detail-list-item term="创建时间">2018-08-07</detail-list-item>
      <detail-list-item term="关联单据"><a>12421</a></detail-list-item>
      <detail-list-item term="生效日期">2018-08-07 ~ 2018-12-11</detail-list-item>
      <detail-list-item term="备注">请于两个工作日内确认</detail-list-item>
    </detail-list>

    <template slot="action">
      <a-button-group style="margin-right: 4px;">
        <a-button>操作</a-button>
        <a-button>操作</a-button>
        <a-button><a-icon type="ellipsis"/></a-button>
      </a-button-group>
      <a-button type="primary" >主操作</a-button>
    </template>

    <template slot="footer" class="o-h-f">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="待处理"></a-tab-pane>
        <a-tab-pane key="2" tab="已打款"></a-tab-pane>
        <a-tab-pane key="3" tab="已驳回"></a-tab-pane>
      </a-tabs>
    </template>
  </page-view>
</template>

<script>
import DetailList from '@/components/DescriptionList/DescriptionList.vue'
const DetailListItem = DetailList.Item
export default {
  components: { DetailList, DetailListItem },

  data () {
    return {}
  }
}
</script>

<style lang="less">
/deep/ .o-h-f {
  margin-top: 0;
}  
</style>
