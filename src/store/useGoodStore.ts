import {create} from "zustand/react";

type useGoodStoreType = {

}

export const useGoodStore = create<useGoodStoreType>((set) => ({
  token: "",
}));