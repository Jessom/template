<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-17 09:46:48
 * @LastEditTime: 2021-03-17 13:28:36
 * @LastEditors: watasi
-->
<template>
  <div class="charts-mini-line">
    <div id="mini-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      miniLine: null,
      miniLineDom: null,
    };
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      if (!this.miniLineDom)
        this.miniLineDom = document.querySelector("#mini-line");
      if (!this.miniLine)
        this.miniLine = echarts.init(this.miniLineDom, "shine");
    },

    setData(options) {
      let option = _.merge({
        tooltip: {
          trigger: "axis"
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
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            showSymbol: false,
          },
        ],
      }, options);

      this.miniLine.setOption(option)
    },
  },
};
</script>

<style lang="less">
#mini-line {
  width: 100%;
  height: 100px;
}
</style>
