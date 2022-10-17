import React from "react"
import { PageProvider, usePageProvider } from "./provider"

const Inner = () => {  
  const pvd = usePageProvider()
  return (
    <div style={{ 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontSize: '2rem'
     }}>
      {pvd.data.data}
    </div>
  )
} 

const Home = React.memo(() => {
  
  return (
    <>
      <PageProvider props={{}}>
        <Inner/>
          {/* {pvd.data.data} */}
      </PageProvider>
    </>
  )
})
const exportDefault = {
  Home,
}

export default exportDefault
 