import {marked} from "marked";
import type {Tokens} from "marked";

import hljs from "highlight.js/lib/core";
import plaintext from "highlight.js/lib/languages/plaintext";
import json from "highlight.js/lib/languages/json";
import yaml from "highlight.js/lib/languages/yaml";
import xml from "highlight.js/lib/languages/xml";
import properties from "highlight.js/lib/languages/properties";
import ini from "highlight.js/lib/languages/ini";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import nginx from "highlight.js/lib/languages/nginx";
import bash from "highlight.js/lib/languages/bash";
import java from "highlight.js/lib/languages/java";
import kotlin from "highlight.js/lib/languages/kotlin";
import typescript from "highlight.js/lib/languages/typescript";
import dockerfile from "highlight.js/lib/languages/dockerfile";

const renderer = new marked.Renderer();

hljs.registerLanguage("txt", plaintext);
hljs.registerLanguage("text", plaintext);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("json", json);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("conf", properties);
hljs.registerLanguage("properties", properties);
hljs.registerLanguage("ini", ini);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("nginx", nginx);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("java", java);
hljs.registerLanguage("kotlin", kotlin);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("dockerfile", dockerfile);

renderer.heading = ({tokens, depth}) => {
  const content = tokens.map(token => {
    const raw = token as (Tokens.Text | Tokens.Link);

    const {text} = raw;
    const href = raw.type === "link" ? raw.href : null;

    return href ? `<a href=${href}>${text}</a>` : text;
  }).join("");

  const id = content.toLowerCase()
    .replace(/<.*?>/g, "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z]+/g, "_");

  return `<h${depth} id="${id}">${content}</h${depth}>`;
};

renderer.code = ({text, lang, escaped}) => {
  let highlighted = "";

  try {
    highlighted = hljs.highlight(text, { language:  lang || "" }).value;
  } catch (e) {
    highlighted = hljs.highlight(text, { language: "plaintext" }).value;
  }

  const copyHandler = `window.copyCode && window.copyCode(${JSON.stringify(text)
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
  })`;

  return `<div class="code-container">
      <div class="code-header cursor-pointer" onclick="${copyHandler}">
        ${lang}
      </div>
      <pre><code class="hljs language-${lang}">${highlighted}</code></pre>
    </div>`;
};

export function markdownRenderer(markdown: string) {
  return marked(markdown, {renderer}) as string;
}