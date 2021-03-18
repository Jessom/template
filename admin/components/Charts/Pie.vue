<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-18 16:08:00
 * @LastEditTime: 2021-03-18 16:15:09
 * @LastEditors: watasi
-->
<template>
  <chart :data="dataSource" class="w-chart" />
</template>

<script>
import { Chart } from "@/components";
export default {
  name: "Pie",

  components: { Chart },

  data() {
    return {};
  },

  props: {
    data: {
      type: [Array, Object],
      required: true,
    },
  },

  computed: {
    dataSource() {
      /* let x = [],
        y = [];
      for (let i = 0; i < this.data.length; i++) {
        x.push(this.data[i].x);
        y.push(this.data[i].y);
      } */
      let data = this.data.map(c => {
        return {
          value: c.y,
          name: c.x
        }
      })

      return {
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: "0",
          left: "center",
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "10",
          top: "0",
          containLabel: false,
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: data,
          },
        ],
      };
    },
  },
};
</script>

<style lang="less">
</style>
