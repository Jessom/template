<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-11 09:15:11
 * @LastEditTime: 2021-03-17 10:34:17
 * @LastEditors: watasi
-->
<template>
  <div class="charts-mini-area">
    <div id="mini-area"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      miniArea: null,
      miniAreaDom: null,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      if (!this.miniAreaDom)
        this.miniAreaDom = document.querySelector("#mini-area");
      if (!this.miniArea)
        this.miniArea = echarts.init(this.miniAreaDom, "shine");
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
        xAxis: [
          {
            show: false,
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        yAxis: [
          {
            show: false,
            type: "value",
          },
        ],
        series: [
          {
            name: "Line 1",
            type: "line",
            stack: "总量",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
            },
            data: [140, 232, 101, 264, 90, 340, 250],
          },
        ],
      }, options)
      this.miniArea.setOption(option);
    },
  },
};
</script>

<style lang="less">
#mini-area {
  width: 100%;
  height: 100px;
}
</style>
