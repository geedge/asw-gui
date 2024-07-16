<template>
  <div id="layout">
    <layout-header></layout-header>
    <div id="layout-container">
      <left-menu></left-menu>
      <div class="pageContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import layoutHeader from '@/components/layout/layoutHeader.vue';
import leftMenu from '@/components/layout/leftMenu.vue';
</script>

<style lang="scss" scoped>
#layout {
  width: 100%;
  height: 100%;
  #layout-container {
    height: calc(100vh - 70px);
    position: relative;
    .pageContent {
      padding: 18px 45px 32px 107px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 18px 0;
      overflow-x: hidden;
      overflow-y: auto;
      position: relative;
    }
  }
}
</style>
