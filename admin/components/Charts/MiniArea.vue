<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-11 09:15:11
 * @LastEditTime: 2021-03-18 16:07:38
 * @LastEditors: watasi
-->
<template>
  <chart :data="dataSource" class="mini-chat" />
</template>

<script>
import { Chart } from '@/components'
export default {
  name: 'MiniArea',

  components: { Chart },

  data() {
    return {};
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
        xAxis: {
          show: false,
          type: "category",
          boundaryGap: false,
          data: x,
        },
        series: [
          {
            data: y,
            type: "line",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 1,
            },
            showSymbol: false,
          },
        ],
      }
    }
  },
};
</script>

<style lang="less">
</style>
