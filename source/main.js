import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { Editor } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Code from '@tiptap/extension-code'
import Link from '@tiptap/extension-link'
import Strike from '@tiptap/extension-strike'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import HorizontalRule from '@tiptap/extension-horizontal-rule'

const editor = new Editor({
  element: document.querySelector('.element'),
  autofocus: "end",
  extensions: [
    Document,
    Paragraph,
    Text,
    Bold,
    Italic,
    Code,
    Strike,
    Underline,
    Subscript,
    Superscript,
    HorizontalRule,
    Heading.configure({
      levels: [1,2,3,4,5]
    }),
    Link.configure({
      openOnClick: false,
      autolink: true,
      defaultProtocol: 'https',
      protocols: ['http', 'https']
    }),
    Highlight.configure({
      multicolor: true
    })
  ],
  content: '<p>Hello World!</p>',
});

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

document.getElementById("bold-button").addEventListener("click", boldToggleEvent);
document.getElementById("code-button").addEventListener("click", codeToggleEvent);
document.getElementById("strike-button").addEventListener("click", strikeToggleEvent);
document.getElementById("italic-button").addEventListener("click", italicToggleEvent);
document.getElementById("done-button").addEventListener("click", doneEvent);

setupCounter(document.querySelector('#counter'));

function boldToggleEvent() {
  editor.chain().focus().toggleBold().run();
}

function codeToggleEvent() {
  editor.chain().focus().toggleCode().run();
}

function italicToggleEvent() {
  editor.chain().focus().toggleItalic().run();
}

function strikeToggleEvent() {
  editor.chain().focus().toggleStrike().run();
}

function doneEvent() {
  const text = editor.getHTML();
  // const text = editor.getJSON();
  // const text = editor.getText();
  document.getElementById("final-text").innerHTML = "<code><pre>" + text + "</pre></code>";
}
