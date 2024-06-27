<template>
  <div class="box" style="width: 100%">
    <codemirror
      ref="editor"
      v-model:value="value"
      :options="cmOptions"
      @change="change"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { useMainStore } from '@/store/index';
const mainStore = useMainStore();
import Codemirror from 'codemirror-editor-vue3';
// language
import 'codemirror/mode/javascript/javascript.js';
// theme 主题
import 'codemirror/theme/ttcn.css';
import 'codemirror/theme/monokai.css';
// 折叠功能
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/brace-fold.js';
// 自动提示
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint.js';

// 代码校验 lint
import 'codemirror/addon/lint/lint.js';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/json-lint.js';
import jsonlint from 'jsonlint-mod';
// 其他
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/closebrackets.js';
window.jsonlint = jsonlint;

let value = {
  a: {
    b: {
      c: 666,
    },
  },
  text: {
    demo: 999,
  },
};

value = JSON.stringify(value, null, 2); // 数组对象格式化的逻辑


const hint = (cm, options) => {
  //获取CodeMirror上面的一个方法
  const Pos = CodeMirror.Pos;
  // 获取光标位置
  const cursor = cm.getCursor();
  // 获取当前行的内容
  const cursorLine = cm.getLine(cursor.line)
  // 获取当前单词的信息
  const token = cm.getTokenAt(cursor);
  // 当前正在输入的单词
  const currentStr = token.string;

  const keyword = [
    'name', 'nameaaa', 'namebbb', 'text', 'aaa', 
  ]
  const replaceStr = currentStr.replace(/"/g, '')
 
  // 用来放提示的单词
  const found = [];
  keyword.forEach(item=>{
    if(item.includes(replaceStr)){
      found.push(`"${item}"`)
    }
  })

  const result = {
    list: found,
    from: Pos(cursor.line, token.start),
    to: Pos(cursor.line, token.end),
  };
  return result;
};

const showHint = (cm, e)=>{
  const arr = [13,38,40] // 回车 上下箭头不触发提示 防止选择时冲突
  if(arr.find((item)=>item == e.keyCode)){
    return
  }
  editor.value?.cminstance?.showHint()
}

onMounted (()=>{
  editor.value?.cminstance?.on('keyup', showHint)
})
onUnmounted(()=>{
  editor.value?.cminstance?.off('keyup', showHint)
})


// json的配置
let cmOptions = {
  mode: 'application/json', //编辑器的编程语言
  theme: mainStore.theme === 'dark' ? 'monokai' : 'ttcn',
  readOnly: false, // 只读
  tabSize: 4, // 缩进单元格为 4 个空格
  indentUnit: 2,
  viewportMargin: Infinity, // 指定当前滚动到视图中内容上⽅和下⽅要渲染的⾏数
  autofocus: false, // 自动聚焦
  firstLineNumber: 1, // 从哪个数字开始计算行数
  lineNumbers: true, // 是否显示左边换行数字
  lineWrapping: true, // 是否应对长行进行滚动或换行
  lint: true, // 打开json校验
  matchBrackets: true, // 在光标点击紧挨{、]括号左、右侧时，自动突出显示匹配的括号 }
  autoCloseBrackets: true, // 自动关闭括号
  gutters: [
    'CodeMirror-linenumbers',
    'CodeMirror-foldgutter',
    'CodeMirror-lint-markers',
  ],
  extraKeys: {
    // 触发提示按键
    Ctrl: 'autocomplete',
  },
  hintOptions: {
    // 自定义提示选项
    completeSingle: false, // 当匹配只有一项的时候是否自动补全
    hint: hint,
  },
};

const editor = ref(null);

watch(
  () => mainStore.theme,
  (value) => {
    let theme = value === 'dark' ? 'monokai' : 'ttcn';
    editor.value?.cminstance?.setOption('theme', theme);
  }
);

const change = (val, cm) => {
  try {
    // console.log(jsonlint.parse(val));
  } catch (error) {
    console.log(error.message);
  }
};
</script>

<style lang="scss" scoped>
</style>
