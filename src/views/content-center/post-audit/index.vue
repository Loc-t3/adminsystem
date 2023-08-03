<template>
  <div>
    <el-collapse>
      <el-collapse-item>
        <template slot="title">
          说明：<svg-icon icon-class="question"/>
        </template>
        <div>发帖审核,初步发帖在此处经过审核（结合内容过滤）后成功发布并跟踪其状态</div>
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
          <el-form-item label="权限级别:" prop="adType">
            <el-select
                v-model="queryForm.authority"
                class="my-form-item"
                clearable
                filterable
            >
              <el-option
                  v-for="(v, k) in options.authorityData"
                  :key="k"
                  :label="v"
                  :value="v"
              />
            </el-select>
          </el-form-item>
          <el-button type="primary" size="medium">查询</el-button>
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
import OgTable from "@/components/OgTable"
export default {
  name: "postAudit",
  components: {
    OgTable
  },
  data () {
    return {
      msg : 'WELCOME YOUR PROJECT',
      loading:false,
      queryForm: {
        'authority': '',
        'pageNum': 1,
        'pageSize': 50
      },
      options: {
        authorityData:['超级管理员','村庄话事人']
      },
      pageSizes: [20, 50, 100, 200, 500],
      result: {
        total: 0,
        list: []
      },
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


  }
}
</script>

<style scoped>

</style>