<script setup>
import {handlePaper} from "@/assets/script/paperProcess";
handlePaper('Paper20231016051529805')
</script><template>
<h2>背景图片</h2>
<hr>
<h2>需求</h2>
<p>一开始想要为网站设置一个背景图片</p>
<ul>
<li>无论怎么滚动、缩放背景就是不动</li>
</ul>
<h2>Background</h2>
<p>习惯上先设置一个包含所有元素的根元素</p>
<pre><code class="language-html">&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
</code></pre>
<p>然后很容易联想到使用<code>CSS</code>的<code>background</code></p>
<pre><code class="language-css">html, body { margin: 0; }

#root {
    width: 100%; height: 100%; 
    backround: url(&#39;background.jpg&#39;) no-repeat fixed;
}
</code></pre>
<p>内容不止窗口大小，需要滚动条了</p>
<pre><code class="language-css">html, body { margin: 0; }

#root {
    width: 100%; min-height: 100%; 
    backround: url(&#39;background.jpg&#39;) no-repeat fixed;
}
</code></pre>
<p>使用原生的HTML可以，但是使用<code>vue</code>框架发现仍然不太好使，很多地方都不太对，甚至使用伪元素<code>#root::after</code>也没办法实现，干脆</p>
<h2><code>&lt;Img/&gt;</code></h2>
<pre><code class="language-html">&lt;div&gt;
    &lt;img src=&quot;background.jpg&quot; alt=&quot;background&quot;/&gt;
&lt;/div&gt;
</code></pre>
<pre><code class="language-css">img {
    width: 100vw;
    z-index: -999;
}
</code></pre>
<p>直接将一个元素设置成背景图片，这样设置的话，再结合<code>vue</code>的组件，或者条件渲染等，可以更灵活的动态修改背景图片</p>

</template><style>
@import "@/assets/style/paper.css";
</style>