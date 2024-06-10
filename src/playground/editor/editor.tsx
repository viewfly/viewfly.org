import { createRef, onMounted } from '@viewfly/core'
import * as monaco from 'monaco-editor'
import { MonacoJsxSyntaxHighlight, getWorker } from 'monaco-jsx-syntax-highlight'
import { withScopedCSS } from '@viewfly/scoped-css'

import css from './editor.scoped.scss'

export interface EditorProps {
  code: string,
  onChange(code: string): void
}

export function Editor(props: EditorProps) {
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
      props.code,
      'typescript',
      monaco.Uri.parse('App.tsx')
    )
    const editor = monaco.editor.create(editorRef.current!, {
      language: 'typescript',
      automaticLayout: true,
      fontSize: 14,
      minimap: { enabled: false },
      contextmenu: false,
      padding: {
        top: 10
      }
    })
    editor.setModel(model)

    const { highlighter, dispose } = monacoJsxSyntaxHighlight.highlighterBuilder({ editor: editor })
    highlighter()
    editor.onDidChangeModelContent(() => {
      props.onChange(editor.getValue())
    })

    return () => {
      model.dispose()
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
