<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <span class="el-dropdown-link">
      <svg-icon :icon-class="locale" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(lang, key) in languages"
        :key="key"
        :disabled="key===locale"
        :command="key"
      >
        <svg-icon :icon-class="key" /> {{ lang }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'Language',
  data() {
    return {
      languages: {
        en: 'English',
        zh_CN: '中文简体',
        zh_HK: '中文繁体'
      }
    }
  },
  computed: {
    locale() {
      return this.$store.getters.locale
    }
  },
  methods: {
    handleCommand(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLocale', lang)
      this.$message.success('switch language success')
    }
  }
}
</script>

<style scoped>

</style>
