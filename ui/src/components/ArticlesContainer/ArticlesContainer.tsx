import { useEffect, useState } from 'react'
import { ArticleSummary, HashnodeClient } from '../../services/hashnode-client'
import dayjs from 'dayjs'
import Article from '../Article/Article'
import './ArticlesContainer.css'

function ArticlesContainer() {
    const [articles, setArticles] = useState<ArticleSummary[]>([{} as ArticleSummary, {} as ArticleSummary, {} as ArticleSummary]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function func(): Promise<void> {
            const client = new HashnodeClient();
            const articles = await client.fetchBlogPosts(3); 

            setArticles(articles);
            setLoading(false);
        }
        func();
    }, []); // [] means only load once on initial page render
    
    return (
        <div className='articles-container'>
            {articles.map((article: ArticleSummary, id: number) => 
            <Article 
            key={id}
            title={article.title} 
            summary={article.brief} 
            date={dayjs(article.dateAdded).format('D MMMM YYYY') } 
            imgSrc={article.coverImage} 
            link={article.slug} 
            loading={loading} />)}
        </div>
    )
}

export default ArticlesContainer
