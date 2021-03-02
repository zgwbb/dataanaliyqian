<template>
  <div class="app-container">
    <el-row>
      <el-col :span="8"></el-col>
      <el-col :span="13"><upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" /></el-col> 
    </el-row>
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="5"><el-button type="primary" @click.native.prevent="handleup">确认上传</el-button></el-col>
    </el-row>
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExecl/index'
import { examArrangement } from '../../api/user'
export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: []
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1
      if (isLt1M) {
        return true
      }
      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
      
      
    },
    handleup(){
      if (this.tableData == ''){
        alert("未上传excel数据")
      }
      else{
        //alert(this.tableData[1]['姓名'])
        let list = []
        for (let item of this.tableData){
          //解决空值出现undefined问题
          var translator = (item.备注==undefined ?"":item.备注);
          var translator1 = (item.编号==undefined ?"":item.编号);
          var translator2 = (item.姓名==undefined ?"":item.姓名);
          var translator3 = (item.性别==undefined ?"":item.性别);
          var translator4 = (item.组别==undefined ?"":item.组别);
          var translator5 = (item.单位==undefined ?"":item.单位);
          var translator6 = (item.项目==undefined ?"":item.项目);
          var translator7 = (item.场次==undefined ?"":item.场次);
          var translator8 = (item.分组==undefined ?"":item.分组);
          var translator9 = (item.序号==undefined ?"":item.序号);
          var translator10 = (item.比赛时间==undefined ?"":item.比赛时间);
          var translator11 = (item.赛次==undefined ?"":item.赛次);
         console.log(translator)
          list.push({"id": translator1,"name":translator2,"sex":translator3,"group":translator4,"unit":translator5,
          "project":translator6,"session":translator7,"divideGroup":translator8,"number":translator9,"time":translator10,
          "remark":translator,"games":translator11})
        }
        
        let ArrangeIn = {"ArrangeIn":list}
        examArrangement(ArrangeIn)
        console.log(ArrangeIn)
        alert("成功")
      }
    }
  }
}
</script>