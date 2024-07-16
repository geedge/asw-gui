<template>
  <div id="notFound">
    <h1>404</h1>
    <p>{{$t('overall.notFound')}}</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#notFound {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 72px;
    color: var(--text);
    margin-bottom: 20px;
  }
  p {
    font-size: 46px;
    color: var(--text_secondary);
  }
}
</style>
