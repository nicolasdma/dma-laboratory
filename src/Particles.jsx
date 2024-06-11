import React from "react"
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useThree } from '@react-three/fiber'
//TEST
import { Bvh } from '@react-three/drei'

const CAMERA_POSITIONS = [0, 0, 9]

const BasicParticles = () => {
  useThree(({ camera }) => {
    camera.position.set(...CAMERA_POSITIONS)
  })
  
  return (
    <>
      <color attach="background" args={['#111317']} />
      <CustomGeometryParticles count={20000} shape="sphere"/>
    </>
  )
}

const CustomGeometryParticles = ({count, shape}) => {
  const points = useRef()
  const distance = 1

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)

      let x = distance * Math.sin(theta) * Math.cos(phi)
      let y = distance * Math.sin(theta) * Math.sin(phi)
      let z = 0
  
      positions.set([x, y, z], i * 3)
    }
  
    return positions
  }, [count])

  window.addEventListener('mousemove', (e) => {
    let x
    let y
    x = (e.clientX / 760 - 1) * 2
    y = -(e.clientY / window.innerHeight) * 2 + 1

    if (points.current) {
      console.log((Math.random() - 0.5) * 0.01)
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const currentX = points.current.geometry.attributes.position.array[i3]
        const currentY = points.current.geometry.attributes.position.array[i3 + 1]
        if (currentX <= x + 0.05 && currentX >= x - 0.05 && currentY <= y + 0.05 && currentY >= y - 0.05) {
          points.current.geometry.attributes.position.array[i3] += (Math.random() - 0.5) * 0.1
          points.current.geometry.attributes.position.array[i3 + 1] += (Math.random() - 0.5) * 0.1
        }
      }
  
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default React.memo(BasicParticles);