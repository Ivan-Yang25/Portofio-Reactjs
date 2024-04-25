import { ShowProvider } from './context/showContext'
import Main from './components/Main'

function App() {

  return (
    <>
      <ShowProvider>
        <Main />
      </ShowProvider>
      
    </>
  )
}

export default App
