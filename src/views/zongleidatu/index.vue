<template>
    <el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"> <div id="myChart" :style="{width: '1500px', height: '650px'}"></div></div></el-col>
 
</el-row>  
</template>

<script>
import { mapGetters } from "vuex";
import {Zongdeleidatu}  from   "../../api/user"

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
        let data1 = await this.$api.Zongdeleidatu()
        var x
        var lable
        var arr = new Array
        for (x in data1[1])
        {
          data1[1][x]['lable'] = {
                    normal: {
                        show: true,
                        formatter: (params) => {
                            return params.value
                        },
                    },
                }

        }
        console.log(data1[1])
        // 绘制图表
        myChart.setOption({
          title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: data1[2]
    },
    radar: {
        shape: 'circle',
        splitNumber: 10,
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: (function (){
                var res = [];
                for (var i = 0; i < data1[0].length; i++) {
                    var color;var axisLabel_show;
                    if(i==0){
                      axisLabel_show=true;    
                    }else{
                      axisLabel_show=false;
                    }
                    res.push({name:data1[0][i],max:100,color:color,axisLabel:{show:axisLabel_show}});
                }
                return res;
            })(),
        radius: 260,
        startAngle: 90,
        splitNumber: 10,
        shape: 'circle',
        triggerEvent: true,
        silent: true,
        scale: true,
        nameGap:12,
        splitArea: {
            show : true,   
            areaStyle : {
                color: ["#fff"]  // 图表背景网格的颜色
            }
        },
        axisTick:{
          show:true  
        },
        axisLabel:{
          show:true,
          color:'#b6b1c3',
          position: 'bottom'
        },


    },
    series: [{
        type: 'radar',
        // areaStyle: {normal: {}},
        data: data1[1]
    }]
        });
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
