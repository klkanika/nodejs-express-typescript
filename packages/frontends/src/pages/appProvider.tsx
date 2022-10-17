import React, { ReactElement } from 'react'
export type AppProviderProps = {}

const useInternalHook = (p: AppProviderProps) => {
  return {
    
  }
}

export const Context = React.createContext<
  ReturnType<typeof useInternalHook> | undefined
>(undefined)

export const useAppProvider = () => {
  const c = React.useContext(Context)
  if (!c) {
    throw new Error('AppProviderContext')
  }
  return c
}

export const AppProvider = (p: {
  children: ReactElement
  props: AppProviderProps
}) => {
  const h = useInternalHook(p.props)
  return (
    <Context.Provider value={h}>      
      {p.children}
    </Context.Provider>
  )
}
