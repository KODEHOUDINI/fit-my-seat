import { proxy } from "valtio";

const state = proxy({
  leatherColor: 0,
  modelLoadProgress: 0,
});

export { state };
