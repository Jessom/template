<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-18 11:11:13
 * @LastEditTime: 2021-03-18 16:05:14
 * @LastEditors: watasi
-->
<template>
  <chart :data="dataSource" class="w-chart" />
</template>

<script>
import { Chart } from '@/components'
export default {
  name: 'LineChart',

  components: { Chart },

  data () {
    return {}
  },
  props: {
    data: {
      type: [Array, Object],
      required: true
    }
  },

  computed: {
    dataSource() {
      let x = [], y = [];
      for(let i=0; i<this.data.length; i++) {
        x.push(this.data[i].x)
        y.push(this.data[i].y)
      }

      return {
        grid: {
          left: "70",
          right: "0",
          bottom: "40",
          top: "10",
          containLabel: false,
        },
        xAxis: {
          type: "category",
          data: x,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#dedede"
            }
          },
          axisLabel: {
            color: '#545454'
          }
        },
        yAxis: [{
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }],
        series: [
          {
            type: "line",
            smooth: true,
            showSymbol: false,
            data: y,
          },
        ],
      }
    }
  },
}
</script>

<style lang="less">
</style>
