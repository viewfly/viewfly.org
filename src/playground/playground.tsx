import { withScopedCSS } from '@viewfly/scoped-css'

import { Editor } from './editor/editor'

import css from './playground.scoped.scss'

export function Playground() {
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
            <Editor/>
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
          <div class="workbench"></div>
        </div>
      </div>
    )
  })
}
