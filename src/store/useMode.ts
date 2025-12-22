import { createPersistStore } from './create'

const DEFAULT_CONFIG = {
  isDebug: false,
}

export const useMode = createPersistStore({ ...DEFAULT_CONFIG }, (set, get) => ({
  async updateIsDebug(value: boolean) {
    set(() => ({ isDebug: value }))
  },
}))
