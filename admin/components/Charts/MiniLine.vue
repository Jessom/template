<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-17 09:46:48
 * @LastEditTime: 2021-03-18 16:21:07
 * @LastEditors: watasi
-->
<template>
  <chart :data="dataSource" class="mini-chat" />
</template>

<script>
import { Chart } from '@/components'
export default {
  name: 'MiniLine',

  components: { Chart },

  data() {
    return {};
  },

  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    opacity: {
      type: Number,
      default: 0
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
        xAxis: {
          show: false,
          type: "category",
          data: x,
        },
        series: [
          {
            data: y,
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
              opacity: this.opacity,
            },
          },
        ],
      }
    }
  },
};
</script>

<style lang="less">
</style>
