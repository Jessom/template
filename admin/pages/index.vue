<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-08 15:50:54
 * @LastEditTime: 2021-03-18 17:43:35
 * @LastEditors: watasi
-->
<template>
  <div class="container">
    <a-row :gutter="24">
      <a-col :span="6">
        <chart-card :loading="loading" title="总销售额">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>

          <template slot="total">
            <span class="ant-money">{{ '12651.21' | formatMoney }}</span>
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
          
          <template slot="footer">日均销售额<span class="ant-money">{{ 123.45 | formatMoney }}</span></template>
        </chart-card>
      </a-col>

      <a-col :span="6">
        <chart-card :loading="loading" title="访问量" :total="8846 | formatMoney">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>

          <div>
            <!-- <mini-area :data="line" /> -->
            <mini-line :data="line" :opacity="1" />
          </div>

          <template slot="footer">日访问量<span> {{ '1234' | formatMoney }}</span></template>
        </chart-card>
      </a-col>

      <a-col :span="6">
        <chart-card :loading="loading" title="支付笔数" :total="6560 | formatMoney">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-bar :data="line" />
          </div>
          <template slot="footer">转化率 <span>60%</span></template>
        </chart-card>
      </a-col>

      <a-col :span="6">
        <chart-card :loading="loading" title="运营活动效果" total="78%">
          <a-tooltip :title="time.time | formatTime" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-line :data="line" />
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

    <a-card :loading="loading" class="m-t-24" :bordered="false" :body-style="{padding: '0'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrapper" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>今日</a>
              <a>本周</a>
              <a>本月</a>
              <a>本年</a>
            </div>
            <a-range-picker :style="{width: '256px'}" />
          </div>

          <a-tab-pane loading="true" tab="销售额" key="1">
            <a-row>
              <a-col :span="16">
                <bar :data="line" />
              </a-col>

              <a-col :span="8">
                <rank-list title="门店销售排行榜" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>

          <a-tab-pane tab="访问量" key="2" forceRender>
            <a-row>
              <a-col :span="16">
                <line-chart :data="line" :opacity="0.3" />
              </a-col>

              <a-col :span="8">
                <rank-list title="门店销售排行榜" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>

          <a-tab-pane tab="浏览量" key="3" forceRender>
            <a-row>
              <a-col :span="16">
                <pie :data="pie" />
              </a-col>

              <a-col :span="8">
                <rank-list title="门店销售排行榜" :list="rankList" />
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
  </div>
</template>

<script>
import { MiniArea, MiniBar, MiniLine, Bar, Line, Pie, ChartCard, RankList, Trend } from '../components'
export default {
  components: { MiniArea, MiniBar, MiniLine, Bar, 'line-chart': Line, Pie, ChartCard, RankList, Trend },
  name: 'index',

  data() {
    return {
      loading: true,
      time: {
        time: 1616057162556
      },
      x: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      line: [
        { x: '一月', y: 7884 },
        { x: '二月', y: 9006 },
        { x: '三月', y: 9453 },
        { x: '四月', y: 12385 },
        { x: '五月', y: 10681 },
        { x: '六月', y: 10911 },
        { x: '七月', y: 15317 },
        { x: '八月', y: 13235 },
        { x: '九月', y: 14514 },
        { x: '十月', y: 15759 },
        { x: '十一月', y: 20409 },
        { x: '十二月', y: 20486 },
      ],
      pie: [
        {y: 1048, x: '搜索引擎'},
        {y: 735, x: '直接访问'},
        {y: 580, x: '邮件营销'},
        {y: 484, x: '联盟广告'},
        {y: 300, x: '视频广告'}
      ],
      rankList: [
        { name: '新区店', total: 13564.23 },
        { name: '新区店', total: 13564.23 },
        { name: '新区店', total: 13564.23 },
        { name: '新区店', total: 13564.23 },
        { name: '新区店', total: 13564.23 },
        { name: '新区店', total: 13564.23 },
      ]
    }
  },

  mounted() {
    this.loading = false
    function getRandom(min, max){
      return Math.random() * (max - min) + min
    }
    setInterval(() => {
      for(let i=0; i<12; i++) {
        let value = i + 1 == 12 ? getRandom(9000, 14000) : this.line[i + 1].y
        this.$set(this.line[i], 'y', value)
      }
    }, 1500)
  },
}
</script>

<style lang="less">
.extra-wrapper {
  line-height: 55px;
  padding-right: 24px;

  .extra-item {
    display: inline-block;
    margin-right: 24px;

    a {
      margin-left: 24px;
    }
  }
}
</style>
