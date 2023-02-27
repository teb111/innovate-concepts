import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/about' element={<AboutScreen />} exact />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
