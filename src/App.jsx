import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Test from './pages/Test'

function App() {
  return (
    <Routes>
      <Route path='/:lang/' element={<Home/>} />
      <Route path='/:lang/test' element={<Test />} />
    </Routes>
  )
}

export default App
