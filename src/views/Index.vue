<template>
  <!-- <section class="main_wrap" v-waterMarker="{ text: '版权所有<br />11', textColor: 'rgba(180, 180, 180, 0.4)' }"></section> -->
  <section class="main_wrap" id="dataScreen"></section>

  <!-- 水印 -->
  <water-mark />
</template>

<script setup>
//   import { ref } from 'vue'

import { onMounted, onBeforeUnmount } from 'vue'
import autofit /* , { elRectification } */ from 'autofit.js'

onMounted(() => {
  autofit.init(
    {
      // el: '#app',
      el: '#dataScreen',
      dh: 1080,
      dw: 1920,
      resize: true,
      ignore: ['.demo_wrap', '.scale_demo_wrap']
    },
    false
  )
})

onBeforeUnmount(() => {
  autofit.off()
})

console.log(
  '%cautofit.js is running',
  'font-weight: bold; color: #ffb712; background:linear-gradient(-45deg, #bd34fe 50%, #47caff 50% );background: -webkit-linear-gradient( 120deg, #bd34fe 30%, #41d1ff );background-clip: text;-webkit-background-clip: text; -webkit-text-fill-color:linear-gradient( -45deg, #bd34fe 50%, #47caff 50% ); padding: 8px 12px; border-radius: 4px;'
)
</script>

<style lang="scss" scoped>
.main_wrap {
  width: 100%;
  height: 100%;
  background: #091f3f;
  color: #fff;
  padding-bottom: 1px;
}
</style>
