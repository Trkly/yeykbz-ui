<template>
  <div class="table">
    <div class="table-wrapper">
      <div class="table-header">
        <div :class="['table-header-row', props.stripe ? 'is-stripe' : '']">
          <div
            v-for="column in props.columns"
            :key="column.key"
            :class="['table-header-cell', props.border ? 'is-border' : '']"
          >
            {{ column.title }}
          </div>
        </div>
      </div>

      <div class="table-body">
        <div
          v-for="row in props.data"
          :key="row.key"
          :class="['table-row', props.stripe ? 'is-stripe' : '']"
        >
          <div
            v-for="column in props.columns"
            :key="column.key"
            :class="['table-row-cell', props.border ? 'is-border' : '']"
          >
            {{ row[column.dataIndex] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TableColumns {
  title: string;
  dataIndex: string;
  key: string;
}
interface TableProps {
  data: Record<string, any>[];
  columns: TableColumns[];
  border?: boolean;
  stripe?: boolean;
}
const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  border: false,
  stripe: false,
});

defineOptions({ name: "YTable" });
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  box-sizing: border-box;
}

.table-wrapper {
  overflow-x: auto;
}

.table-header,
.table-body {
  display: block;
}
.table-header {
  border-bottom: 1px solid #ebeef5;
}
.table-header-row {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.table-row {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.table-header-cell,
.table-row-cell {
  padding: 12px 16px;
  text-align: left;
}

.table-header-cell {
  flex: 1;
  font-weight: bold;
}

.table-row-cell {
  flex: 1;
}

.is-border {
  border: 1px solid #ebeef5;

  .table-header {
    border-bottom: 0;
  }
}

.is-stripe {
  &:nth-child(2n) {
    background-color: #f7f7f7;
  }
}
.table-row:hover {
  background-color: #f5f7fa;
}
</style>
