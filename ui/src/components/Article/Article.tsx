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


function Article(props: Props) {
    const {title, date, summary, link, imgSrc, loading } = props

    let randomNumber = Math.floor(Math.random()*3) + 1;
    if (loading) {
        return (
            <div className='article article-loading'>
                <DefaultImg title="" />
                <div className='article-loading-title' />
                <div className='article-loading-text' />
                <div className='article-loading-date' />
            </div>
        )
    }
    return (
        <a className='article' href={link}>
            <div className='article'>
                {imgSrc 
                ? <div className='article-img-wrapper'><img src={imgSrc} alt={title} title={title} /></div> 
                : <DefaultImg title={title} id={randomNumber} />}
                <h2>{title}</h2>
                <p>{summary.slice(0, 100)}...</p>
                <span className='article-date'>{date}</span>
            </div>
        </a>
    )
}

function DefaultImg(props: DefaultImgProps) {
    const {title} = props

    return <div className={`article-default-img`}><span>{title}</span></div>
}

export default Article
