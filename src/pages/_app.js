import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
  <Head>

<title>Markdown Renderer with React/NextJS</title>
<meta name='description' content='A Markdown Renderer with React/NextJS.'></meta>

  </Head>
  
  <Component {...pageProps} />
  
  </>
)}
