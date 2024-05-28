import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/navtabs'
import './App.css'
import Body from './components/body'
function App() {
 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path='/' element={<Body />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
