import React, { ReactElement } from 'react'
import { useData } from 'src/api/query'
export type PageProviderProps = {}


const useInternalHook = (p: PageProviderProps) => {
  
  return {
    data: useData()
  }
}

export const Context = React.createContext<
  ReturnType<typeof useInternalHook> | undefined
>(undefined)

export const usePageProvider = () => {
  const c = React.useContext(Context)
  if (!c) {
    throw new Error('PageProviderContext')
  }
  return c
}

export const PageProvider = (p: {
  children: ReactElement
  props: PageProviderProps
}) => {
  const h = useInternalHook(p.props)
  return <Context.Provider value={h}>{p.children}</Context.Provider>
}
