<template>
  <YTable stripe :data="tableData" :columns="columns"></YTable>
</template>

<script setup lang="ts">
const tableData = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {
    key: "3",
    name: "范冰冰",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {
    key: "4",
    name: "李冰冰",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
</script>

<style scoped></style>
