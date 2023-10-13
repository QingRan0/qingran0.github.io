import {useArticleStore} from "@/stores/articleStore";
import {onMounted} from "vue";
import ClipboardJS from "clipboard";
import hljs from 'highlight.js';

import {filesData} from "@/assets/script/fileMap";

export function handlePaper(id) {
    const store = useArticleStore()
    const fileData = filesData[id]
    onMounted(() => {
        // 标题：提取标题
        fileData.heads = Array.from(document.querySelectorAll('#paper h1, #paper h2, #paper h3, #paper h4, #paper h5, #paper h6'))
        store.currentFileData = fileData

        // 代码：代码高亮
        hljs.highlightAll()
        const preCodes = Array.from(document.querySelectorAll('#paper pre code'))
        for (let code of preCodes) {
            code.style.background = 'rgba(0, 0, 0, 0)'
        }

        // 代码：代码类型提示 + 代码复制
        for (let code of preCodes) {
            const langSpan = document.createElement('span')
            langSpan.classList.add('lang')
            const language = code.getAttribute('class').match(/language-[^ ]+/)[0].substring(9)
            langSpan.textContent = `🌸${language}`
            langSpan.addEventListener('click', clickLang)

            const pre = code.parentElement
            pre.classList.add('pre')
            pre.prepend(langSpan)
        }
        const clipboard = new ClipboardJS('.lang', {
            target(elem) {
                return elem.nextElementSibling
            }
        })
        clipboard.on('success', function(e) {
            e.clearSelection();
        });

        // 链接:：链接美化 + 链接在新窗口打开
        const links = Array.from(document.querySelectorAll('#paper a'))
        for (let link of links) {
            const decorate = document.createElement('span')
            decorate.textContent = '🚀'
            link.parentElement.insertBefore(decorate, link)
            link.setAttribute('target', '__blank')
        }

        // 图片:：图片美化
        const images = Array.from(document.querySelectorAll('#paper img'))
        for (let img of images) {
            img.addEventListener('error', () => {
                const alt = document.createElement('span')
                alt.textContent = '🚧' + img.getAttribute('alt')
                const parent = img.parentElement
                parent.insertBefore(alt, img)
                parent.removeChild(img)
            })
        }
    })
}

export function clickLang(event) {
    const lang = event.target
    const code = lang.nextElementSibling
    const text = lang.textContent
    lang.textContent = '🌈Copied!'
    setTimeout(() => {lang.textContent = text}, 2000)
}