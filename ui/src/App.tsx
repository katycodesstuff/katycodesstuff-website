import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import HomeMainPage from './components/HomeMainPage/HomeMainPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <HeroSection />
      <HomeMainPage />
      <Footer />
    </div>
  );
}

export default App;
