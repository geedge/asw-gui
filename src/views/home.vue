<template>
  <el-switch v-model="isDark" @change="themeChange"/>
  <el-button type="primary">{{ isDark ? 'Dark' : 'Light' }}</el-button>
  <p>自定义字体主题</p>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <el-date-picker
    v-model="date"
    type="datetime"
  />
  <el-select
    v-model="value"
    placeholder="Select"
    size="large"
    style="width: 240px"
    @change="language"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <p>{{$t('overall.add') }}</p>
  <p>{{$t('overall.edit') }}</p>
  <p>{{$t('overall.save') }}</p>
  <jsonEditor></jsonEditor>
  <jsonDiff></jsonDiff>
</template>

<script setup>
import jsonEditor from '@/components/jsonEditor.vue'
import jsonDiff from '@/components/jsonDiff.vue'
import { ref, } from 'vue'
import { useI18n } from "vue-i18n"
import { useMainStore } from '@/store/index'
import { useTheme } from '@/hooks/useTheme'

const { t, locale } = useI18n()

const value = ref(locale.value)

const options = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'zh',
    label: '中文',
  },
]

const mainStore = useMainStore()

const language = (val)=>{
  locale.value = val
  mainStore.language = val
  localStorage.setItem('asg-language', val)
}

const { themeSet } = useTheme()
const isDark = ref(mainStore.theme === 'dark' )

const themeChange = (val)=>{
  themeSet(val? 'dark' : 'light')
}

const date = ref('')

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

</script>

<style lang="scss" scoped>
p {
  color: var(--color-text-primary);
}
</style>
