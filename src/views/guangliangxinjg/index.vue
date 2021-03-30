<template>
<div>
  <el-input prefix-icon="iconfont icon-sousuo" v-model="searchTableInfo" placeholder="请输入搜索内容" style="width:240px"></el-input>
  <div style="width: 100%;" class="mt-4">
   <el-table :data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)">
      <!-- <el-table-column type="index" align="center" /> -->
      <el-table-column label="前置" prop=" antecedents" align="center" />    
      <el-table-column label="后置" prop=" consequents" align="center" />
      <el-table-column label="前置支持度" prop=" antecedent_support" align="center" />
      <el-table-column label="后置支持度" prop=" consequent_support" align="center" />
      <el-table-column label="综合支持度" prop=" support" align="center" />
      <el-table-column label="置信度" prop=" confidence" align="center" />    
      <el-table-column label="提示度" prop=" lift" align="center" />
      <el-table-column label="杠杆率" prop=" leverage" align="center" />
      <el-table-column label="可信度" prop=" conviction" align="center" />
   </el-table>
   <el-pagination @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[5, 10, 20, 40]"
                  :page-size="pagesize"
                  :total="tableData.length"
                  layout="total, sizes, next, pager, prev, jumper"></el-pagination>
</div>
 
</div>  



</template>

<script>
import { mapGetters } from "vuex";
import LbTable from "../../components/lb-table/lb-table"
import {Gljg}  from   "../../api/user"
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
pagesize: 10,
userList: [],
dateTable: [],
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
    //   let data1 = await this.$api.Gljg()
      // 用axios取接口里面的数据
      // axios.get('http://localhost:8080/api/test').then(res => {
          // this.userList = res.data;
      // });
      // 自己创建的数组
    //   this.dateTable =
    // console.log(typeof data1)
     this.$api.Gljg().then(res => {
       console.log(typeof res)
       var data = res
        data=data.replace("[","");
       data=data.replace("]","");
       let  data3 = []
       data3 = data.split(",")
      //  console.log(typeof data3)
      //  console.log(data3)
      //  for循环
      let all_data = []
      var dangge = {}
       for(var i=0; i<data3.length; i++){
          data3[i] = data3[i].replace("{","");
          data3[i]=data3[i].replace("}",""); 
          let  data4 = []
          data4 = data3[i].split(":")
          data4[0] = data4[0].replace(/\"/g,"")
          data4[1] = data4[1].replace(/\"/g,"")
          dangge[data4[0]]=data4[1]
          // console.log(dangge)
        if(i%9 === 0){
          var a = dangge
          all_data.push(a)
          dangge = {}
        }
        //  console.log(data3[i])
       }
      //  console.log(all_data)
          // this.userList = all_data;
          // this.tableData = all_data
          this.getSearchInfo = all_data
          // console.log(11,this.userList)
          // console.log(typeof this.userList)
      });
    // console.log(this.dateTable)
    // this.userList =  this.dateTable.dataRelate;
    },
    
},
computed: {
      // 根据计算属性模糊搜索
      tableData () {
        const searchTableInfo = this.searchTableInfo
        if (searchTableInfo) {
          // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
          // 注意： filter() 不会对空数组进行检测。
          // 注意： filter() 不会改变原始数组。
          return this.getSearchInfo.filter(data => {
            console.log("success"+data)
            // some() 方法用于检测数组中的元素是否满足指定条件;
            // some() 方法会依次执行数组的每个元素：
            // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
            // 如果没有满足条件的元素，则返回false。
            // 注意： some() 不会对空数组进行检测。
            // 注意： some() 不会改变原始数组。
            return Object.keys(data).some(key => {
              // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
              // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
              return String(data[key]).toLowerCase().indexOf(searchTableInfo) > -1
            })
          })
        }
        return this.getSearchInfo
      }
    },
     created() {
    this.handleUserList();
  },
  }
</script>

<style scoped lang="stylus">
</style>