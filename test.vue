<template>
  <div>
    <el-alert @close=""></el-alert>
    <el-aside>
      <template #default="props">

      </template>
    </el-aside>
    <el-autocomplete>
      <template #append>

      </template>
    </el-autocomplete>
    <el-backtop></el-backtop>
    <el-badge></el-badge>
    <el-breadcrumb></el-breadcrumb>
    <el-breadcrumb-item></el-breadcrumb-item>
    <el-button></el-button>
    <el-button-group></el-button-group>
    <el-calendar>
      <template #dateCell="{ date, data }">
        <div>{{ date }}</div>
        <div>{{ data.day }}</div>
      </template>
    </el-calendar>
  </div>
</template>

<script setup>
</script>
