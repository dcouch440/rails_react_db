import React, {useContext} from 'react'
import { Context } from './Context'
import GlobalStyle from './_GlobalStyles/GlobalStyle'

const App = () => {
  const {testVal} = useContext(Context)

  return (
    <>
      <GlobalStyle/>
      <h1>{testVal}</h1>
    </>
  )
}

export default App