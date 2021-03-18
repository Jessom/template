<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-17 09:46:48
 * @LastEditTime: 2021-03-18 15:49:51
 * @LastEditors: watasi
-->
<template>
  <chart :data="dataSource" class="mini-chat" />
</template>

<script>
import { Chart } from '@/components'
export default {
  name: 'MiniBar',

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
        tooltip: {
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          show: false,
          type: "category",
          data: x,
        },
        series: [
          {
            data: y,
            type: "bar",
            barWidth: 10
          },
        ]
      }
    }
  },
};
</script>

<style lang="less">
#mini-bar {
  width: 100%;
  height: 100px;
}
</style>
