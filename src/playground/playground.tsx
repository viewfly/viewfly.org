import { withScopedCSS } from '@viewfly/scoped-css'
import { createSignal } from '@viewfly/core'
import { transform } from '@babel/standalone'

import { Editor } from './editor/editor'

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
  function transformCode() {
    const result = transform(code(), {
      presets: [['react', {
        runtime: 'automatic',
        importSource: '@viewfly/core'
      }], 'typescript'],
      filename: 'App.tsx'
    })

    return result.code || ''
  }

  function updateCode(sourceCode: string) {
    code.set(sourceCode)
  }
  const viewflyCode: Record<string, string> = process.env.SOURCE_CODE as any || {}
  const coreURL = URL.createObjectURL(new Blob([viewflyCode.core], {type: 'application/javascript'}))
  const runtimeURL = URL.createObjectURL(new Blob([viewflyCode.runtime], {type: 'application/javascript'}))
  const browserURL = URL.createObjectURL(new Blob([viewflyCode.platformBrowser], {type: 'application/javascript'}))
  const reflectMetadataURL = URL.createObjectURL(new Blob([viewflyCode.reflectMetadata], {type: 'application/javascript'}))
  return withScopedCSS(css, () => {
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
              reflectMetadata={reflectMetadataURL}
              viewflyCore={coreURL}
              viewflyJSXRuntime={runtimeURL}
              viewflyBrowser={browserURL}/>
          </div>
        </div>
      </div>
    )
  })
}
