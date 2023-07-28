<template>
  <div>
    <el-collapse >
      <el-collapse-item style="margin-left: 20px">
        <template slot="title">
          说明 <svg-icon icon-class="question"/>
        </template>
        <div>用户管理,展示用户基本数据，支持用户搜索和禁用等基本功能</div>
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
          <el-form-item label="id:" prop="appName">
            <el-input
                v-model="queryForm.userId"
                placeholder="请输入用户id"
                clearable
                class="my-form-item"
                @keyup.enter.native=""
            />
          </el-form-item>
          <el-form-item label="昵称:" prop="appName">
            <el-input
                v-model="queryForm.nickName"
                placeholder="请输入用户昵称"
                clearable
                class="my-form-item"
                @keyup.enter.native=""
            />
          </el-form-item>
          <el-form-item label="邮箱:" prop="appName">
            <el-input
                v-model="queryForm.email"
                placeholder="请输入用户邮箱"
                clearable
                class="my-form-item"
                @keyup.enter.native=""
            />
          </el-form-item>
          <el-form-item label="手机号:" prop="appName">
            <el-input
                v-model="queryForm.phone"
                placeholder="请输入用户手机号"
                clearable
                class="my-form-item"
                @keyup.enter.native=""
            />
          </el-form-item>
          <el-form-item label="村庄:" prop="appName">
            <el-input
                v-model="queryForm.village"
                placeholder="请输入用户所在村庄"
                clearable
                class="my-form-item"
                @keyup.enter.native=""
            />
          </el-form-item>
          <el-form-item label=" ">
            <el-button type="primary" @click="" icon-class="search">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
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
export default {
  name: "userManager",
  data () {
    return {
      msg : 'WELCOME YOUR PROJECT',
      size : 'medium',
      loading : false,
      options : {
        levelData: []
      },
      queryForm: {
        'userId': '',
        'userName': '',
        'nickName': '',
        'enail': '',
        'phone': '',
        'village': '',
        'pageNum': 1,
        'pageSize': 50
      },
      pageSizes: [20, 50, 100, 200, 500],
      result: {
        total: 0,
        list: []
      }
    }
  },
  computed: {
    //使用 OgTable 组件时需要使用到
    tableColumns() {
      return [
        { prop: 'userId', label: 'ID', align: 'right', fixed: 'left', minWidth: 80 },
        { prop: 'userName', label: '应用名称', align: 'left', fixed: 'left', minWidth: 120 },
        { prop: 'nickName', label: '系统唯一标识', align: 'left', fixed: 'left', minWidth: 120 },
        { prop: 'enail', label: '表后缀', align: 'left', minWidth: 100 },
        { prop: 'phone', label: '平台类型', align: 'left', minWidth: 100 },
        { prop: 'village', label: '接口请求host', align: 'left', minWidth: 120 },
      ]
    }
  },
  //在一加载时进行就会调用的方法
  created() {
    this.queryList()
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

  }
}
</script>

<style scoped>

</style>