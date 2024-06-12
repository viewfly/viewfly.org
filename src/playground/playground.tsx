import { withScopedCSS } from '@viewfly/scoped-css'
import { createSignal } from '@viewfly/core'

import css from './playground.scoped.scss'
import { Preview } from './preview/preview'

const defaultValue = `import { createSignal } from '@viewfly/core'
import { createApp } from '@viewfly/platform-browser'

const count = createSignal(0)

function App() {
  return () => (
    <div>
      <div>{count()}</div>
      <button onClick={() => {
          count.set(count() + 1)
      }}>click me</button>
    </div>
  )
}

createApp(<App/>).mount(document.getElementById('app'))
`

export function Playground() {
  const code = createSignal(defaultValue)
  const babel = createSignal<any>(null)
  let runtimeLibrary: Record<string, string> = {}
  let Editor: any

  Promise.all([
    import('@babel/standalone'),
    import('./lib'),
    import('./editor/editor'),
  ]).then(([b, lib, editor]) => {
    babel.set(b)
    runtimeLibrary = lib.getLibUrl()
    Editor = editor.Editor
  })

  let prevCode = ''

  function transformCode() {
    try {
      const result = babel!().transform(code(), {
        presets: [['react', {
          runtime: 'automatic',
          importSource: '@viewfly/core'
        }], 'typescript'],
        filename: 'App.tsx'
      })

      prevCode = result.code || ''
      return prevCode
    } catch (e) {
      const errorJSON = JSON.parse(JSON.stringify(e))
      return prevCode + `document.getElementById('console').innerText = \`${JSON.stringify(errorJSON, null, 2)}\``
    }
  }

  function updateCode(sourceCode: string) {
    code.set(sourceCode)
  }


  return withScopedCSS(css, () => {
    if (!babel()) {
      return (
        <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      )
    }

    return (
      <div class="playground">
        <div class="playground-item source-code">
          <div class="tab-bar">
            <div class="tab-bar-item">
              <span class="file-name">App.tsx</span>
              <button type="button" class="close-btn">&times;</button>
            </div>
            <div class="tab-bar-item">
              <span>App.tsx</span>
              <button type="button" class="close-btn">&times;</button>
            </div>
          </div>
          <div class="workbench">
            <Editor onChange={updateCode} code={code()}/>
          </div>
        </div>
        <div class="playground-item preview">
          <div class="tab-bar">
            <div class="tab-bar-item">
              <span class="file-name">App.tsx</span>
              <button type="button" class="close-btn">&times;</button>
            </div>
            <div class="tab-bar-item">
              <span>App.tsx</span>
              <button type="button" class="close-btn">&times;</button>
            </div>
          </div>
          <div class="workbench">
            <Preview
              code={transformCode()}
              reflectMetadata={runtimeLibrary.reflectMetadataURL}
              viewflyCore={runtimeLibrary.coreURL}
              viewflyJSXRuntime={runtimeLibrary.runtimeURL}
              viewflyBrowser={runtimeLibrary.browserURL}/>
          </div>
        </div>
      </div>
    )
  })
}
