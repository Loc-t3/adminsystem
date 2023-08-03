<template>
  <div>
    <el-collapse >
      <el-collapse-item style="margin-left: 20px">
        <template slot="title">
          说明 <svg-icon icon-class="question"/>
        </template>
        <div>账户生成,管理员通过弹窗手动生成账户，并列出手动生成账户的列表</div>
      </el-collapse-item>
    </el-collapse>
    <el-card>
      <div style="display: inline-flex; width: 100%;">
        <el-form
            ref="form"
            v-loading="loading"
            :inline="true"
            :model="queryForm"
            label-position="right"
            label-width="100px"
        >
          <el-form-item>
            <el-input label="账号:" prop="account"
                      v-model="queryForm.account"
                      placeholder="请输入用户账号"
                      clearable
                      class="my-form-item"
                      @keyup.enter.native=""
            />
          </el-form-item>
          <el-button type="primary" size="medium" round="round" @click="dialogTableVisible = true">生成账号</el-button>

        </el-form>
      </div>
    </el-card>
<!--弹出框生成账号-->
    <el-card>
      <el-dialog title="生成账号" :visible.sync="dialogTableVisible">
        <div slot="footer" class="dialog-footer">
          <el-form :model="form" >
            <el-form-item label="用户昵称:" :label-width="formLabelWidth" style="width: 70%">
              <el-input v-model="form.nickName" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="generator">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
    <el-card>
      <div class="page-position">
        <el-pagination
            background
            :page-size="queryForm.pageSize"
            :page-sizes="pageSizes"
            :current-page="queryForm.pageNum"
            layout="total, sizes, prev, pager, next, jumper"
            :total="result.total"
            @size-change="handleListSizeChange"
            @current-change="handleListCurrentChange"
        />
      </div>
      <OgTable
          :columns="tableColumns"
          :list="result.list"
          :loading="loading"
          :border="true"
      />

    </el-card>
  </div>

</template>

<body>
{{ msg }}
</body>
<script>
import OgTable from "@/components/OgTable"
export default {
  name: "accountGenerator",
  components: {
    OgTable
  },
  data () {
    return {
      msg : 'WELCOME YOUR PROJECT',
      dialogTableVisible: false,
      loading:false,
      form: {
        'nickName':'',
        'passWord':'88888888'
      },
      queryForm: {
        'account': '',
        'pageNum': 1,
        'pageSize': 50
      },
      pageSizes: [20, 50, 100, 200, 500],
      result: {
        total: 0,
        list: []
      },
      formLabelWidth: '120px'
    }

  },
  computed: {
    //使用 OgTable 组件时需要使用到
    tableColumns() {
      return [
        { prop: 'Id', label: 'ID', align: 'right', fixed: 'left', minWidth: 80 },
        { prop: 'account', label: '账号', align: 'right', fixed: 'left', minWidth: 80 },
        { prop: 'nickName', label: '昵称', align: 'left', fixed: 'left', minWidth: 120 },
        { prop: 'enail', label: '邮箱', align: 'left', minWidth: 100 },
        { prop: 'phone', label: '手机号', align: 'left', minWidth: 100 },
      ]
    }
  },
  //在一加载时进行就会调用的方法
  created() {
  },
  //写我们需要实现的方法
  methods: {
    handleListSizeChange: function(val) {
      this.queryForm.pageNum = 1
      this.queryForm.pageSize = val
      this.getList()
    },

    handleListCurrentChange: function(currentPage) {
      this.queryForm.pageNum = currentPage
      this.getList()
    },

    async generator() {
      console.log(this.form)
      //调用接口生成账号 在后端接受值时需要指定接受
      /*const res = await generator(this.form).catch(e => {
        this.dialogTableVisible = false
      })*/
    }

  }
}
</script>

<style scoped>
.my-form-item {
  width: 280px !important;
}
</style>