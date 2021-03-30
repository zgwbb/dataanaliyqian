<template>
    <el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"> <div id="myChart" :style="{width: '1500px', height: '800px'}"></div></div></el-col>
 
</el-row>  
</template>

<script>
import { mapGetters } from "vuex";
import {Guanxi}  from   "../../api/user"

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
        let data_all = await this.$api.Guanxi()
        //定义一些类目
var categories = [
    {'name': '品质一流'},
{'name': '印刷上乘'},
{'name': '图文清晰'},
{'name': '图案精美'},
{'name': '优美详细'},
{'name': '质地上乘'},
{'name': '字体适宜'},
{'name': '毫无异味'},
{'name': '纸张精良'},
{'name': '精美雅致'},
{'name': '轻松有趣'},
{'name': '简单清晰'},
{'name': '增长知识'},
{'name': '内容精彩'},
{'name': '内容丰富'},
{'name': '色彩艳丽'},
    ]
//节点的数据，value代表其支持度，以及它们所属的类目
var dataSet = data_all[0]
 
//关联数据，value为可信度
var dataRelate = data_all[1]
//生成节点所需的数据对象
var data1 = dataSet.map(function (node) {
    return {
                //x: node.x,
                //y: node.y,
                name: node.name,
                value : node.value,
                category: node.category,
                symbolSize: node.value*100//支持度越大，节点越大
    };
});  
 console.log(data1,1111)
//生成连线所需的数据对象
var link1 = dataRelate.map(function (node) {
    return {
                source: node.source,
                target: node.target,
                value: node.value+'(可信度)',
                label: {
                    normal: {
                        show: false,
                        formatter: function (x) {
                            return node.value;
                            }
                    }
                },
                lineStyle: {
                normal: {
                    width : (node.value - 0.65),//可信度越高，连线越粗
                    color : 'source'
                }
                }
                
    };
}); 
console.log(1,link1)
        // 绘制图表
        myChart.setOption({
          title: {
        text: '一个关联分析结果'
    },
    legend: {
            x:'left',
            top:30,
            orient: 'vertical',
            data:['品质一流', '印刷上乘', '图文清晰', '图案精美', '优美详细', '质地上乘', '字体适宜', '毫无异味',
                  '纸张精良', '精美雅致', '轻松有趣', '简单清晰', '增长知识', '内容精彩', '内容丰富', '色彩艳丽']
        },
    
    tooltip: {
    },
   
    series : [
        {
            type: 'graph',
            layout:'force',//'circular','force'
            focusNodeAdjacency:true,//当鼠标移动到节点上，突出显示节点以及节点的边和邻接节点
            draggable: true,//指示节点是否可以拖动
            categories: categories,
            data: data1,
            links: link1,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['none', 'arrow'],
            edgeSymbolSize: 12,
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 15
                    }
                }
            },
            
            force: {
                    repulsion: 200,
                    gravity:0.2,
                    edgeLength: [100,400],
                },
            itemStyle:{
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        shadowBlur: 10,
                    }
                    
                },
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    curveness: 0.3
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
