import React from "react"
import {useTexture, Decal} from '@react-three/drei'

const PRICE_TAG_IMAGES = ["./price-tag-1.png", "./sticker-2.webp"]
const DEFAULT_SCALE = [0.5, 0.25, 0.25]
const THRESHOLD = 10

const Stickers = () => {
  const [initialMousePosition, setInitialMousePosition] = React.useState({x: 0, y: 0})
  const [stickers, setStickers] = React.useState([])
  const textures = useTexture(PRICE_TAG_IMAGES)
  
  const handleOnMouseDown = React.useCallback((event) => {
    setInitialMousePosition({x: event.clientX, y: event.clientY})
  }, [])

  const handleOnMouseUp = React.useCallback((event) => {
    if (!(Math.abs(event.clientX - initialMousePosition.x) > THRESHOLD || Math.abs(event.clientY - initialMousePosition.y) > THRESHOLD)) {
      setStickers([...stickers, {
        position: event.point,
        rotation: Math.PI * (Math.random() * (2.2 - 1.8) + 1.8),
        scale: DEFAULT_SCALE.map((s) => s + Math.random() * 0.1),
        texture: textures[Math.floor(Math.random() * textures.length)],
        renderOrder: stickers.length
      }])
    }
  }, [stickers, initialMousePosition, textures])

  return (
    <>
    <color attach="background" args={['#cc0b09']} />
      <mesh castShadow receiveShadow onPointerDown={handleOnMouseDown} onPointerUp={handleOnMouseUp}>
        <sphereGeometry args={[1, 64, 64]} />
        {stickers.map((sticker, i) => (
          <Decal key={i} {...sticker} >
            <meshPhysicalMaterial
              map={sticker.texture}
              roughness={0.6}
              clearcoat={0.5}
              metalness={0.8}
              polygonOffsetFactor={-10}
              transparent={true}
              polygonOffset={true}
              map-flipY={false}
              depthWrite={false}
              toneMapped={false}
              />
          </Decal>
        ))}
        <meshPhysicalMaterial clearcoat={1} roughness={0} metalness={0.5} clearcoatRoughness={0} color="black" />
      </mesh>
    </>
  )
}

export default React.memo(Stickers)

useTexture.preload(PRICE_TAG_IMAGES)