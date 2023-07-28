<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item style="margin-left: 20px;">
        <template slot="title">
          说明 <svg-icon icon-class="eye"/>:
        </template>
        <div>公告管理，设置系统的各类公告和提醒消息</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<body>
{{ msg }}
</body>
<script>
export default {
  name: "afficheManager",
  data () {
    return {
      msg : 'WELCOME YOUR PROJECT'
    }
  }
}
</script>

<style scoped>

</style>