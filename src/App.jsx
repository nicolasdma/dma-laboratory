import React, {Suspense} from "react"
import {Canvas} from '@react-three/fiber'
import {Environment, OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import Stickers from './Stickers'
import BasicParticles from './Particles'

const App = () => (
  <Suspense>
    <Canvas shadows camera={{position: [0, 0, 9], fov: 16}}>
      <Perf position="top-right" showGraph={false} />
        {/* <Stickers /> */}
        <BasicParticles />
      <Environment preset="city" />
      {/* <OrbitControls makeDefault /> */}
    </Canvas>
  </Suspense>
)

export default App