import { createRef, onMounted } from '@viewfly/core'
import * as monaco from 'monaco-editor'
import { MonacoJsxSyntaxHighlight, getWorker } from 'monaco-jsx-syntax-highlight'
import { withScopedCSS } from '@viewfly/scoped-css'
import { transform } from '@babel/standalone'

import css from './editor.scoped.scss'

const defaultValue = `import { createSignal } from '@viewfly/core'

const count = createSignal(0)

export default function App() {
  return () => (
    <div>
      <div>{count()}</div>
      <button onClick={() => {
          count.set(count() + 1)
      }}>click me</button>
    </div>
  )
}`

export function Editor() {
  const editorRef = createRef<HTMLElement>()

  const types: Record<string, string> = process.env.VIEWFLY_TYPES as any || {}
  onMounted(() => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(`
    declare module '@viewfly/core' {
      ${types.core}
    }
    `, 'file:///node_modules/@types/viewfly__core/index.d.ts')

    monaco.languages.typescript.typescriptDefaults.addExtraLib(`
    declare module '@viewfly/platform-browser' {
      ${types.platformBrowser}
    }
    `, 'file:///node_modules/@types/viewfly__platform-browser/index.d.ts')

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      target: monaco.languages.typescript.ScriptTarget.ESNext,
      skipLibCheck: false,
      esModuleInterop: true
    })

    const monacoJsxSyntaxHighlight = new MonacoJsxSyntaxHighlight(getWorker(), monaco)

    const model = monaco.editor.createModel(
      defaultValue,
      'typescript',
      monaco.Uri.parse('App.tsx')
    )
    const editor = monaco.editor.create(editorRef.current!, {
      language: 'typescript',
      automaticLayout: true,
      fontSize: 14,
      minimap: { enabled: false },
      contextmenu: false
    })
    editor.setModel(model)

    const { highlighter, dispose } = monacoJsxSyntaxHighlight.highlighterBuilder({ editor: editor })
    highlighter()
    editor.onDidChangeModelContent(() => {
      const d = transform(editor.getValue(), {
        presets: [['react', {
          runtime: 'automatic',
          importSource: '@viewfly/core'
        }], 'typescript'],
        filename: 'App.tsx'
      })
      console.log(d.code)
    })

    return () => {
      dispose()
      editor.dispose()
    }
  })
  return withScopedCSS(css, () => {
    return (
      <div class="editor" ref={editorRef}>

      </div>
    )
  })
}
