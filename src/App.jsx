
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home /> }/>
      <Route  path="/about" element={<h4>This is a about page</h4>}/>
      <Route  path="/contact" element={<h4>This is a contact page</h4>}/>
      <Route  path="/service" element={<h4>This is a service page</h4>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
