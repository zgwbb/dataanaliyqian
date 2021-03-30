<template>
    <el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"> <div id="myChart" :style="{width: '1000px', height: '600px'}"></div></div></el-col>
 
</el-row>  
</template>

<script>
import { mapGetters } from "vuex";
// import {SportsQuery}  from   "../../api/user"

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
        text: '满意度比和好评度',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['满意度比', '好评度']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            data: ['唐诗三百首（儿童注音美绘本） [7-10岁]', '幼儿十万个为什么（儿童注音版） [7-10岁]', 
            '恐龙百科（儿童注音版） [7-10岁]', '动物百科（儿童注音版） [7-10岁]', '亲爱的小孩，和世界一起长大 [3-6岁]', 
            '幼儿大科学绘本：大宇宙 [3-6岁]', '亲爱的小孩 我把世界读给你听 [3-6岁]', 
            '鲁滨孙漂流记（中小学课外阅读 无障碍阅读）快乐读书吧六年级下册阅读 新老版本随机发货 智慧熊图书', 
            '四大名著青少版：西游记+红楼梦+水浒传+三国演义 快乐读书吧五年级下册阅读 智慧熊图书', 
            '中国古代寓言故事（中小学课外阅读 无障碍阅读）快乐读书吧三年级下册阅读 智慧熊图书'],
            axisLabel: {
            color: '#333',
            //  让x轴文字方向为竖向
			      interval: 0,
            formatter: function(value) {
              return value.split('').join('\n')
            }
        }
        },
        
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '满意度比',
            type: 'bar',
            data:[88.04137039431157, 88.04523424878838, 88.0674448767834, 
            88.04523424878838, 89.67152048763968, 89.67152048763968, 89.67152048763968, 
            90.3954802259887, 90.3954802259887, 90.3954802259887],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name: '好评度',
            type: 'bar',
            data: ['99', '99', '99', '99', '98', '98', '98', '99', '99', '99'],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
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
