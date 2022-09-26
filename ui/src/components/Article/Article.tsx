import './Article.css'

interface Props {
    title: string
    date: string
    summary: string
    link: string
    imgSrc?: string
    loading: boolean
}

interface DefaultImgProps {
    title: string
    id?: number
}

interface ArticleImgProps {
    title: string
    imgSrc: string
}

function Article(props: Props) {
    const {title, date, summary, link, imgSrc, loading } = props

    let randomNumber = Math.floor(Math.random()*3) + 1;
    if (loading) {
        return (
            <LoadingArticle />
        )
    }
    return (
        <a className='article' href={link}>
            <div className='article'>
                <div>{imgSrc 
                ? <ArticleImg title={title} imgSrc={imgSrc} /> 
                : <DefaultImg title={title} id={randomNumber} />}</div>
                <div className='article-grid-item-title'><h2>{title}</h2></div>
                <div className='article-grid-item'><p>{summary.slice(0, 100)}...</p></div>
                <div className='article-grid-item'><span className='article-date'>{date}</span></div>
            </div>
        </a>
    )
}

function ArticleImg(props: ArticleImgProps) {
    const {title, imgSrc} = props

    return (<div className='article-img-wrapper'><img src={imgSrc} alt={title} title={title} /></div>)
}

function DefaultImg(props: DefaultImgProps) {
    const {title} = props

    return (<div className='article-default-img'><span>{title}</span></div>)
}

function LoadingArticle() {
    return (
        <div className='article article-loading'>
            <DefaultImg title='' />
            <div className='article-loading-title' />
            <div className='article-loading-text' />
            <div className='article-loading-date' />
        </div>
    )
}

export default Article
