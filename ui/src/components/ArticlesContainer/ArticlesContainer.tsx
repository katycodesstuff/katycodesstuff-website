import { PropsWithChildren } from 'react'
import './ArticlesContainer.css'

function ArticlesContainer(props: PropsWithChildren) {
    const { children } = props

    return (
        <div className='articles-container'>
            {children}
        </div>
    )
}

export default ArticlesContainer
