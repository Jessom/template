<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-18 10:37:45
 * @LastEditTime: 2021-03-18 16:07:19
 * @LastEditors: watasi
-->
<template>
  <chart :data="dataSource" class="w-chart" />
</template>

<script>
import { Chart } from '@/components'
export default {
  name: 'Bar',

  components: { Chart },

  data () {
    return {}
  },

  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    barWidth: {
      type: String,
      default: '40%'
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
        tooltip: {
          axisPointer: {
            type: "shadow"
          }
        },
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
            type: "bar",
            barWidth: this.barWidth,
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
