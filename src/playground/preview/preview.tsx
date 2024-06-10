import { withScopedCSS } from '@viewfly/scoped-css'

import css from './preview.scoped.scss'

export interface PreviewProps {
  code: string
  viewflyCore: string
  viewflyBrowser: string
  viewflyJSXRuntime: string
  reflectMetadata: string
}

export function Preview(props: PreviewProps) {
  return withScopedCSS(css, () => {
    const html = `
<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <script type="importmap">
    {
      "imports": {
        "reflect-metadata": "${props.reflectMetadata}",
        "@viewfly/core": "${props.viewflyCore}",
        "@viewfly/core/jsx-runtime": "${props.viewflyJSXRuntime}",
        "@viewfly/platform-browser": "${props.viewflyBrowser}"
      }
    }
  </script>
  <style>
  #console {
    color: red;
    padding: 10px;
    font-size: 14px;
    font-family: Microsoft YaHei Mono, Menlo, Monaco, Consolas, Courier New, monospace;
  }
  </style>
</head>
<body>
<div id="app"></div>
<pre id="console"></pre>
<script type="module">
  ${props.code}
  </script>
</body>
</html>
    `
    const docSrc = URL.createObjectURL(new Blob([html], {type: 'text/html'}))
    return (
      <div class="preview">
        <iframe src={docSrc} frameBorder="0"></iframe>
      </div>
    )
  })
}
