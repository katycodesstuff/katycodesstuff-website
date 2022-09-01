import './Article.css'

interface Props {
    title: string
    date: string
    summary: string
    link: string
    imgSrc?: string
}

interface DefaultImgProps {
    title: string
}


function Article(props: Props) {
    const {title, date, summary, link, imgSrc } = props

    return (
        <a className='article' href={link}>
            <div className='article'>
                {imgSrc ? <img src={imgSrc} alt={title} title={title} /> : <DefaultImg title={title} />}
                <h2>{title}</h2>
                <p>{summary}</p>
                <span className='article-date'>{date}</span>
            </div>
        </a>
    )
}

function DefaultImg(props: DefaultImgProps) {
    const {title} = props

    return <div className='article-default-img'>{title}</div>
}

export default Article
