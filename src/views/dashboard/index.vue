<template>
    <el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"> <div id="myChart" :style="{width: '600px', height: '600px'}"></div></div></el-col>
 
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
        let data1 = await this.$api.SportsQuery()
        // 绘制图表
        myChart.setOption({
          title: {
        text: '好评度词雷达图'
    },
    tooltip: {},
    legend: {
        data: ['销量前10的好评度词雷达图']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: data1[0]
            // { name: '销售（sales）', max: 6500},
            // { name: '管理（Administration）', max: 16000},
            // { name: '信息技术（Information Techology）', max: 30000},
            // { name: '客服（Customer Support）', max: 38000},
            // { name: '研发（Development）', max: 52000},
            // { name: '市场（Marketing）', max: 25000}
        
    },
    series: [{
        name: '销量前10的好评度词雷达图',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: data1[1],
                name: '销量前10的好评度词雷达图',
                label: {
                    normal: {
                        show: true,
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                }

            },
            // {
            //     value: [5000, 14000, 28000, 31000, 42000, 21000],
            //     name: '实际开销（Actual Spending）'
            // }
        ]
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
