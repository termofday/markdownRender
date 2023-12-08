'use client'

import MarkdownLegend from './component/accordion';
import { Inter } from 'next/font/google'
import { marked } from 'marked'
import React, { useState, useEffect, useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  const [content, setContent] = useState("");

  // wie $(''), Referenz, wird im Zielobjekt via ref={editRef} verankert! 
  const editRef = useRef(null);
  const prevRef = useRef(null);

  // useEffect für Seiteneffeke wie DOM-Manipulation -> EventListener
useEffect(() => {

  setContent(editRef.current.value)

  const handleTyping = () => {
    setContent(editRef.current.value);
  };

  if(editRef.current) {
    editRef.current.addEventListener("input", handleTyping);
    editRef.current.addEventListener("change", handleTyping);
  }

  return () => {

    if (editRef.current) {
      editRef.current.removeEventListener("input", handleTyping);
      editRef.current.removeEventListener("change", handleTyping);
    }
  };
}, [content]);
// wenn content +- dann useEffect laden! Leer wäre = mount/demount laden!

  return (
    <main
      className={`animate-fadeIn opacity-0 animate flex min-h-screen flex-col p-8 ${inter.className}`}
    >

    <div>
      <h1 className={'text-3xl font-semibold'}>Markdown Preview Render</h1>
    </div>

    <div>
      <MarkdownLegend />
    </div>

    <div>
    <div className={'w-full text-white p-1 bg-slate-700 mt-5 '}>Raw Markdown</div>
      <textarea ref={editRef} id="editor" className={'text-white p-1 w-full h-60 bg-gray-500'}>{"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"}</textarea>
    </div>

    {// when typing into editor, preview should updated with current content of editor.
    }
    <div className={'w-full text-white p-1 bg-slate-700 mt-5'}>Rendered Markdown</div>
    {/* innerHTML dangerous; it's a static site ...  */}
    <div className={'text-white bg-gray-500 p-1 w-full min-h-fit'} ref={prevRef} id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(content) }}> 
    </div>
    

    <div className='mt-10 text-sm'>

        <div className='text-center'><b>Tech</b>: JavaScript/JSX | React/NextJS |  CSS/TailwindCSS | Marked as parser for Markdown</div>
        <div className='text-center'>Created by <a href="https://haustein.in">Hendrik Haustein</a></div>
    </div>


    </main>
  )
}
