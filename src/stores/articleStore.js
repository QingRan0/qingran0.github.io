import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import {useRoute} from "vue-router";
import {dirTree} from "@/assets/script/dirTree";


export const useArticleStore = defineStore('article', () => {
  const route = useRoute()
  // 基本信息，在每个文章的脚本paperProcess中被设置（ id, component, name, heads, date, dir ）
  const currentFileData = ref({ heads:[] })
  // Tabs
  const currentTabIndex = ref(0)
  // 大纲
  const title = computed(() => route.path.split('/').length - 2 ? `🫠 ${currentFileData.value.name}` : '🫠')
  // 分类
  const nowDir = ref(dirTree)
  const nowDirName = ref('')
  const itemList = computed(() => {
    const nameList = Object.keys(nowDir.value)
    return nameList.map((name) => {
          return {
            name: name,
            path: getRoutePath(name),
            emoji: isFile(name) ? '📜 ' : '📁 ',
            isActive: isFileActive(name)
          }
        }
      )
    }
  )
  const preDirs = []

  function isFile(item) {
    return typeof nowDir.value[item] === 'string'
  }

  function getRoutePath(item) {
    if (isFile(item)) {
      return { path: '/article/' + nowDir.value[item] }
    } else {
      return { path: route.path }
    }
  }

  function backPreDir() {
    if (preDirs.length) {
      const preDir = preDirs.pop()
      nowDirName.value = preDir.nowDirName
      nowDir.value = preDir.nowDir
    }
  }

  function selectItem(item) {
    if (!isFile(item)) {
      preDirs.push({nowDirName: nowDirName.value, nowDir: nowDir.value})
      nowDirName.value = item
      nowDir.value = nowDir.value[item]
    }
  }

  function isFileActive(item) {
    return isFile(item) && item === currentFileData.value.name
  }

  function reset() {
    currentFileData.value = { heads: [] }
    currentTabIndex.value = 0
    nowDir.value = dirTree
    nowDirName.value = ''
    preDirs.length = 0
  }

  return {
    currentFileData,
    currentTabIndex,
    title,
    nowDirName,
    itemList,
    selectItem,
    backPreDir,
    reset,
  }
})
