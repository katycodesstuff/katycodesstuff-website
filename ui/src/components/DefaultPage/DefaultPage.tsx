import { PropsWithChildren } from 'react'
import './DefaultPage.css'

interface Props extends PropsWithChildren {
    centeredText?: boolean
}

function DefaultPage(props: Props) {
    const {centeredText, children} = props
    const isCentered = centeredText ?? true

    return (
        <div className={`default-page ${isCentered ? 'centered' : ''}`}>
            {children}
        </div>
    )
}

export default DefaultPage
