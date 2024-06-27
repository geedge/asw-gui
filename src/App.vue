<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useI18n } from "vue-i18n"
import { useMainStore } from '@/store/index'
import { useTheme } from '@/hooks/useTheme'

const { messages } = useI18n()

// elmentui组件国际化
const mainStore = useMainStore()
const locale = computed(() => {
  return mainStore.language === 'zh' ? messages.value['zh'] : messages.value['en']
})

// 初始化主题
const { themeSet } = useTheme()
themeSet(mainStore.theme)
</script>
