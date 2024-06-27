<template>
  <div>
    <CodeDiff
      :hideHeader="false"
      language="json"
      :old-string="oldJson"
      new-string="{}"
      output-format="line-by-line"
      :theme="theme"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { CodeDiff } from 'v-code-diff';
import { useMainStore } from '@/store/index';
const mainStore = useMainStore();


let oldJson = {
  a: {
    b: {
      c: "66666666666666666666666666666666666666666666666",
    },
  },
};

oldJson = ref(JSON.stringify(oldJson, null, 2));

let theme = ref(mainStore.theme);

watch(
  () => mainStore.theme,
  (value) => {
    theme.value = value
  }
);

</script>

<style lang="scss" scoped></style>
