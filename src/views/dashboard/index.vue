<template>
  <div class="dashboard-container">
    <div class="dashboard-text">你好， {{ name }} ！ 欢迎使用来到超级管理系统！</div>
  </div>
</template>

<script>
export default {
  name: "hel",
  data () {
    return {
      name : 'Samir'
    }
  }
}
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
