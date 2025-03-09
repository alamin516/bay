import { Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {

  return (
     <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
  )
}

export default App
