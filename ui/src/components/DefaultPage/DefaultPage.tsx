import { PropsWithChildren } from 'react'
import './DefaultPage.css'

function DefaultPage(props: PropsWithChildren) {
    const {children} = props

    return (
        <div className='default-page'>
            {children}
        </div>
    )
}

export default DefaultPage
