<!--
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-18 14:03:07
 * @LastEditTime: 2021-04-09 16:28:34
 * @LastEditors: watasi
-->
<template>
  <div :id="id"></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Chart',

  data () {
    return {
      chartObj: null
    }
  },

  props: {
    id: {
      type: String,
      default: () => {
        return 'd' + Date.now().toString(16) + (parseInt(Math.random() * 1000000).toString(16))
      }
    },

    data: {
      type: [Array, Object],
      required: true
    }
  },

  computed: {
    ...mapState({
      collapsed: state => state.app.collapsed
    })
  },

  watch: {
    data: {
      handler: function(val) {
        this.setData(val)
      },
      deep: true,
      immediate: true
    },

    collapsed(val) {
      this.chartObj && this.chartObj.resize()
    }
  },

  mounted() {
    window.addEventListener('resize', () => {
      this.chartObj && this.chartObj.resize()
    })
  },

  methods: {
    setData(val) {
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
        yAxis: {
          show: false,
          type: "value",
        },
      }, val)
      
      this.$nextTick(function() {
        if(!this.chartObj) {
          this.chartObj = echarts.init(document.querySelector(`#${this.id}`), "shine")
        }
        
        this.chartObj.setOption(option)
      })
    }
  }
}
</script>

<style lang="scss">
  
</style>
