<template>
<div>
 
  <div style="width: 100%;" class="mt-4">
   <el-table :data="userList.slice((currentPage - 1) * pagesize, currentPage * pagesize)">
      <!-- <el-table-column type="index" align="center" /> -->
      <el-table-column label="'商品id" prop="商品id" align="center" />    
      <el-table-column label="好评率/%" prop="好评率" align="center" />
      <el-table-column label="作者" prop="作者" align="center" />
      <el-table-column label="标题" prop="标题" align="center" />
      <el-table-column label="销量" prop="销量" align="center" />
      <el-table-column label="类型" prop="类型" align="center" />    
      <el-table-column label="价格" prop="价格" align="center" />
      <el-table-column label="折扣" prop="折扣" align="center" />
      <el-table-column label="出版社" prop="出版社" align="center" />
      <el-table-column label="图书地址" prop="url" align="center" />
   </el-table>
   <el-pagination @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[5, 10, 20, 40]"
                  :page-size="pagesize"
                  :total="userList.length"
                  layout="total, sizes, next, pager, prev, jumper"></el-pagination>
</div>
 
</div>  



</template>

<script>
import { mapGetters } from "vuex";
import LbTable from "../../components/lb-table/lb-table"
import { len } from 'echarts-wordcloud/dist/echarts-wordcloud';
  export default {
  	name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
   components: {
    LbTable
  },
    data() {
    return {
         // 初始页
currentPage: 1,
// 每页的数据
pagesize: 5,
userList: [
     ]

,
dateTable: [{'商品id': '11977252', '好评率': '99', '作者': '思睿 编', '标题': '唐诗三百首（儿童注音美绘本） [7-10岁]', '销量': 3674133.0, '类型': '少儿', '价格': '30.00', '折扣': '0.75', '出版社': '北方妇女儿童出版社', 'url': 'https://item.jd.com/11977252.html'}, 
    {'商品id': '11905669', '好评率': '99', '作者': '铁皮人美术 编', '标题': '幼儿十万个为什么（儿童注音版） [7-10岁]', '销量': 3137243.0, '类型': '少儿', '价格': '30.00', '折扣': '0.75', '出版社': '北方妇女儿童出版社', 'url': 'https://item.jd.com/11905669.html'},
    {'商品id': '11977270', '好评率': '99', '作者': '李绍苗 著', '标题': '恐龙百科（儿童注音版） [7-10岁]', '销量': 3117809.0, '类型': '少儿', '价格': '30.00', '折扣': '0.75', '出版社': '北方妇女儿童出版社', 'url': 'https://item.jd.com/11977270.html'},
    {'商品id': '11977266', '好评率': '99', '作者': '王伟 编', '标题': '动物百科（儿童注音版） [7-10岁]', '销量': 3101857.0, '类型': '少儿', '价格': '30.00', '折扣': '0.75', '出版社': '北方妇女儿童出版社', 'url': 'https://item.jd.com/11977266.html'},
    {'商品id': '12715197', '好评率': '98', '作者': '乌恩，翟芮 著', '标题': '亲爱的小孩，和世界一起长大 [3-6岁]', '销量': 2938040.0, '类型': '少儿', '价格': '51.80', '折扣': '0.75', '出版社': '北京联合出版公司', 'url': 'https://item.jd.com/12715197.html'},
    {'商品id': '12638691', '好评率': '98', '作者': '马劲 著', '标题': '幼儿大科学绘本：大宇宙 [3-6岁]', '销量': 2834145.0, '类型': '少儿', '价格': '59.90', '折扣': '0.75', '出版社': '北京联合出版公司', 'url': 'https://item.jd.com/12638691.html'},
    {'商品id': '12401321', '好评率': '98', '作者': '沈蕾娜 著', '标题': '亲爱的小孩 我把世界读给你听 [3-6岁]', '销量': 2821748.0, '类型': '少儿', '价格': '51.80', '折扣': '0.75', '出版社': '四川人民出版社', 'url': 'https://item.jd.com/12401321.html'}, 
    {'商品id': '11051349', '好评率': '99', '作者': '[英] 笛福 著，闻钟 编', '标题': '鲁滨孙漂流记（中小学课外阅读 无障碍阅读）快乐读书吧六年级下册阅读 新老版本随机发货 智慧熊图书', '销量': 2699210.0, '类型': '教育', '价格': '11.70', '折扣': '0.79', '出版社': '商务印书馆', 'url': 'https://item.jd.com/11051349.html'}, 
    {'商品id': '11179524', '好评率': '99', '作者': '罗贯中，曹雪芹，施耐庵 等 著，闻钟 编，杨建宇 译', '标题': '四大名著青少版：西游记+红楼梦+水浒传+三国演义 快乐读书吧五年级下册阅读 智慧熊图书', '销量': 2685848.0, '类型': '教育', '价格': '43.20', '折扣': '0.73', '出版社': '商务印书馆', 'url': 'https://item.jd.com/11179524.html'},
     {'商品id': '11487454', '好评率': '99', '作者': '闻钟 编', '标题': '中国古代寓言故事（中小学课外阅读 无障碍阅读）快乐读书吧三年级下册阅读 智慧熊图书', '销量': 2668180.0, '类型': '教育', '价格': '10.90', '折扣': '0.79', '出版社': '人民邮电出版社', 'url': 'https://item.jd.com/11487454.html'}],
searchTableInfo:"",
getSearchInfo:[],
// tableData: [],
    }
},

     methods:{
    say(message) {
      alert(message);
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },
 
    handleUserList() {
   
    this.userList =  this.dateTable;
    },
    
},

     created() {
    this.handleUserList();
  },
  }
</script>

<style scoped lang="stylus">
</style>