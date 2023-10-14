import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import TransferView from "@/views/TransferView.vue";
import AboutView from "@/views/AboutView.vue";
import ArticleView from "@/views/ArticleView.vue";
import {useArticleStore} from "@/stores/articleStore";
import {filesData} from "@/assets/script/fileMap";
import ThemeView from "@/views/ThemeView.vue";


function getBasicRoute() {
  return [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '主页'
      },
      component: HomeView
    },
    {
      path: '/article',
      name: 'article',
      meta: {
        title: '文章'
      },
      component: ArticleView,
      children: []
    },
    {
      path: '/transfer',
      name: 'transfer',
      meta: {
        title: '传送'
      },
      component: TransferView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于'
      },
      component: AboutView
    },
    {
      path: '/theme',
      name: 'theme',
      meta: {
        title: '主题'
      },
      component: ThemeView
    },
  ]
}

function loadArticles(routes) {
  const modules = import.meta.glob('../components/articles/*.vue');
  for (const path in modules) {
    const articleId = path.substring(path.lastIndexOf('/') + 1).split('.')[0];
    const routeOption = {
      path: articleId,
      meta: {
        title: filesData[articleId].name,
      },
      component:  modules[path]
    }
    routes[1]['children'].push(routeOption)
  }
}


// 配置路由内容
const routes = getBasicRoute()
loadArticles(routes)


// 创建路由
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})
console.log(import.meta.env.BASE_URL)


// 生命周期
const lastPath = new Map()
router.beforeEach((to, from) => {
  const articleStore = useArticleStore()
  let finalTo = true

  // 保留浏览路由
  const fromPath = from.fullPath
  lastPath.set(fromPath.substring(0, fromPath.lastIndexOf('/')), fromPath)

  // 恢复浏览路由，（如果to路径是from路径的前缀，代表返回 => 清空状态）
  if (from.fullPath.indexOf(to.fullPath) === -1) {
    finalTo = lastPath.get(to.fullPath)
  } else {
    lastPath.delete(to.fullPath)
    if (to.path === '/article') {
      articleStore.reset()
    }
  }

  return finalTo
})


router.afterEach((to, from) => {
  // 更改网页标题
  document.title = `${to.meta.title}`
})

export default router
