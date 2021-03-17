<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-08 15:50:54
 * @LastEditTime: 2021-03-17 17:15:35
 * @LastEditors: watasi
-->
<template>
  <div class="container">
    <a-row :gutter="24">
      <a-col :span="6">
        <chart-card title="总销售额">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>

          <template slot="total">
            <span class="ant-money">{{ '1265601' | NumberFormat }}</span>
          </template>

          <div>
            <trend flag="up" style="margin-right: 9px;">
              <span slot="term">周同比</span>
              12%
            </trend>
            <trend flag="down">
              <span slot="term">日同比</span>
              11%
            </trend>
          </div>
          
          <template slot="footer">日均销售额<span class="ant-money">123.45</span></template>
        </chart-card>
      </a-col>

      <a-col :span="6">
        <chart-card title="访问量" :total="8846 | NumberFormat">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>

          <div>
            <mini-area ref="miniArea" />
          </div>

          <template slot="footer">日访问量<span> {{ '1234' | NumberFormat }}</span></template>
        </chart-card>
      </a-col>

      <a-col :span="6">
        <chart-card title="支付笔数" :total="6560 | NumberFormat">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-bar ref="miniBar" />
          </div>
          <template slot="footer">转化率 <span>60%</span></template>
        </chart-card>
      </a-col>

      <a-col :span="6">
        <chart-card title="运营活动效果" total="78%">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-line ref="miniLine" />
          </div>
          <template slot="footer">
            <trend flag="down" style="margin-right: 9px;">
              <span slot="term">同周比</span>
              12%
            </trend>
            <trend flag="up">
              <span slot="term">日环比</span>
              80%
            </trend>
          </template>
        </chart-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// import MiniArea from '../components/Charts/MiniArea.vue'
// import MiniBar from '../components/Charts/MiniBar.vue'
// import MiniLine from '../components/Charts/MiniLine.vue'
import { MiniArea, MiniBar, MiniLine, ChartCard, Trend } from '../components'
export default {
  components: { MiniArea, MiniBar, MiniLine, ChartCard, Trend },
  name: 'index',

  data() {
    return {
      loading: true
    }
  },

  mounted() {
    // this.$refs.miniArea.init()
    this.$refs.miniArea.setData({
      xAxis: [{
        data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
      }]
    })

    this.$refs.miniBar.setData({
      xAxis: [{
        data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
      }]
    })
    this.$refs.miniLine.setData({
      xAxis: [{
        data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
      }]
    })
  },

  async created() {
    // const res = await this.$axios.get('/admin/user/info')
    // console.log(res)
  }
}
</script>

<style lang="less">
</style>
