<template>
    <el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"> <div id="myChart" :style="{width: '800px', height: '400px'}"></div></div></el-col>
 
</el-row>  
</template>

<script>
import { mapGetters } from "vuex";
import {Bingtu}  from   "../../api/user"

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
        let data1 = await this.$api.Bingtu()
        // 绘制图表
        myChart.setOption({
          title : {
        text: '各个类型销量占比饼图',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical', // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
         // 水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        x: 'left',
        // 垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        y: 'bottom',
        // 重写legend显示样式
        formatter: function(name) {
              // 获取legend显示内容
              let data2 = data1[0];
              console.log(1,data2)
              let total = 0;
              let tarValue = 0;
              for (let i = 0, l = data2.length; i < l; i++) {
                  total += data2[i].value;
                  if (data2[i].name == name) {
                      tarValue = data2[i].value;
                  }
              }
              let p = (tarValue / total * 100).toFixed(2);
              return name + ' ' + ' ' + p + '%';
          },
        data: data1[1]
    },
    series : [
        {
            name: '数据类型',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:data1[0],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
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
