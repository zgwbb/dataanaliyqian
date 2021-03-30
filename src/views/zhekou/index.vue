<template>
<el-row>
  <el-col :span="16"><div id="myChart" :style="{width: '1300px', height: '500px'}"></div></el-col>
  <el-col :span="8"><div id = "myChart1" :style = "{width: '300px' ,height: '200px' ,}">
</div ></el-col>
</el-row>


 

</template>

<script>
import { mapGetters } from "vuex";
import {Zhekou}  from   "../../api/user"

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  mounted(){
    this.drawLine();
  },
   methods: {
    async drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let myChart1 = this.$echarts.init(document.getElementById('myChart'))
        let data1 = await this.$api.Zhekou()
        // 绘制图表
        myChart.setOption({
           legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['product', '≤2 折', '2 －4 折', '4 －6 折', '＞6 折'],
        source: data1
    },
    xAxis: {type: 'category',
    axisLabel: {
            interval: 0,  
      formatter:function(value,index)  
      {  
          debugger  
          if (index % 2 != 0) {  
              return '\n\n' + value;  
          }  
          else {  
              return value;  
          }  
      }  
        }},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'},
         {type: 'bar'}
    ]
        });
    // 测试
    // myChart1.setOption({
    // tooltip: {
    //     trigger: 'item'
    // },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    // },
    // series: [
    //     {
    //         name: '访问来源',
    //         type: 'pie',
    //         radius: '30%',
    //         data: [
    //             {value: 1048, name: '搜索引擎'},
    //             {value: 735, name: '直接访问'},
    //             {value: 580, name: '邮件营销'},
    //             {value: 484, name: '联盟广告'},
    //             {value: 300, name: '视频广告'}
    //         ],
    //         emphasis: {
    //             itemStyle: {
    //                 shadowBlur: 10,
    //                 shadowOffsetX: 0,
    //                 shadowColor: 'rgba(0, 0, 0, 0.5)'
    //             }
    //         },
    //         center : ['60%', '30%'],
    //     },
    // ]
    //     });
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
