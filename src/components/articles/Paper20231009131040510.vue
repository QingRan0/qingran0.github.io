<script setup>
import {handlePaper} from "@/assets/script/paperProcess";
handlePaper('Paper20231009131040510')
</script><template>
<h1>1-1</h1>
<h2>2-2</h2>
<h3>3-3</h3>
<h4>4-4</h4>
<h5>5-5</h5>
<h6>6-6</h6>
<hr>
<p><strong>bold text</strong></p>
<hr>
<p><em>italicized text</em></p>
<hr>
<blockquote>
<p>block quote</p>
</blockquote>
<hr>
<ol>
<li>Fist item</li>
<li>Second item</li>
<li>Third item</li>
</ol>
<hr>
<ul>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ul>
<hr>
<p><code>code</code></p>
<hr>
<p><a href="http://www.thisisalink.com">link title</a></p>
<hr>
<p><img src="" alt="image alt text"></p>
<hr>
<table>
<thead>
<tr>
<th>table</th>
<th>table</th>
</tr>
</thead>
<tbody><tr>
<td>Header</td>
<td>Title</td>
</tr>
</tbody></table>
<hr>
<pre><code class="language-java">this.javaCode
</code></pre>
<hr>
<p>Here&#39;s a sentence with a footnote. [^1]</p>
<p>[^1]: This is the footnote.</p>
<hr>
<h3>My Great Heading {#custom-id}</h3>
<hr>
<p><del>The world is flat.</del></p>
<hr>
<p>That is so funny! :joy:</p>

</template><style>
@import "@/assets/style/paper.css";
</style>