import './App.css'
import { Header } from './components/header'
import { Dashboard } from './components/pages/dashboard'
function App() {

  return (
    <div className="bg-gradient-to-r from-blue-100 to-gray-200 bg-clip-content font-extrabold min-h-screen">
      <Header />
      <Dashboard />
    </div>
  )
}

export default App
