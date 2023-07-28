<template>
  <div>
    <svg-icon :icon-class="isDark?'dark':'light'" @click="switchDark" />
  </div>
</template>

<script>
export default {
  name: 'Theme',
  data() {
    return {
      isDark: false
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.isDark = this.$store.state.settings.theme === 'dark'
    },
    switchDark() {
      let theme = ''
      if (this.isDark) {
        this.isDark = false
        theme = 'light'
      } else {
        this.isDark = true
        theme = 'dark'
      }

      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: theme
      })
      this.$message.success('switch theme success')
      location.reload()
    }
  }
}
</script>

<style scoped>

</style>
