import React from 'react'

const Overlay = () => {
  return (
    <div style={{ userSelect: 'none' }}>
      <div style={{ position: 'absolute', top: 40, left: 40 }}>
        <p>stickers</p>
        <p style={{ fontSize: 16 }}>
          Inspired on{' '}
          <a
            target="_blank"
            href="https://x.com/tkm_hmng8/status/1788768352208601519"
            rel="noopener"
          >
            @tkm_hmng8's tweet
          </a>
        </p>
      </div>
      <div style={{ pointerEvents: 'none', position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', gap: 20, alignItems: 'center', padding: 40 }}>
        {/* <a target="_blank" href="https://x.com/dma" rel="noopener">
          <img src="./face.png" style={{ width: 80, borderRadius: 15 }} />
        </a> */}
        <div style={{ position: 'relative', flex: 1, marginLeft: 0, display: 'flex', alignItems: 'flex-end', gap: 10, justifyContent: 'space-between' }}>
          <div>
            <div>
              Lab
            </div>
          </div>
          <a
            target="_blank"
            href="https://github.com/nicolasdma/dma-laboratory/blob/master/src/Stickers.jsx"
            rel="noopener"
          >
            &lt;&gt;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Overlay