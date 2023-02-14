<template>
  <v-scale-screen>
    <router-view></router-view>
  </v-scale-screen>
</template>
<script setup>
import { onMounted, provide } from 'vue'

import VScaleScreen from 'v-scale-screen'
import * as echarts from 'echarts'
provide('echart', echarts)

onMounted(() => {
  console.log()
})
</script>
<style scoped></style>
