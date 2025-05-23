import './App.css'
import { AppRoutes } from './routes'
import { Navbar } from './Component/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <AppRoutes />
      </main>
    </>
  )
}

export default App
