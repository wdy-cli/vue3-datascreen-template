<template>
  <section class="demo_cont">
    <div class="servarea_wrap">
      <service-main-2 ref="refServiceMain2" />
    </div>
  </section>
</template>

<script setup>
// 引入库
import { ref, onMounted } from 'vue'
// 引入组件
import ServiceMain2 from './components/ServiceMain2.vue'

/**
 * 定义数据
 * 常量 - 变量
 */
// ref
const refServiceMain2 = ref(null)

onMounted(() => {
  refServiceMain2.value.setImgUrlByCity() // 设置数据
})
</script>

<style lang="scss" scoped>
@import url(../styles/demoCommonStyle.scss);

.demo_cont {
  .servarea_wrap {
    width: 100%;
    min-height: 100px;
    margin-top: 10px;
  }
}
</style>
