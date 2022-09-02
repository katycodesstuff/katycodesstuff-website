import HeroSection from "../components/HeroSection/HeroSection"
import About from "../components/About/About"
import ArticlesContainer from "../components/ArticlesContainer/ArticlesContainer"

function Home() {
    return (
        <>
        <HeroSection />
        <About />
        <h1>Latest Articles</h1>
        <ArticlesContainer />
        </>
    )
}

export default Home
