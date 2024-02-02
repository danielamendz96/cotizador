import { CotizadorProvider } from "./context/cotizadorProvider"
import AppSeguro from "./components/AppSeguro"


function App() {
 
  return (
    <CotizadorProvider>

      <AppSeguro />

    </CotizadorProvider>
    
  )
}

export default App
