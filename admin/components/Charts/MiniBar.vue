<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-17 09:46:48
 * @LastEditTime: 2021-03-17 13:28:02
 * @LastEditors: watasi
-->
<template>
  <div class="charts-mini-bar">
    <div id="mini-bar"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      miniBar: null,
      miniBarDom: null,
    };
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      if (!this.miniBarDom)
        this.miniBarDom = document.querySelector("#mini-bar");
      if (!this.miniBar)
        this.miniBar = echarts.init(this.miniBarDom, "shine");
    },

    setData(options) {
      let option = _.merge({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "0",
          top: "50",
          containLabel: false,
        },
        xAxis: {
          show: false,
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          show: false,
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: 20
          },
        ],
      }, options);

      this.miniBar.setOption(option)
    },
  },
};
</script>

<style lang="less">
#mini-bar {
  width: 100%;
  height: 100px;
}
</style>
