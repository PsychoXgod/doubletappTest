import { useContext } from "react"

import { StoreContext } from "@context/rootStore.context"


export function useRootStore() {
  const context = useContext(StoreContext)
  
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider")
  }

  return context
}

