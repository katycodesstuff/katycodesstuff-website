import { useEffect, useState } from 'react'
import { ArticleSummary, HashnodeClient } from '../../services/hashnode-client'
import dayjs from 'dayjs'
import Article from '../Article/Article'
import config from '../../config.json'
import './ArticlesContainer.css'

interface Props {
    numberOfArticles?: number
}

function ArticlesContainer(props: Props) {
    const [articles, setArticles] = useState<ArticleSummary[]>([{} as ArticleSummary, {} as ArticleSummary, {} as ArticleSummary]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function func(): Promise<void> {
            const client = new HashnodeClient();
            const articles = await client.fetchBlogPosts(props.numberOfArticles); 

            setArticles(articles);
            setLoading(false);
        }
        func();
    }, [props.numberOfArticles]); // [] means only load once on initial page render
    
    return (
        <div className='articles-container'>
            {articles.map((article: ArticleSummary, id: number) => 
            <Article 
            key={id}
            title={article.title} 
            summary={article.brief} 
            date={dayjs(article.dateAdded).format('D MMMM YYYY') } 
            imgSrc={article.coverImage} 
            link={config.HASHNODE_BASE_URL + article.slug} 
            loading={loading} />)}
        </div>
    )
}

export default ArticlesContainer
