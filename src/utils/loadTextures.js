import { useTexture } from "@react-three/drei";

export function loadTexture(path) {
  const texture = useTexture(path);
  texture.flipY = false;
  texture.colorSpace = "srgb";
  return texture;
}
