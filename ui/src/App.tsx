import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className='app'>
      <NavBar />
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/page-not-found' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
