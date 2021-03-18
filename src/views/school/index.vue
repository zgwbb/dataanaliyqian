<template>
    <el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"> <div id="myChart" :style="{width: '1300px', height: '650px'}"></div></div></el-col>
 
</el-row>  
</template>

<script>
import { mapGetters } from "vuex";
import {SportsQuery}  from   "../../api/user"

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
        // let data1 = await this.$api.SportsQuery()
        // 绘制图表
        myChart.setOption({
              title: {
        text: '销量前10的出版社堆叠柱状图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['经营', '人文科学', '少儿', '小说文学', '艺术/摄影', '教育', '科技', '生活', '励志与成功', '计算机与互联网','原版图书']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['人民邮电出版社', '机械工业出版社', '北京联合出版公司', '教育科学出版社，首都师范大学出版社',  '中信出版社，中信出版集团', '电子工业出版社', '人民音乐出版社', '南海出版公司', '湖南文艺出版社','Penguin Random House US'],
            axisLabel: {
            color: '#333',
            //  让x轴文字方向为竖向
			      interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
        }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series : [
    {
        "name": '经营',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [13, 30, 15, 0, 17, 2, 0, 2, 0,0]
    },
    {
        "name": '人文科学',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [2, 1, 8, 0, 3,  2, 0, 0, 7,0]
    },
    {
        "name": '少儿',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [0, 0, 20, 0, 0,  0, 0, 1, 0,0]
    },
{
        "name": '小说',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [0, 0, 3, 0, 1, 0, 0, 21, 3,0]
    },
{
        "name": '艺术/摄影',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [11, 0, 4, 0, 23, 2, 31, 0, 2,0]
    },
{
        "name": '教育',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [6, 0, 0, 37, 0, 0, 0, 0, 0, 0]
    },
{
        "name": '科技',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [9, 6, 9, 0, 4, 1, 0, 1, 0,0]
    },
{
        "name": '生活',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [3, 2, 16, 0, 10,0, 0, 4, 2,0]
    },
{
        "name": '励志与成功',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [10, 16, 15, 0, 12, 6, 0, 0, 15,0]
    },
{
        "name": '计算机与互联网',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [55, 48, 0, 0, 0, 21, 0, 0, 0,0]
    },
{
        "name": '原版图书',
        "type": 'bar',
        "emphasis": {
            "focus": 'series'
        },
        "data": [0, 0, 0, 0, 0, 0, 0, 0, 0,27]
    },
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
