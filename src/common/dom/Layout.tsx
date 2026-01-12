'use client'

import { Suspense, useRef } from 'react'
import Scene from '../../common/canvas/Scene'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      {children}

      {/* 3D Scene - always mounted but hidden in 2D mode to preserve WebGL context */}
      <Suspense fallback={null}>
        <Scene
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
          }}
          eventSource={ref}
          eventPrefix='client'
        />
      </Suspense>
    </div>
  )
}

export { Layout }
