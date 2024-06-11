import React, { Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Stickers from './Stickers'
import Particles from './Particles'

const buttonContainerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 100,
}

const App = () => {
  const [currentView, setCurrentView] = React.useState('Stickers')
  const renderView = React.useMemo(() => {
    switch (currentView) {
      case 'Stickers':
        return <Stickers />
      case 'Particles':
        return <Particles />
      default:
        return <Stickers />
    }
  }, [currentView])

  return (
    <>
      <div style={buttonContainerStyle}>
        <button onClick={() => setCurrentView('Stickers')}>Stickers</button>
        <button onClick={() => setCurrentView('Particles')}>Particles</button>
      </div>
      <Suspense>
        <Canvas shadows camera={{ position: [2, 2, 9], fov: 16 }}>
          <color attach="background" args={['#cc0b09']} />
          <Perf position="top-right" showGraph={false} />
          {renderView}
          <OrbitControls makeDefault />
        </Canvas>
      </Suspense>
    </>
  )
}

export default App