<template>
  <section class="scale_demo_wrap" :style="style">empty</section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { debounce } from '@/utils/tools'

const width = '1920px'
const height = '1080px'
const style = ref(`width: ${width};height: ${height};transform: scale(1) translate(-50%, -50%)`)

const setScale = () => {
  // console.log(style.value)
  const w = window.innerWidth / parseInt(width, 10)
  const h = window.innerHeight / parseInt(height, 10)
  style.value = `width: ${width};height: ${height};transform: scale(${w},${h}) translate(-50%, -50%)`
}

onMounted(() => {
  setScale()
  window.addEventListener('resize', debounce(setScale, 1000))
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', setScale)
})
</script>

<style lang="scss" scoped></style>
