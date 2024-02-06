<template>
  <div ref="chartDiv" class="card-box" :style="{height:'12.5rem'}">

  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data(){
    return {
      chartDiv:'',
      options:{
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            type: 'pie',
            radius: ['20%', '80%'],
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center',
            },
            top:40,
            data: []
          }
        ]
      }
    }
  },
  props:{
    category:{
      type:Array
    }
  },
  mounted(){  
    // 去除首页
    let arr = this.category.slice(1)
    arr = arr.map((item)=>{
      return {
        value:item.items.length,
        name:item.text
      }
    })
    this.options.series[0].data = arr
    this.chartDiv = this.$refs['chartDiv']
    let myChart = echarts.init(this.chartDiv);
    myChart.setOption(this.options);
  }
}
</script>

<style>

</style>