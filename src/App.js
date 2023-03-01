import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'
import ProjectsScreen from './screens/ProjectsScreen'
import SingleProjectScreen from './screens/SingleProjectScreen'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/about' element={<AboutScreen />} exact />
          <Route path='/projects' element={<ProjectsScreen />} exact />
          <Route path='/project' element={<SingleProjectScreen />} exact />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
