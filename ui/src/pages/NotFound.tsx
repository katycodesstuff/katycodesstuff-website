import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArticlesContainer from "../components/ArticlesContainer/ArticlesContainer"
import DefaultPage from "../components/DefaultPage/DefaultPage"

interface Props {}

function NotFound(props: Props) {
    const {} = props

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
        <DefaultPage>
        <p className="centered">Oops, this page doesn't exist.</p>
        <h1>Latest Articles</h1>
        <ArticlesContainer />
        </DefaultPage>
        
    )
}

export default NotFound