import ArticlesContainer from "../components/ArticlesContainer/ArticlesContainer"
import DefaultPage from "../components/DefaultPage/DefaultPage"

function ListArticles() {
    return (
        <DefaultPage centeredText={true}>
            <h1>All Articles</h1>
            <ArticlesContainer />
        </DefaultPage>
    )
}

export default ListArticles
