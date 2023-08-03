<template>
  <el-table
    v-loading.fullscreen.lock="loading"
    :data="list"
    :height="tableHeight"
    :default-sort="defaultSort"
    :row-class-name="rowClassName"
    :border="border"
    :stripe="stripe"
    @sort-change="sortChange"
    @selection-change="selectionChange"
  >
    <el-table-column v-if="selection" type="selection" align="center" width="50px" />
    <el-table-column v-if="index" label="No." type="index" align="center" fixed width="50px" />
    <el-table-column
      v-for="(item, key) in columns"
      :key="key"
      :label="item.label"
      :align="item.align || 'center'"
      :fixed="item.fixed || false"
      :width="item.realWidth || item.width"
      :min-width="item.minWidth"
      :sortable="item.sortable || false"
      :prop="item.prop"
    >
<!--      <template v-if="showColumn(item)" v-slot="scope">
        <span v-if="item.type === 'link'">
          <el-link :href="scope.row[item.prop]" target="_blank" type="primary">{{ scope.row[item.prop] }}</el-link>
        </span>
        <span v-else-if="item.type === 'json'">
          <el-popover
            placement="right"
            width="400"
            trigger="click"
          >
            <json-viewer v-if="isJSON(scope.row[item.prop])" :value="JSON.parse(scope.row[item.prop])" />
            <span v-else> {{ scope.row[item.prop] }}</span>
            <el-button slot="reference">{{ scope.row[item.prop].slice(0, 32) }} ...</el-button>
          </el-popover>
        </span>
        <span v-else-if="item.type === 'image'">
          <el-image
            :style="`width: ${item?.width || '100'}px; height: ${item?.height || '100'}px;`"
            :class="item.class"
            :src="scope.row[item.prop]"
            :preview-src-list="[scope.row[item.prop]]"
          >
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline" />
            </div>
          </el-image>
        </span>
        <div v-else-if="item.type === 'list'" style="overflow-x: auto;">
          <div
            v-for="(ll, k) in scope.row[item.prop]"
            :key="k"
            style="margin-right: 10px;"
            type="success"
          >
            <el-tooltip v-if="k < 3" :content="ll.fullName" class="item" effect="dark" placement="bottom-start">
              <el-tag>{{ ll.name }}</el-tag>
            </el-tooltip>
          </div>
          <el-popover
            v-if="scope.row[item.prop] && scope.row[item.prop].length > 3"
            placement="top-end"
            trigger="hover"
          >
            <div v-for="(ll, k) in scope.row[item.prop]" :key="k">
              <el-tooltip :content="ll.fullName" class="item" effect="dark" placement="bottom-start">
                <el-tag>{{ ll.name }}</el-tag>
              </el-tooltip>
            </div>
            <div slot="reference">
              <el-tag type="">
                …
              </el-tag>
            </div>
          </el-popover>
        </div>
        <span v-else-if="item.type === 'fields'">
          <span v-if="scope.row[item.prop].length > 0 && scope.row[item.prop][0].k !== null">
            <el-tooltip
              v-for="(field, k) in scope.row[item.prop]"
              :key="k"
              :content="field.k"
              class="item"
              effect="dark"
              placement="bottom-start"
            >
              <el-tag>{{ field.v }}</el-tag>
            </el-tooltip>
          </span>
          <span v-else>
            <el-tag> 所有字段 </el-tag>
          </span>
        </span>
        <span v-else-if="item.type === 'switch'">
          <el-switch
            v-model="scope.row[item.prop]"
            :active-text="item.defaultProps.activeText"
            :disabled="item.disabled(scope.row)"
            :inactive-text="item.defaultProps.inactiveText"
            :active-color="item.defaultProps.activeColor"
            :inactive-color="item.defaultProps.inactiveColor"
            @change="item.switch($event, scope.row)"
          />
        </span>
        <span v-else-if="item.type === 'action'">
          <OgAction v-if="item.actions" :row="scope.row" :item="item" :max-action="item.maxAction" />
          <span v-else><slot name="action" :row="item" /></span>
        </span>
        <pre v-else-if="item.type === 'pre'" style="overflow: auto">{{ scope.row[item.prop] }}</pre>
        <span v-else>{{ scope.row[item.prop] }}</span>
      </template>-->
    </el-table-column>
  </el-table>
</template>

<script>
import OgAction from '@/components/OgAction'
import checkFields from '@/utils/fields'
import JsonViewer from 'vue-json-viewer'
import { isJSON } from '@/utils'

export default {
  name: 'OgTable',
  components: {
    OgAction,
    JsonViewer
  },
  props: {
    columns: {
      type: Array,
      default: function() {
        return []
      }
    },
    list: {
      type: Array,
      default: function() {
        return []
      }
    },
    tableHeight: {
      type: Number,
      default: 700
    },
    defaultSort: {
      type: Object,
      default: function() {
        return {}
      }
    },
    sortChange: {
      type: Function,
      default: function() {}
    },
    selectionChange: {
      type: Function,
      default: function() {}
    },
    selection: {
      type: Boolean,
      default: false
    },
    rowClassName: {
      type: Function,
      default: function() {}
    },
    index: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    permissionFields: {
      type: Array,
      default: function() {
        return ['*']
      }
    }
  },
  data() {
    return {
      isJSON
    }
  },
  methods: {
    showColumn(item) {
      if (item.type === 'action') {
        return item.actions.length > 0
      } else {
        return checkFields(this.permissionFields, item.prop)
      }
    }
  }
}
</script>

<style>
.image-slot1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
  color: #909399;
  width: 100%;
  height: 100%;
  font-size: 40px;

}
.el-tag {
  margin-left: 2px;
}
</style>
