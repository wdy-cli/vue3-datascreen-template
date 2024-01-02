<template>
  <section class="scale_demo_wrap">
    <div class="scale_demo_cont" ref="dataScreenRef">123456</div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dataScreenRef = ref(null)

onMounted(() => {
  // 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
    dataScreenRef.value.style.width = `1920px`
    dataScreenRef.value.style.height = `1080px`
  }
  // 为浏览器绑定事件
  window.addEventListener('resize', resize)
})

// 根据浏览器大小推断缩放比例
const getScale = (width = 1920, height = 1080) => {
  let ww = window.innerWidth / width
  let wh = window.innerHeight / height
  return ww < wh ? ww : wh
}

// 监听浏览器 resize 事件
const resize = () => {
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
  }
  /* // 使用了 scale 的echarts其实不需要需要重新计算缩放比例
  Object.values(dataScreen).forEach((chart) => {
    chart && chart.resize()
  }) */
}

// 销毁时触发
onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  // clearInterval(timer!);
  // Object.values(dataScreen).forEach(val => val?.dispose());
})
</script>

<style lang="scss" scoped>
.scale_demo_wrap {
  width: 100%;
  height: 100%;
  background: #f00;
  // background-repeat: no-repeat;
  // background-attachment: fixed;
  // background-position: center;
  // background-size: 100% 100%;
  // background-size: cover;

  .scale_demo_cont {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.3s;
    transform-origin: left top;
  }
}
</style>
