import HeroSection from "../components/HeroSection/HeroSection"
import About from "../components/About/About"
import ArticlesContainer from "../components/ArticlesContainer/ArticlesContainer"

function Home() {
    return (
        <>
        <HeroSection />
        <About />
        <h2>Latest Articles</h2>
        <ArticlesContainer numberOfArticles={3} />
        </>
    )
}

export default Home
