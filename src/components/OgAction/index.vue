<template>
  <div>
    <span v-if="rowActions(item, row).length > maxAction">
      <span v-for="(acItem, acIndex) in rowActions(item, row)" :key="acIndex">
        <el-button
          v-if="acItem.showBtn(row) && acIndex < maxAction - 1"
          :disabled="acItem.disabled(row) || false"
          type="text"
          :class="acItem.icon"
          :style="acItem.style"
          :size="acItem.size || 'small'"
          @click="acItem.onclick(row)"
        >
          {{ acItem.text }}
        </el-button>
      </span>
      <el-dropdown>
        <el-button type="text"><svg-icon icon-class="more" style="color: #409EFF" /></el-button>
        <el-dropdown-menu slot="dropdown">
          <span v-for="(acItem, acIndex) in rowActions(item, row)" :key="acIndex">
            <el-dropdown-item

              v-if="acItem.showBtn(row) && acIndex >= maxAction - 1"

              :disabled="acItem.disabled(row) || false"
            >
              <el-button
                type="text"
                :class="acItem.icon"
                :size="acItem.size || 'small'"
                :style="acItem.style + '; width:100%; padding: 0 10px;'"
                @click="acItem.onclick(row)"
              >
                {{ acItem.text }}
              </el-button>
            </el-dropdown-item>

          </span>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
    <span v-else>
      <span v-for="(acItem, acIndex) in rowActions(item, row)" :key="acIndex">
        <el-button
          v-if="acItem.showBtn(row) || true"
          :disabled="acItem.disabled(row) || false"
          type="text"
          :class="acItem.icon"
          :style="acItem.style"
          :size="acItem.size || 'small'"
          @click="acItem.onclick(row)"
        >
          {{ acItem.text }}
        </el-button>
      </span>

    </span>
  </div>
</template>

<script>
export default {
  name: 'OgTableActions',
  props: {
    row: {
      type: Object,
      default: function() {
        return {}
      }
    },
    item: {
      type: Object,
      default: function() {
        return {}
      }
    },
    maxAction: {
      type: Number,
      default: 3
    }
  },
  methods: {
    rowActions(item, row) {
      const arr = []
      item.actions.forEach((a) => {
        if (a.showBtn(row)) {
          arr.push(a)
        }
      })
      return arr
    }
  }
}
</script>

<style scoped>
.el-dropdown-menu--medium .el-dropdown-menu__item
{
  padding: 0 !important;
}
</style>
