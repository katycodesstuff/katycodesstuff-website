import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArticlesContainer from "../components/ArticlesContainer/ArticlesContainer"
import DefaultPage from "../components/DefaultPage/DefaultPage"

function NotFound() {

    const routeProps = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function func(): Promise<void> {
            if (!routeProps.id) {
                navigate('/page-not-found');
                return;
            }
        }
        func();
    }, [ routeProps.id, navigate ]);
    return (
        <DefaultPage centeredText={true}>
        <h1>Oops, this page doesn't exist.</h1>
        <h2>Latest Articles</h2>
        <ArticlesContainer numberOfArticles={3} />
        </DefaultPage>
    )
}

export default NotFound
